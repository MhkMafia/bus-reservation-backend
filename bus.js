const express = require('express');
const db = require('../db');

const router = express.Router();

// Fetch Buses
router.get('/', async (req, res) => {
    const { from, to, date, type } = req.query;
    try {
        const query = `SELECT * FROM buses WHERE from_city = ? AND to_city = ? AND journey_date = ? AND type LIKE ?`;
        const [rows] = await db.execute(query, [from, to, date, `%${type}%`]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch buses' });
    }
});

module.exports = router;

