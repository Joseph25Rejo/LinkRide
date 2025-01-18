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
- **Database**: SQLite3
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
**Creating a Trip**: 
  Fill in the trip details in the form and click "Create Trip" to add a new trip.
**Finding Carpools**: 
  Click on the "Carpool" link in the navigation bar to view available trips.
**Driver Registration**: 
  Navigate to the "Become a Carpool Driver" page to register as a driver.
### API Endpoints
**POST /api/trips**: Create a new trip.
**GET /api/trips**: Retrieve a list of available trips.
**PUT /api/trips/**:id: Update the available seats for a specific trip.
