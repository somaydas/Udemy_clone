
import React, { useState } from 'react';
import './PaymentPage.css'; // Import the CSS file for styling

const PaymentPage = () => {
    // State variables to store user input
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you can implement logic for payment processing and validation
        console.log('Payment processing logic goes here!');
    };

    return (

        <div className="payment-container">
            <h2>Secure Payment</h2>
            <form onSubmit={handleFormSubmit} className="payment-form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength="16"
                        placeholder="Enter your card number"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardHolder">Card Holder</label>
                    <input
                        type="text"
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(e) => setCardHolder(e.target.value)}
                        placeholder="Enter the cardholder's name"
                        required
                    />
                </div>
                <div className="form-group form-group-half">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        maxLength="5"
                        placeholder="MM/YY"
                        required
                    />
                </div>
                <div className="form-group form-group-half">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength="3"
                        placeholder="CVV"
                        required
                    />
                </div>
                <button type="submit" className='button'>Pay Now</button>
            </form>
        </div>
    );
};

export default PaymentPage;