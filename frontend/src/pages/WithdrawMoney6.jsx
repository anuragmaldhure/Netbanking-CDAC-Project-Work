// WithdrawMoney6.jsx

import React, { useState } from 'react';

const WithdrawMoney6 = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [amount, setAmount] = useState('')

    const handleToggle = () => {
        setIsChecked(prevState => !prevState);
};


    return (
        <div>
            <div>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type='text'
              className='form-control'
            />
            </div>
            <div>
                <label className="switch" style={{ position: "relative", display: "inline-block", width: "60px", height: "34px", cursor: "pointer" }} onClick={handleToggle}>
                    <input className="switch__input" type="checkbox" role="switch" style={{ display: "none" }} checked={isChecked} />
                    <span className="switch__base-outer" style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", backgroundColor: isChecked ? "#673ab7" : "#ccc", borderRadius: "34px", transition: "background-color 0.4s" }}></span>
                    <span className="switch__base-inner" style={{ position: "absolute", top: "4px", left: "4px", right: "4px", bottom: "4px", backgroundColor: isChecked ? "#fff" : "white", borderRadius: "50%", transition: "transform 0.4s" }}></span>
                    <span className="switch__knob-container" style={{ position: "absolute", top: "2px", left: isChecked ? "calc(100% - 28px)" : "2px", width: "26px", height: "26px", backgroundColor: isChecked ? "#673ab7" : "white", borderRadius: "50%", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)", transition: "background-color 0.4s, transform 0.4s" }}>
                        <span className="switch__knob" style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", width: "22px", height: "22px", backgroundColor: "#fff", borderRadius: "50%", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)", transition: "transform 0.4s, box-shadow 0.4s" }}></span>
                    </span>
                    <span className="switch_text" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "70px", color: isChecked ? "#673ab7" : "#000" }}>Power</span>
                </label>
            </div>
        </div>
    );
};

export default WithdrawMoney6;
