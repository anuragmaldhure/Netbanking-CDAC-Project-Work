
//mysql

DELIMITER //

CREATE TRIGGER update_balance_trigger
BEFORE INSERT ON account_transactions
FOR EACH ROW
BEGIN
    DECLARE v_new_balance DECIMAL(19,2);

    -- Update the balance in the accounts table
    IF NEW.transaction_type = '+' THEN
        UPDATE saving_account_details
        SET balance = balance + NEW.transaction_amount
        WHERE customer_id = NEW.customer_id;
    ELSEIF NEW.transaction_type = '-' THEN
        UPDATE saving_account_details
        SET balance = balance - NEW.transaction_amount
        WHERE customer_id = NEW.customer_id;
    END IF;

    -- Fetch the new balance
    SELECT balance INTO v_new_balance
    FROM saving_account_details
    WHERE customer_id = NEW.customer_id;

    -- Assign the new balance to current_balance in the transactions table
    SET NEW.current_balance = v_new_balance;
END//

DELIMITER ;



INSERT INTO offers (offer_availability, offer_details, offer_minimum_balance, offer_title) VALUES
(1, 'Bhai, ab tum bhi VIP ho! Apna account kholo aur ₹1000 ka balance rakho toh aapko milega free movie tickets ka voucher.', 1000, 'VIP Membership'),
(1, 'Arre yaar, ₹6000 ka balance rakho aur paao ₹500 ka free recharge! Kya scene hai!', 6000, 'Recharge Bonanza'),
(1, 'Dil khol ke shopping karne ka time aa gaya! Bas ₹11000 ka balance rakho aur paao 10% discount shopping vouchers.', 11000, 'Shopping Fiesta'),
(1, 'Chal bhai, ₹16000 ka balance rakho aur paao ek saal ka free Netflix subscription! Full-on entertainment guaranteed.', 16000, 'Netflix Binge'),
(1, 'Hindi film dialogue: "Mere paas maal hai!" Ab tumhare paas bhi hoga! ₹21000 ka balance rakho aur paao exclusive cashback offers.', 21000, 'Cashback Bonanza'),
(1, 'Balle balle! ₹26000 ka balance rakho aur paao VIP access to music concerts! Thumka laga ke nacho!', 26000, 'Concert Pass'),
(1, 'Swag se karenge sabka swagat! ₹31000 ka balance rakho aur paao premium credit card with zero annual fees.', 31000, 'Swagat Card'),
(1, 'Chak de phatte! ₹36000 ka balance rakho aur paao 2 nights ka free stay in 5-star hotel! Full-on luxury.', 36000, 'Luxury Getaway'),
(1, 'Thoda pyaar, thoda magic! ₹41000 ka balance rakho aur paao special anniversary gifts.', 41000, 'Anniversary Surprise'),
(1, 'Babuji ne kaha, gaadi chhod do! Magar hum kehte hai, gaadi lo! ₹46000 ka balance rakho aur paao exclusive car loan offers.', 46000, 'Car Loan Benefits'),
(1, 'Paise de, swaad le! ₹51000 ka balance rakho aur paao complimentary dinner for two at top restaurants.', 51000, 'Dining Delight'),
(1, 'Yeh dosti hum nahi todenge! ₹56000 ka balance rakho aur paao cashback on friend referrals.', 56000, 'Friendship Bonus'),
(1, 'Ab har khwaab poora hoga! ₹61000 ka balance rakho aur paao low-interest personal loan offers.', 61000, 'Dream Fulfillment'),
(1, 'Kyun ki ye dil maange more! ₹66000 ka balance rakho aur paao additional savings account benefits.', 66000, 'More Savings'),
(1, 'Ab toh har din Diwali hogi! ₹71000 ka balance rakho aur paao festive season cashback offers.', 71000, 'Diwali Dhamaka'),
(1, 'Yeh hai meri life, kuch khaas! ₹76000 ka balance rakho aur paao special birthday surprises.', 76000, 'Birthday Bash'),
(1, 'Rozgaar ka sawaal hai, bhai! ₹81000 ka balance rakho aur paao career guidance workshops.', 81000, 'Career Boost'),
(1, 'Yeh hai Mumbai meri jaan! ₹86000 ka balance rakho aur paao free local travel vouchers.', 86000, 'Mumbai Meri Jaan'),
(1, 'Zindagi na milegi dobara! ₹91000 ka balance rakho aur paao exclusive travel rewards.', 91000, 'Travel Bonanza'),
(1, 'Is baar India ki shaan! ₹96000 ka balance rakho aur paao patriotic merchandise.', 96000, 'Proud Indian'),
(1, 'Ab toh bank se dosti hai! ₹100000 ka balance rakho aur paao priority customer benefits.', 100000, 'Banking Royalty');


DROP TRIGGER IF EXISTS update_balance_trigger;

SHOW CREATE TRIGGER trigger_name;





