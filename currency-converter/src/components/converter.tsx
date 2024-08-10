import { useState, useEffect } from "react";

type currencyType = 'USD' | 'EUR' | 'CAD' | 'INR';

export const Convert = () => {
    const [currencyFrom, setCurrencyFrom] = useState<currencyType>('USD');
    const [currencyTo, setCurrencyTo] = useState<currencyType>('USD');
    const [currencyAmount, setCurrencyAmount] = useState(1);
    const [output, setOutput] = useState(0);

    const handleInput = (value: any) => {
        if (isFinite(value)) {
            return setCurrencyAmount(() => value);
        }
        return;
    }

    const handleCurrencyFrom = (value: any) => {
        const stringValue: currencyType = value.toString();
        setCurrencyFrom(stringValue);
    }

    const handleCurrencyTo = (value: any) => {
        const stringValue: currencyType = value.toString();
        setCurrencyTo(stringValue);
    }

    useEffect(() => {
        async function convert() {
            try{
                if(currencyFrom === currencyTo) return setOutput(currencyAmount);
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${currencyAmount}&from=${currencyFrom}&to=${currencyTo}`);
                const data = await res.json();
                setOutput(data.rates[currencyTo]);
            } catch(error) {
                console.log(error);
            } finally {
                
            }
        }
        convert();
    }, [currencyAmount, currencyFrom, currencyTo])

    return (
        <div>
            <input type="text" onChange={(e) => handleInput(e.target.value)}/>
            <select onChange={(e) => handleCurrencyFrom(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select onChange={(e) => handleCurrencyTo(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{output}</p>
        </div>
    )
}