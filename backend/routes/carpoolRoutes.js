const express = require('express');
const router = express.Router();
const db = require('../models/db.js');

router.post('/trips', (req, res) => {
    const { driverId, departure, destination, date, availableSeats } = req.body;
    const sql = `INSERT INTO trips (driverId, departure, destination, date, availableSeats) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [driverId, departure, destination, date, availableSeats], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.status(201).json({ id: this.lastID, driverId, departure, destination, date, availableSeats });
    });
});

// Get available trips
router.get('/trips', (req, res) => {
    const sql = `SELECT * FROM trips`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json(rows);
    });
});

// Update available seats
router.put('/trips/:id', (req, res) => {
    const { availableSeats } = req.body;
    const sql = `UPDATE trips SET availableSeats = ? WHERE id = ?`;
    db.run(sql, [availableSeats, req.params.id], function(err) {
        if (err) {
            return res.status(500).send(err.message);
        }
        res.json({ id: req.params.id, availableSeats });
    });
});

module.exports = router;