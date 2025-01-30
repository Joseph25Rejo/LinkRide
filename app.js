import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from "dotenv"
dotenv.config();
import driversDatabase from './frontend/src/js/database.js';
const app = express();
const bookingRequests = [];
const bookingStatuses = new Map();
const PORT = process.env.PORT || 5000;


const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend/public')));
app.use(express.static(path.join(__dirname, 'frontend/src')));
app.use('/css', express.static(path.join(__dirname, 'frontend/src/css')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/public/index.html'));
});

app.use('/mapping', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/public/mapping.html'));
});
app.use('/emergency', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/public/Emergency3.html'));
});

app.use('/carpooling', (req,res) => {
    res.sendFile(path.join(__dirname, "./frontend/public/carpooling4.html"));
});

app.use('/entertainment', (req,res) => {
    res.sendFile(path.join(__dirname, "./frontend/public/entertainment3.html"));
});

app.get('/about', (req, res) => {   
    console.log("about");
    res.sendFile(path.join(__dirname, './frontend/public/about.html'));
});

app.get('/driver', (req, res) => {   
    console.log("driver page accessed");
    res.sendFile(path.join(__dirname, './frontend/public/driver.html'));
});
app.get('/api/drivers', (req, res) => {
    console.log("Request to get all drivers");
    res.json(driversDatabase);
});


app.post('/api/bookRide', (req, res) => {
    console.log('Request received at /api/bookRide:', req.body);
    const { userId, driverId, userName, userContact, pickupLocation, destination, isEmergency } = req.body;

    if (!userId || !driverId || !userName || !userContact || !pickupLocation || !destination) {
        console.log("Validation failed");
        return res.status(400).json({ message: 'All fields are required!' });
    }

    // Fetch the driver's name from the driversDatabase using the driverId
    const driver = driversDatabase.find(driver => driver.id === driverId);
    if (!driver) {
        console.log("Driver not found");
        return res.status(404).json({ message: 'Driver not found!' });
    }

    const driverName = driver.name;
    const driverContact = driver.contactNumber;

    // Check if the driver is available (optional)
    const driverStatus = bookingStatuses.get(driverId.toString());
    if (driverStatus && driverStatus.status !== 'completed' && driverStatus.status !== 'pending') {
        return res.status(400).json({ message: 'Driver is not available for booking' });
    }

    // Save the booking request with the correct driverName
    bookingRequests.push({ 
        userId, 
        driverId, 
        userName, 
        userContact, 
        pickupLocation, 
        destination,
        isEmergency: isEmergency || false
     });
        
    bookingStatuses.set(userId.toString(), { 
        status: 'pending', 
        driverName: driverName , 
        driverContact: driverContact,
        isEmergency: isEmergency || false
     }); // Set driverName properly here
    console.log('Booking request received:', req.body);
    console.log("IS EMERGENCY : ", isEmergency);
    res.status(201).json({ message: 'Booking request submitted successfully!' });
});


// Server route to handle booking status checks
app.get('/api/bookingStatus/:userId/:driverId', (req, res) => {
    const { userId, driverId } = req.params;
    console.log(userId)
    const booking = bookingStatuses.get(userId.toString());
    console.log("Booking status request:", booking);
    console.log("Booking!!")

    if (!booking) {
        return res.status(404).json({ message: 'Booking not found.' });
    }

    res.json({
        status: booking.status,
        driverName: booking.driverName || 'Default Driver',
        driverContact: booking.driverContact || 'Unknown',
        message: booking.message || '', // Include the message in response
        timestamp: booking.timestamp || Date.now(),
        isEmergency:  bookingStatuses.get(request.userId.toString())?.isEmergency || false
    });
    console.log("Driver : ", booking.driverName, "isEmergency : ", booking.isEmergency);
});


app.get('/api/getDriverRequests/:driverId', (req, res) => {
    const driverId = parseInt(req.params.driverId);
    const driverRequests = bookingRequests
        .filter(request => request.driverId === driverId)
        .map(request => ({
            ...request,
            status: bookingStatuses.get(request.userId.toString())?.status || 'pending',
            isEmergency: bookingStatuses.get(request.userId.toString())?.isEmergency || false 
            // Include isEmergency from bookingStatuses 
        }));

    res.status(200).json(driverRequests);
});

// New endpoint to update booking status
app.post('/api/updateBookingStatus', (req, res) => {
    const { userId, driverId, status, message } = req.body;
    
    if (!userId || !driverId || !status) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Update the booking status here
    const updatedStatus = updateBookingStatus(userId, driverId, status, message);
    console.log("post request console log\nUser : ", userId, " Driver : ", driverId, " Booking Status : ", status,"Message: ", message)
    
    if (updatedStatus) {
        res.status(200).json({ status: updatedStatus });
    } else {
        res.status(500).json({ message: 'Failed to update booking status' });
    }
});

function updateBookingStatus(userId, driverId, status, message) {
    const bookingStatus = bookingStatuses.get(userId.toString());
    if (bookingStatus) {
        bookingStatus.status = status;
        bookingStatus.driverName = bookingStatus.driverName || 'Default Driver'; // Set a driver name if not set
        bookingStatus.driverContact = bookingStatus.driverContact || 'Unknown'; // Set a driver contact if not set
        bookingStatus.message = message || '';
        bookingStatuses.set(userId.toString(), bookingStatus);
        console.log("User : ", userId, " Driver : ", driverId, " Booking Status : ", status);
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
    
    // Optionally: Remove the booking request or move it to another list
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