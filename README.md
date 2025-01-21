# LinkRide_1

A simple carpooling application designed for students to find and offer rides to their college. The application allows users to create trips, view available carpools, and register as drivers.

## Features

- User can create a trip by providing details such as departure, destination, date, and available seats.
- Users can view available trips and join carpools.
- Drivers can register and offer rides to fellow students.
- Integrated with SQLite for data storage.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
## Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Steps to Set Up
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/carpooling-app.git
   cd carpooling-app
2. **Navigate to backend Directory**:
   ```bash
    cd backend
3. **Install Dependencies**:
   ```bash
   npm i
4. **Start Backend Server**:
    ```bash
    nodemon app.js
5. **Go to a search engine(Google) and type out http://localhost:{PORT}**

### Usage
**Finding Carpools**: 
  Click on the "Carpool" page in the navigation bar to view available trips.
**Driver Dashboard**: 
  Navigate to the "Driver" page to register as a driver.
**Emergency Dashboard**
   Navigate to emergency page to send a request to all drivers present. 
**Entertainment**
   Pave your way to entertainment page to have a joyous ride, listen to some music and have a road trip worth of entertainment. 

### API Endpoints
#### **GET /api/drivers**
Retrieve a list of all registered drivers.  
**Response**:  
```json
[
    {
        "id": 1,
        "name": "Driver Name",
        "contactNumber": "1234567890",
        "availability": true
    },
    ...
]
