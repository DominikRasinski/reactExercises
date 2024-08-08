import { useState, useEffect } from "react";

export const Convert = () => {
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('USD');
    const [currencyAmount, setCurrencyAmount] = useState(0);
    const [output, setOutput] = useState(0);

    return (
        <div>
            <input type="text" />
            <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>OUTPUT</p>
        </div>
    )
}