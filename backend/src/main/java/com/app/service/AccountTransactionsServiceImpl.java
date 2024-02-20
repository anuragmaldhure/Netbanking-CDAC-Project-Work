package com.app.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.app.dao.AccountTransactionsDao;
import com.app.dao.CustomerDao;
import com.app.dao.EmployeeDao;
//import com.app.dao.EmployeeDao;
import com.app.dto.AccountTransactionsDTO;
import com.app.dto.BankEmployeeDTO;
import com.app.dto.customer.CustomerDetailsDTO;
import com.app.entities.AccountTransactions;
import com.app.entities.BankEmployeeDetails;
import com.app.entities.CustomerDetails;

//import com.app.entities.Beneficiary;
import org.modelmapper.ModelMapper;

@Service
@Transactional
public class AccountTransactionsServiceImpl implements AccountTransactionsService {
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired 
	private AccountTransactionsDao accountTransactionsDao;
	
	@Autowired
	private EmployeeDao bankEmployeeDao;
	
	@Autowired
	private  ModelMapper mapper;
	
	@Autowired
	private EmailService emailService;
	
	@Override
	public List<AccountTransactionsDTO> getAllTransactionDetails(Long customerId) {
	    List<AccountTransactionsDTO> list = accountTransactionsDao.findAllTransactionsWithCustomerIdInCustomerDetails(customerId)
	            .stream()
	            .map(transaction -> mapper.map(transaction, AccountTransactionsDTO.class))
	            .collect(Collectors.toList());

	    return list;
	}

	@Override
	public List<AccountTransactionsDTO> getAllTransactionDetailsByCustomer(Long customerId, int pageNumber, int pageSize) {
//		 Creates a PageRequest(imple class of Pageable : i/f for pagination) based
//		 upon page no n size
		Pageable pageable = PageRequest.of(pageNumber, pageSize);
		
		
		// fetches the Page of Transactions --> getContent() --> List<AccountTransactions>
//		List<AccountTransactions> transactionsList = accountTransactionsDao.findAll(pageable).getContent();
		
		Page<AccountTransactions> transactionsPage = accountTransactionsDao.findAllTransactionsWithCustomerIdInCustomerDetailsPagable(customerId, pageable);
		
		// Retrieves the content from the Page
	    List<AccountTransactions> transactionsList = transactionsPage.getContent();
		
		return transactionsList.stream()
//				.filter(trans -> trans.getTransactionById()==customerId)
					.map(trans -> mapper.map(trans, AccountTransactionsDTO.class))
							.collect(Collectors.toList());
		 
	}
	
	@Override
	public void depositMoney(Long employeeId, String accountNumber, Double amountToDeposit, String remarks) {
		
		CustomerDetails customer = customerDao.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with account number: " + accountNumber));
		
		BankEmployeeDetails bankEmployee = bankEmployeeDao.findById(employeeId)
                .orElseThrow(() -> new EntityNotFoundException("Employee not found with ID: " + employeeId));
		
		if(customer.getKycStatus()== null) {
	        // KYC error
	        throw new RuntimeException("Customer KYC error! Please verify the KYC first...");
		}
		else if(!customer.getAccountActiveStatus()) {
			// Account freezed error
	        throw new RuntimeException("Account is freezed! Please contact bank employee to reactivate the account for transactions...");
		}
		 // KYC error
		else if (customer.getKycStatus()== false) {
            throw new RuntimeException("KYC is already rejected! Ask the customer to reapply for KYC verification...");
        }
		//if KYC is already approved
		else {
			AccountTransactions transaction = new AccountTransactions();
			transaction.setCustomer(customer);
			transaction.setRecipientId(customer.getCustomerId());
			transaction.setTransactionAmount(amountToDeposit);
			transaction.setTransactionById(employeeId);
			transaction.setTransactionRemarks(remarks);
//			transaction.setTransactionTimestamp(new Timestamp(System.currentTimeMillis()));
			transaction.setTransactionTimestamp(new Date(System.currentTimeMillis()));
			transaction.setTransactionType("+");
			accountTransactionsDao.save(transaction);
			
			emailService.sendMoneyDepositMail(customer.getEmailId(), 
					customer.getAccountHolderFirstName(),
					customer.getAccountHolderLastName(),
					amountToDeposit,
					employeeId
			);
		}	
	}

	


	
	@Override
	public void withdrawMoney(Long customerId, Double amountToWithdraw, String remarks) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
		if(customer.getKycStatus()== null) {
	        // KYC error
	        throw new RuntimeException("Customer KYC error! Please get your KYC verified for activating transactions...");
		}
		else if(!customer.getAccountActiveStatus()) {
			// Account freezed error
	        throw new RuntimeException("Account is freezed! Please contact bank employee to reactivate the account for transactions...");
		}
		 // KYC error
		else if (customer.getKycStatus()== false) {
            throw new RuntimeException("KYC is already rejected by bank! Please reapply for KYC verification...");
        }
		//if KYC is already approved
		else {
			AccountTransactions transaction = new AccountTransactions();
			transaction.setCustomer(customer);
			transaction.setRecipientId(customerId);
			transaction.setTransactionAmount(amountToWithdraw);
			transaction.setTransactionById(customerId);
			transaction.setTransactionRemarks(remarks);
			transaction.setTransactionTimestamp(new Date(System.currentTimeMillis()));
			transaction.setTransactionType("-");
			accountTransactionsDao.save(transaction);
			
			emailService.withdrawMoneyMail(customer.getEmailId(), 
				customer.getAccountHolderFirstName(),
				customer.getAccountHolderLastName(),
				amountToWithdraw
			);

		}
	}
//
//	@Override
//	public void sendMoney(Double amountToSend, Optional<CustomerDetails> customer, Optional<Beneficiary> beneficiary,
//			String remarks) {
//		if(customer.isEmpty()) {
//			throw new EntityNotFoundException("Customer not found");
//		}
//		else if(beneficiary.isEmpty()) {
//			throw new EntityNotFoundException("Beneficiary not found");
//		}
//		else {
//			if(customer.get().getKycStatus()== null) {
//		        // KYC error
//		        throw new RuntimeException("Customer KYC error! Please get your KYC verified for activating transactions...");
//			}
//			 // KYC error
//			else if (customer.get().getKycStatus()== false) {
//	            throw new RuntimeException("KYC is already rejected by bank! Please reapply for KYC verification...");
//	        }
//			//if KYC is already approved
//			else {
//				AccountTransactions transaction1 = new AccountTransactions();
//				transaction1.setCustomer(customer.get());
//				transaction1.setRecipientId(beneficiary.get().getBeneficiaryId());
//				transaction1.setTransactionAmount(amountToSend);
//				transaction1.setTransactionById(customer.get().getCustomerId());
//				transaction1.setTransactionRemarks(remarks);
//				transaction1.setTransactionTimestamp(new Timestamp(System.currentTimeMillis()));
//				transaction1.setTransactionType("-");
//				accountTransactionsDao.save(transaction1);
//				
//				
//				
////				AccountTransactions transaction2 = new AccountTransactions();
////				transaction2.setCustomer();
////				transaction2.setRecipientId(beneficiary.get().getBeneficiaryId());
////				transaction2.setTransactionAmount(amountToSend);
////				transaction2.setTransactionById(customer.get().getCustomerId());
////				transaction2.setTransactionRemarks(remarks);
////				transaction2.setTransactionTimestamp(new Timestamp(System.currentTimeMillis()));
////				transaction2.setTransactionType("+");
////				accountTransactionsDao.save(transaction2);
//			}
//		}
//	}

}
