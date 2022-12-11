const express = require('express');


const app = express();

app.get('/v1/sample-data', (req, res) => {
    res.status(200).send([
        {
            id: 1,
            data: "lorem ipsum S ajd skd dkln dkl"
        },
        {
            id: 2,
            data: "lorem ipsum S ajd skd dkln dkl"
        },
        {
            id: 3,
            data: "lorem ipsum S ajd skd dkln dkl"
        },
        {
            id: 4,
            data: "lorem ipsum S ajd skd dkln dkl"
        },
        {
            id: 5,
            data: "lorem ipsum S ajd skd dkln dkl"
        },
        {
            id: 6,
            data: "lorem ipsum S ajd skd dkln dkl"
        }
    ])
});

app.post('/v1/post-dummy-data', (req, res) => {
    const { name, address, phonenumber } = req.body;

    const payment_status = fetch('https://api.paypal.com/v2/payment-with-address', { name, address, phonenumber });

    res.send({ payment_status });
})

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`application running on this address => http://localhost:${PORT}`);
})