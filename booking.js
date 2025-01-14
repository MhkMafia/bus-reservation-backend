const express = require('express');
const db = require('../db');

const router = express.Router();

// Fetch Booked Seats for a Bus
router.get('/:busId', async (req, res) => {
    const { busId } = req.params;

    try {
        const [rows] = await db.execute('SELECT seat_no FROM bookings WHERE bus_id = ?', [busId]);
        res.json(rows.map(row => row.seat_no));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings' });
    }
});

// Book a Seat
router.post('/', async (req, res) => {
    const { userId, busId, seatNo } = req.body;

    try {
        const query = 'INSERT INTO bookings (user_id, bus_id, seat_no) VALUES (?, ?, ?)';
        await db.execute(query, [userId, busId, seatNo]);
        res.status(201).json({ message: 'Seat booked successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Booking failed' });
    }
});

module.exports = router;

