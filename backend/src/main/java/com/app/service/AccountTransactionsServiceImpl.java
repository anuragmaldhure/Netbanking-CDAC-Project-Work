package com.app.service;

import java.util.Date;
import java.util.List;
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
import com.app.dao.CustomerSavingsAccountDao;
import com.app.dao.EmployeeDao;
//import com.app.dao.EmployeeDao;
import com.app.dto.AccountTransactionsDTO;
import com.app.dto.customer.CustomerAddressDTO;
import com.app.dto.customer.CustomerSavingAccountsDTO;
import com.app.entities.AccountTransactions;
import com.app.entities.CustomerDetails;

//import com.app.entities.Beneficiary;
import org.modelmapper.ModelMapper;

@Service
@Transactional
public class AccountTransactionsServiceImpl implements AccountTransactionsService {
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired 
	private AccountTransactionsDao accountTransactionsDao;
	
	@Autowired
	private CustomerSavingsAccountDao customerSavingsAccountDao;
	
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
		
		bankEmployeeDao.findById(employeeId)
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
		
		CustomerSavingAccountsDTO savingaccountdetail =  mapper.map(customerSavingsAccountDao.findByCustomer(customerId), CustomerSavingAccountsDTO.class);
		
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
		else if(savingaccountdetail.getBalance()<0 || (savingaccountdetail.getBalance()-amountToWithdraw <0)) {
			throw new RuntimeException("Insufficient Balance in your account! Cannot complete transaction...");
		}
		else if(amountToWithdraw<=0) {
			throw new RuntimeException("Not a valid amount... Please try again");
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
	
	@Override
	public void sendMoney(Long customerId, String receiverAccountNumber, Double amountToSend, String remarks) {
		CustomerDetails customer = customerDao.findById(customerId)
                .orElseThrow(() -> new EntityNotFoundException("Customer not found with ID: " + customerId));
		
		CustomerDetails receiver = customerDao.findByAccountNumber(receiverAccountNumber)
                .orElseThrow(() -> new EntityNotFoundException("Customer with account number " + receiverAccountNumber +
                		" doesn't have acoount in our bank!"));
		
		CustomerSavingAccountsDTO savingaccountdetail =  mapper.map(customerSavingsAccountDao.findByCustomer(customerId), CustomerSavingAccountsDTO.class);
		
		if(customer.getKycStatus()== null) {
			// KYC error
	        throw new RuntimeException("Customer KYC error! Please get your KYC verified for activating transactions...");
		}
		else if(!customer.getAccountActiveStatus()) {
			// Account freezed error
	        throw new RuntimeException("Account is freezed! Please contact bank employee to reactivate the account for transactions...");
		}
		else if(receiver.getKycStatus()== null) {
			// KYC error
	        throw new RuntimeException("Receiver KYC error! Please ask customer who is receiver to get KYC verified for activating transactions for his account...");
		}
		else if(!receiver.getAccountActiveStatus()) {
			// Account freezed error
	        throw new RuntimeException("Receiver account is freezed! Please ask receiver to contact bank employee to reactivate his/her account for transactions...");
		}
		else if(receiver.getKycStatus()== false) {
			throw new RuntimeException("Receiver KYC is already rejected by bank! Please ask receiver to reapply for KYC verification...");
		}	
		else {
			// KYC error
			if (customer.getKycStatus()== false) {
	            throw new RuntimeException("KYC is already rejected by bank! Please reapply for KYC verification...");
	        }
			else if(savingaccountdetail.getBalance()<0 || (savingaccountdetail.getBalance()-amountToSend <0)) {
				throw new RuntimeException("Insufficient Balance in your account! Cannot complete transaction...");
			}
			else if(amountToSend<=0) {
				throw new RuntimeException("Not a valid amount... Please try again");
			}
			//if KYC is already approved
			else {
				AccountTransactions transaction1 = new AccountTransactions();
				transaction1.setCustomer(customer);
				transaction1.setRecipientId(receiver.getCustomerId());
				transaction1.setTransactionAmount(amountToSend);
				transaction1.setTransactionById(customer.getCustomerId());
				transaction1.setTransactionRemarks(remarks);
				transaction1.setTransactionTimestamp(new Date(System.currentTimeMillis()));
				transaction1.setTransactionType("-");
				accountTransactionsDao.save(transaction1);
				
				
				
				AccountTransactions transaction2 = new AccountTransactions();
				transaction2.setCustomer(receiver);
				transaction2.setRecipientId(receiver.getCustomerId());
				transaction2.setTransactionAmount(amountToSend);
				transaction2.setTransactionById(customer.getCustomerId());
				transaction2.setTransactionRemarks(remarks);
				transaction2.setTransactionTimestamp(new Date(System.currentTimeMillis()));
				transaction2.setTransactionType("+");
				accountTransactionsDao.save(transaction2);
				
				emailService.moneySentMail(customer.getEmailId(), 
					customer.getAccountHolderFirstName(),
					customer.getAccountHolderLastName(),
					amountToSend,
					receiver.getAccountNumber(),
					receiver.getAccountHolderFirstName(),
					receiver.getAccountHolderLastName(),
					remarks,
					transaction1.getTransactionTimestamp(),
					transaction1.getTransactionId()
				);
				
				emailService.moneyReceivedMail(receiver.getEmailId(), 
					receiver.getAccountHolderFirstName(),
					receiver.getAccountHolderLastName(),
					amountToSend,
					customer.getAccountNumber(),
					customer.getAccountHolderFirstName(),
					customer.getAccountHolderLastName(),
					remarks,
					transaction2.getTransactionTimestamp(),
					transaction2.getTransactionId()
				);
			}
		}	
	}
}
