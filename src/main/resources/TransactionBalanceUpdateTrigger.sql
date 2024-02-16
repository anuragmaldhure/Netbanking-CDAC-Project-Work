CREATE TRIGGER update_balance_after_insert
AFTER INSERT ON account_transactions
FOR EACH ROW
BEGIN
    DECLARE total_transaction_amount DECIMAL(19, 2);

    SELECT SUM(transaction_amount) INTO total_transaction_amount
    FROM account_transactions
    WHERE customer_id = NEW.customer_id;

    UPDATE customer_saving_accounts
    SET balance = total_transaction_amount
    WHERE customer_id = NEW.customer_id;
END;
