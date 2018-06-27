const express = require('express');

const router = express.Router();

const users = [
    {
        name: 'j',
        age: 10
    }, {
        name: 's',
        age: 10 
    }
];

router.get('/', (req, res) => {
    res.json(users);
});

module.exports = router;