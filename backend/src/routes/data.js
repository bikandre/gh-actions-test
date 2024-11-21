const express = require('express');
const router = express.Router();

// Sample data endpoint
router.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend! I am not saying that its running but its running',
        data: [1, 2, 3, 4, 5],
    });
});

module.exports = router;
