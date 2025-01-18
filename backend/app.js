import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import driversDatabase from '../frontend/src/js/database.js';
const app = express();
const bookingRequests = [];
const bookingStatuses = new Map(); // Add this line to define bookingStatuses
const PORT = process.env.PORT || 5000;

// Resolve directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend/src')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.use('/mapping', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/mapping.html'));
});
app.use('/emergency', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/Emergency.html'));
});

app.use('/carpooling', (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend/public/carpooling4.html"));
});

app.use('/entertainment', (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend/public/entertainment1.html"));
});

app.get('/about', (req, res) => {   
    console.log("about");
    res.sendFile(path.join(__dirname, '../frontend/public/about.html'));
});

app.get('/driver', (req, res) => {   
    console.log("driver page accessed");
    res.sendFile(path.join(__dirname, '../frontend/public/driver.html'));
});
app.get('/api/drivers', (req, res) => {
    console.log("Request to get all drivers");
    res.json(driversDatabase);
});


app.post('/api/bookRide', (req, res) => {
    console.log('Request received at /api/bookRide:', req.body);
    const { userId, driverId, userName, userContact, pickupLocation, destination } = req.body;

    if (!userId || !driverId || !userName || !userContact || !pickupLocation || !destination) {
        console.log("Validation failed");
        return res.status(400).json({ message: 'All fields are required!' });
    }
    bookingRequests.push({ userId, driverId, userName, userContact, pickupLocation, destination });
    bookingStatuses.set(userId.toString(), { status: 'pending' });
    console.log('Booking request received:', req.body);
    res.status(201).json({ message: 'Booking request submitted successfully!' });
});

app.get('/api/bookingStatus/:userId', (req, res) => {
    const userId = req.params.userId;
    const status = bookingStatuses.get(userId);
    
    // Always return a valid response with a status
    res.status(200).json({
        status: status?.status || 'pending'
    });
});

app.get('/api/getDriverDetails/:driverId', (req, res) => {
    const driverId = parseInt(req.params.driverId);
    const driver = driversDatabase.find(driver => driver.id === driverId);

    if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
    }

    res.status(200).json(driver);
});

// New endpoint to update booking status
app.post('/api/updateBookingStatus', (req, res) => {
    const { userId, driverId, status } = req.body;
    
    if (!userId || !driverId || !status) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Update the booking status here
    const updatedStatus = updateBookingStatus(userId, driverId, status);
    
    if (updatedStatus) {
        res.status(200).json({ status: updatedStatus });
    } else {
        res.status(500).json({ message: 'Failed to update booking status' });
    }
});

function updateBookingStatus(userId, driverId, status) {
    // Update the booking status here
    // For example:
    const bookingStatus = bookingStatuses.get(userId.toString());
    if (bookingStatus) {
        bookingStatus.status = status;
        bookingStatuses.set(userId.toString(), bookingStatus);
        return bookingStatus.status;
    } else {
        return null;
    }
}

// Additional endpoints for ride lifecycle
app.post('/api/startRide', (req, res) => {
    const { userId, driverId } = req.body;
    
    if (!userId || !driverId) {
        return res.status(400).json({ message: 'Missing user or driver ID' });
    }

    // Update status to 'in-progress'
    bookingStatuses.set(userId.toString(), { status: 'in-progress' });
    
    res.status(200).json({ message: 'Ride started successfully' });
});

app.post('/api/completeRide', (req, res) => {
    const { userId, driverId } = req.body;
    
    if (!userId || !driverId) {
        return res.status(400).json({ message: 'Missing user or driver ID' });
    }

    // Update status to 'completed'
    bookingStatuses.set(userId.toString(), { status: 'completed' });
    
    // Optional: Remove the booking request
    const requestIndex = bookingRequests.findIndex(
        request => request.userId === userId && request.driverId === driverId
    );
    if (requestIndex !== -1) {
        bookingRequests.splice(requestIndex, 1);
    }
    
    res.status(200).json({ message: 'Ride completed successfully' });
});

app.get('/api/getDriverRequests/:driverId', (req, res) => {
    const driverId = parseInt(req.params.driverId);
    const driverRequests = bookingRequests
        .filter(request => request.driverId === driverId)
        .map(request => ({
            ...request,
            status: bookingStatuses.get(request.userId.toString())?.status || 'pending'
        }));

    res.status(200).json(driverRequests);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});