CREATE TRIGGER update_balance_after_transaction
AFTER INSERT ON account_transactions
FOR EACH ROW
BEGIN
    DECLARE transaction_amount DECIMAL(19,2);

    SET transaction_amount = IF(NEW.transaction_type = '+', NEW.transaction_amount, -NEW.transaction_amount);

    UPDATE customer_saving_accounts
    SET balance = balance + transaction_amount
    WHERE customer_id = NEW.customer_id;
END;


-- CREATE TRIGGER update_balance_after_transaction
-- AFTER INSERT ON account_transactions
-- FOR EACH ROW
-- SET @transaction_amount = IF(NEW.transaction_type = '+', NEW.transaction_amount, -NEW.transaction_amount);
-- 
-- UPDATE customer_saving_accounts
-- SET balance = balance + @transaction_amount
-- WHERE customer_id = NEW.customer_id;


-- CREATE TRIGGER update_balance_after_transaction
-- AFTER INSERT ON account_transactions
-- FOR EACH ROW
-- BEGIN
--     DECLARE transaction_amount DECIMAL(19,2);
--     
--     IF NEW.transaction_type = '+' THEN
--         SET transaction_amount = NEW.transaction_amount;
--     ELSE
--         SET transaction_amount = -NEW.transaction_amount;
--     END IF;
--     
--     UPDATE customer_saving_accounts
--     SET balance = balance + transaction_amount
--     WHERE customer_saving_accounts.customer_id = NEW.customer_id;
-- END;


-- DELIMITER //
-- 
-- CREATE TRIGGER update_balance_after_transaction
-- AFTER INSERT ON account_transactions
-- FOR EACH ROW
-- BEGIN
--     DECLARE transaction_amount DECIMAL(19,2);
--     
--     -- Calculate the transaction amount based on the transaction type
--     IF NEW.transaction_type = '+' THEN
--         SET transaction_amount = NEW.transaction_amount;
--     ELSE
--         SET transaction_amount = -NEW.transaction_amount;
--     END IF;
--     
--     -- Update the balance in customer_saving_accounts table
--     UPDATE customer_saving_accounts
--     SET balance = balance + transaction_amount
--     WHERE customer_saving_accounts.customer_id = NEW.customer_id;
-- END//
-- 
-- DELIMITER ;

