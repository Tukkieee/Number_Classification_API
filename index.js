const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8080;
app.use(cors());





const isPrime = (n) => {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

const isPerfect = (n) => {
    if (n < 2) return false;
    if (n === 2) return true; 
    if (n % 2 === 0) return false; 
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
};

const isArmstrong = (n) => {
    const digits = String(n).split('');
    const length = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), length), 0);
    return sum === n;
};

const getFunFact = async (n) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${n}/math?json`);
        return response.data.text || 'No fun fact available.';
    } catch (error) {
        return 'No fun fact available.';
    }
};

// API Endpoint
app.get('/api/classify-number', async (req, res) => {
    const number = req.query.number;

    
    if (!number || isNaN(number) || !Number.isInteger(parseFloat(number)) ) {
        return res.status(400).json({
            number: number,
            error: true
        });
    }

    const num = parseInt(number, 10);
    const properties = [];

    if (isArmstrong(num)) properties.push('armstrong');
    if (num % 2 === 0) properties.push('even');
    else properties.push('odd');

    const digitSum = String(num).split('').reduce((acc, digit) => {
        if (digit === '-') return acc; // Skip the negative sign
        return acc + Number(digit);
    }, 0) * Math.sign(num);
    const funFact = await getFunFact(num);

    res.json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: properties,
        digit_sum: digitSum,
        fun_fact: funFact
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});