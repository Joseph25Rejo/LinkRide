
const driversDatabase = [
    {
        "id": 1,
        "name": "Rahul Kumar",
        "rating": 4.8,
        "car": "Honda City",
        "routes": {
            "start": "Koramangala",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 2,
        "name": "Priya Singh",
        "rating": 4.9,
        "car": "Hyundai i20",
        "routes": {
            "start": "HSR Layout",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 3,
        "name": "Arun Patel",
        "rating": 4.7,
        "car": "Toyota Innova",
        "routes": {
            "start": "Jayanagar",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 4,
        "price": 4,
        "isOnline": true
    },
    {
        "id": 4,
        "name": "Sneha Reddy",
        "rating": 4.6,
        "car": "Maruti Swift",
        "routes": {
            "start": "Whitefield",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 5,
        "name": "Vikas Sharma",
        "rating": 4.5,
        "car": "Ford EcoSport",
        "routes": {
            "start": "BTM Layout",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 6,
        "name": "Aarti Mehta",
        "rating": 4.9,
        "car": "Honda Civic",
        "routes": {
            "start": "Indiranagar",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 7,
        "name": "Ravi Kumar",
        "rating": 4.6,
        "car": "Nissan Micra",
        "routes": {
            "start": "Marathahalli",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 4,
        "isOnline": true
    },
    {
        "id": 8,
        "name": "Neha Desai",
        "rating": 4.8,
        "car": "Hyundai Verna",
        "routes": {
            "start": "Banashankari",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 9,
        "name": "Sandeep Bhat",
        "rating": 4.7,
        "car": "Skoda Octavia",
        "routes": {
            "start": "Malleswaram",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 10,
        "name": "Rashmi Patil",
        "rating": 4.5,
        "car": "Suzuki Baleno",
        "routes": {
            "start": "Electronic City",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 11,
        "name": "Kavya Rao",
        "rating": 4.7,
        "car": "Toyota Corolla",
        "routes": {
            "start": "Kormangala",
            "end": "Bangalore University"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 12,
        "name": "Deepak Kumar",
        "rating": 4.6,
        "car": "Honda Jazz",
        "routes": {
            "start": "Jayanagar",
            "end": "Bangalore University"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 13,
        "name": "Anjali Verma",
        "rating": 4.9,
        "car": "Ford Fiesta",
        "routes": {
            "start": "Koramangala",
            "end": "Bangalore University"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 14,
        "name": "Rajesh Naidu",
        "rating": 4.4,
        "car": "Chevrolet Beat",
        "routes": {
            "start": "HSR Layout",
            "end": "Bangalore University"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 15,
        "name": "Ritika Desai",
        "rating": 4.8,
        "car": "Nissan Sunny",
        "routes": {
            "start": "Indiranagar",
            "end": "Bangalore University"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 16,
        "name": "Vishal Kumar",
        "rating": 4.7,
        "car": "Volkswagen Polo",
        "routes": {
            "start": "Whitefield",
            "end": "Bangalore University"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 17,
        "name": "Meena Yadav",
        "rating": 4.6,
        "car": "Hyundai Santro",
        "routes": {
            "start": "Banashankari",
            "end": "Bangalore University"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 18,
        "name": "Kiran Reddy",
        "rating": 4.8,
        "car": "Renault Kwid",
        "routes": {
            "start": "Marathahalli",
            "end": "Bangalore University"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 19,
        "name": "Pooja Patel",
        "rating": 4.9,
        "car": "Hyundai Creta",
        "routes": {
            "start": "Malleswaram",
            "end": "Bangalore University"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 20,
        "name": "Sandeep Reddy",
        "rating": 4.4,
        "car": "Skoda Rapid",
        "routes": {
            "start": "Electronic City",
            "end": "Bangalore University"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 21,
        "name": "Harish Bhat",
        "rating": 4.7,
        "car": "Suzuki Swift",
        "routes": {
            "start": "Yelahanka",
            "end": "Bangalore University"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 22,
        "name": "Neelam Jain",
        "rating": 4.9,
        "car": "Honda Amaze",
        "routes": {
            "start": "Rajajinagar",
            "end": "Bangalore University"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 23,
        "name": "Sreejith Pillai",
        "rating": 4.6,
        "car": "Toyota Etios",
        "routes": {
            "start": "Jayanagar",
            "end": "Bangalore University"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 24,
        "name": "Kavitha Sharma",
        "rating": 4.8,
        "car": "Mahindra XUV500",
        "routes": {
            "start": "BTM Layout",
            "end": "Bangalore University"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 4,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 25,
        "name": "Amit Kumar",
        "rating": 4.7,
        "car": "Maruti Dzire",
        "routes": {
            "start": "HSR Layout",
            "end": "Bangalore University"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 26,
        "name": "Meher Ali",
        "rating": 4.5,
        "car": "Ford EcoSport",
        "routes": {
            "start": "Koramangala",
            "end": "M.G. Road"
        },
        "departureTime": "8:00 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 27,
        "name": "Vijay Kumar",
        "rating": 4.8,
        "car": "BMW X1",
        "routes": {
            "start": "Indiranagar",
            "end": "M.G. Road"
        },
        "departureTime": "8:15 AM",
        "seatsAvailable": 3,
        "price": 8,
        "isOnline": true
    },
    {
        "id": 28,
        "name": "Pooja Singh",
        "rating": 4.7,
        "car": "Maruti Swift",
        "routes": {
            "start": "Banashankari",
            "end": "M.G. Road"
        },
        "departureTime": "8:00 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 29,
        "name": "Madhavi Rao",
        "rating": 4.9,
        "car": "Honda Accord",
        "routes": {
            "start": "MG Road",
            "end": "Bangalore International Airport"
        },
        "departureTime": "6:30 AM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 30,
        "name": "Nitin Gupta",
        "rating": 4.6,
        "car": "Hyundai i20",
        "routes": {
            "start": "Jayanagar",
            "end": "M.G. Road"
        },
        "departureTime": "8:00 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 31,
        "name": "Sushma Reddy",
        "rating": 4.8,
        "car": "Honda City",
        "routes": {
            "start": "Indiranagar",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 32,
        "name": "Vikram Sharma",
        "rating": 4.7,
        "car": "Hyundai Verna",
        "routes": {
            "start": "Koramangala",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 33,
        "name": "Ashwin Raj",
        "rating": 4.6,
        "car": "Maruti Suzuki Baleno",
        "routes": {
            "start": "HSR Layout",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 34,
        "name": "Simran Kaur",
        "rating": 4.9,
        "car": "Honda Civic",
        "routes": {
            "start": "Jayanagar",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 35,
        "name": "Ramesh Reddy",
        "rating": 4.5,
        "car": "Ford EcoSport",
        "routes": {
            "start": "Whitefield",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 36,
        "name": "Aishwarya Patel",
        "rating": 4.7,
        "car": "Hyundai i10",
        "routes": {
            "start": "Electronic City",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 37,
        "name": "Vishnu Vardhan",
        "rating": 4.8,
        "car": "Maruti Swift Dzire",
        "routes": {
            "start": "Malleswaram",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 38,
        "name": "Ravi Kumar",
        "rating": 4.6,
        "car": "Volkswagen Polo",
        "routes": {
            "start": "HSR Layout",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 39,
        "name": "Pooja Sharma",
        "rating": 4.7,
        "car": "Toyota Fortuner",
        "routes": {
            "start": "Indiranagar",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 2,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 40,
        "name": "Sanjay Rao",
        "rating": 4.9,
        "car": "Nissan Micra",
        "routes": {
            "start": "Koramangala",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 41,
        "name": "Neha Agarwal",
        "rating": 4.8,
        "car": "Hyundai Creta",
        "routes": {
            "start": "Banashankari",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 42,
        "name": "Bharath Kumar",
        "rating": 4.5,
        "car": "Suzuki Wagon R",
        "routes": {
            "start": "Marathahalli",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 43,
        "name": "Swathi Nair",
        "rating": 4.7,
        "car": "Ford Figo",
        "routes": {
            "start": "M.G. Road",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 44,
        "name": "Raghavendra Yadav",
        "rating": 4.6,
        "car": "Chevrolet Spark",
        "routes": {
            "start": "BTM Layout",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 45,
        "name": "Akshara Reddy",
        "rating": 4.8,
        "car": "Tata Tiago",
        "routes": {
            "start": "Koramangala",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 46,
        "name": "Nikhil Kumar",
        "rating": 4.7,
        "car": "Skoda Octavia",
        "routes": {
            "start": "Rajajinagar",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 47,
        "name": "Kiran Sharma",
        "rating": 4.9,
        "car": "BMW X3",
        "routes": {
            "start": "HSR Layout",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 2,
        "price": 8,
        "isOnline": true
    },
    {
        "id": 48,
        "name": "Tanvi Gupta",
        "rating": 4.6,
        "car": "Renault Kwid",
        "routes": {
            "start": "Yelahanka",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 49,
        "name": "Vishnu Priya",
        "rating": 4.7,
        "car": "Maruti Suzuki Celerio",
        "routes": {
            "start": "Electronic City",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 50,
        "name": "Karthik Gopal",
        "rating": 4.6,
        "car": "Hyundai Sonata",
        "routes": {
            "start": "MG Road",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 4,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 51,
        "name": "Meera Prasad",
        "rating": 4.8,
        "car": "Honda BR-V",
        "routes": {
            "start": "Banashankari",
            "end": "RVCE"
        },
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 52,
        "name": "Harsha Kumar",
        "rating": 4.9,
        "car": "Nissan Sunny",
        "routes": {
            "start": "Indiranagar",
            "end": "RVCE"
        },
        "departureTime": "7:00 AM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 53,
        "name": "Anusha Reddy",
        "rating": 4.7,
        "car": "Toyota Innova",
        "routes": {
            "start": "Whitefield",
            "end": "RVCE"
        },
        "departureTime": "7:45 AM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 54,
        "name": "Sidharth Venkatesh",
        "rating": 4.5,
        "car": "Mahindra XUV500",
        "routes": {
            "start": "Koramangala",
            "end": "RVCE"
        },
        "departureTime": "7:15 AM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 55,
        "name": "Amit Patel",
        "rating": 4.8,
        "car": "Volkswagen Polo",
        "routes": {
            "start": "BTM Layout",
            "end": "RVCE"
        },  
        "departureTime": "7:30 AM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 56,
        "name": "Amit Patel",
        "rating": 4.8,
        "car": "Volkswagen Polo",
        "routes": {
            "start": "RVCE",
            "end": "BTM Layout"
        },
        "departureTime": "5:30 PM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 57,
        "name": "Neha Sharma",
        "rating": 4.7,
        "car": "Honda Amaze",
        "routes": {
            "start": "RVCE",
            "end": "Whitefield"
        },
        "departureTime": "6:00 PM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 58,
        "name": "Ramesh Gupta",
        "rating": 4.6,
        "car": "Toyota Corolla",
        "routes": {
            "start": "RVCE",
            "end": "Koramangala"
        },
        "departureTime": "5:45 PM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 59,
        "name": "Anjali Verma",
        "rating": 4.9,
        "car": "Hyundai Verna",
        "routes": {
            "start": "RVCE",
            "end": "HSR Layout"
        },
        "departureTime": "6:15 PM",
        "seatsAvailable": 1,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 60,
        "name": "Rahul Mehta",
        "rating": 4.5,
        "car": "Suzuki Baleno",
        "routes": {
            "start": "RVCE",
            "end": "Indiranagar"
        },
        "departureTime": "5:50 PM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 61,
        "name": "Sneha Rao",
        "rating": 4.8,
        "car": "Tata Nexon",
        "routes": {
            "start": "RVCE",
            "end": "Jayanagar"
        },
        "departureTime": "6:20 PM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 62,
        "name": "Ajay Singh",
        "rating": 4.6,
        "car": "Ford EcoSport",
        "routes": {
            "start": "RVCE",
            "end": "Electronic City"
        },
        "departureTime": "5:35 PM",
        "seatsAvailable": 4,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 63,
        "name": "Priya Das",
        "rating": 4.7,
        "car": "Maruti Suzuki Dzire",
        "routes": {
            "start": "RVCE",
            "end": "Marathahalli"
        },
        "departureTime": "6:05 PM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 64,
        "name": "Karan Malhotra",
        "rating": 4.9,
        "car": "Hyundai Creta",
        "routes": {
            "start": "RVCE",
            "end": "Sarjapur"
        },
        "departureTime": "6:40 PM",
        "seatsAvailable": 2,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 65,
        "name": "Anita Pillai",
        "rating": 4.5,
        "car": "Honda City",
        "routes": {
            "start": "RVCE",
            "end": "Banashankari"
        },
        "departureTime": "6:30 PM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 66,
        "name": "Siddharth Iyer",
        "rating": 4.8,
        "car": "Mahindra XUV300",
        "routes": {
            "start": "RVCE",
            "end": "Hebbal"
        },
        "departureTime": "5:40 PM",
        "seatsAvailable": 1,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 67,
        "name": "Pooja Naik",
        "rating": 4.7,
        "car": "Skoda Rapid",
        "routes": {
            "start": "RVCE",
            "end": "Malleswaram"
        },
        "departureTime": "6:15 PM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 68,
        "name": "Vikram Reddy",
        "rating": 4.6,
        "car": "Toyota Innova",
        "routes": {
            "start": "RVCE",
            "end": "Rajajinagar"
        },
        "departureTime": "6:50 PM",
        "seatsAvailable": 4,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 69,
        "name": "Divya Menon",
        "rating": 4.9,
        "car": "Kia Seltos",
        "routes": {
            "start": "RVCE",
            "end": "KR Puram"
        },
        "departureTime": "6:00 PM",
        "seatsAvailable": 1,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 70,
        "name": "Rohan Jain",
        "rating": 4.8,
        "car": "Hyundai Venue",
        "routes": {
            "start": "RVCE",
            "end": "Yeshwanthpur"
        },
        "departureTime": "6:20 PM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 71,
        "name": "Nidhi Kulkarni",
        "rating": 4.7,
        "car": "Volkswagen Virtus",
        "routes": {
            "start": "RVCE",
            "end": "Bellandur"
        },
        "departureTime": "5:30 PM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 72,
        "name": "Kartik Nair",
        "rating": 4.5,
        "car": "Renault Kwid",
        "routes": {
            "start": "RVCE",
            "end": "Basavanagudi"
        },
        "departureTime": "5:15 PM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 73,
        "name": "Arjun Sen",
        "rating": 4.8,
        "car": "MG Hector",
        "routes": {
            "start": "RVCE",
            "end": "Ulsoor"
        },
        "departureTime": "6:25 PM",
        "seatsAvailable": 1,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 74,
        "name": "Megha Shetty",
        "rating": 4.9,
        "car": "Hyundai i20",
        "routes": {
            "start": "RVCE",
            "end": "JP Nagar"
        },
        "departureTime": "5:45 PM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 75,
        "name": "Sanjay Naik",
        "rating": 4.6,
        "car": "Ford Aspire",
        "routes": {
            "start": "RVCE",
            "end": "HSR Layout"
        },
        "departureTime": "6:10 PM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 76,
        "name": "Kavya Reddy",
        "rating": 4.7,
        "car": "Tata Harrier",
        "routes": {
            "start": "RVCE",
            "end": "Banashankari"
        },
        "departureTime": "6:25 PM",
        "seatsAvailable": 1,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 77,
        "name": "Rajesh Verma",
        "rating": 4.5,
        "car": "Honda WR-V",
        "routes": {
            "start": "RVCE",
            "end": "BTM Layout"
        },
        "departureTime": "6:00 PM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 78,
        "name": "Sonia Gupta",
        "rating": 4.8,
        "car": "Hyundai Creta",
        "routes": {
            "start": "RVCE",
            "end": "Koramangala"
        },
        "departureTime": "6:40 PM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 79,
        "name": "Vivek Iyer",
        "rating": 4.7,
        "car": "Renault Triber",
        "routes": {
            "start": "RVCE",
            "end": "Indiranagar"
        },
        "departureTime": "6:15 PM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 80,
        "name": "Deepa Menon",
        "rating": 4.9,
        "car": "Volkswagen Vento",
        "routes": {
            "start": "RVCE",
            "end": "Malleswaram"
        },
        "departureTime": "5:50 PM",
        "seatsAvailable": 1,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 81,
        "name": "Kunal Das",
        "rating": 4.6,
        "car": "Kia Sonet",
        "routes": {
            "start": "RVCE",
            "end": "Whitefield"
        },
        "departureTime": "6:05 PM",
        "seatsAvailable": 3,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 82,
        "name": "Nisha Rao",
        "rating": 4.5,
        "car": "Suzuki Ertiga",
        "routes": {
            "start": "RVCE",
            "end": "Electronic City"
        },
        "departureTime": "5:35 PM",
        "seatsAvailable": 4,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 83,
        "name": "Anil Kumar",
        "rating": 4.8,
        "car": "Honda Amaze",
        "routes": {
            "start": "RVCE",
            "end": "Hebbal"
        },
        "departureTime": "5:40 PM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 84,
        "name": "Shruti Singh",
        "rating": 4.7,
        "car": "Toyota Etios",
        "routes": {
            "start": "RVCE",
            "end": "Rajajinagar"
        },
        "departureTime": "6:20 PM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 85,
        "name": "Ravi Teja",
        "rating": 4.6,
        "car": "Mahindra XUV700",
        "routes": {
            "start": "RVCE",
            "end": "Bellandur"
        },
        "departureTime": "6:00 PM",
        "seatsAvailable": 1,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 86,
        "name": "Meera Nair",
        "rating": 4.8,
        "car": "Hyundai Elantra",
        "routes": {
            "start": "RVCE",
            "end": "KR Puram"
        },
        "departureTime": "6:10 PM",
        "seatsAvailable": 2,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 87,
        "name": "Aditya Jain",
        "rating": 4.9,
        "car": "Hyundai Venue",
        "routes": {
            "start": "RVCE",
            "end": "Yeshwanthpur"
        },
        "departureTime": "6:30 PM",
        "seatsAvailable": 1,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 88,
        "name": "Pooja Bhat",
        "rating": 4.5,
        "car": "Volkswagen Polo",
        "routes": {
            "start": "RVCE",
            "end": "Marathahalli"
        },
        "departureTime": "5:50 PM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 89,
        "name": "Kiran Desai",
        "rating": 4.8,
        "car": "Ford EcoSport",
        "routes": {
            "start": "RVCE",
            "end": "Sarjapur"
        },
        "departureTime": "6:25 PM",
        "seatsAvailable": 2,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 90,
        "name": "Ritika Kulkarni",
        "rating": 4.7,
        "car": "Toyota Innova",
        "routes": {
            "start": "RVCE",
            "end": "JP Nagar"
        },
        "departureTime": "6:45 PM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 91,
        "name": "Suresh Gowda",
        "rating": 4.6,
        "car": "Hyundai Santro",
        "routes": {
            "start": "RVCE",
            "end": "Banashankari"
        },
        "departureTime": "6:15 PM",
        "seatsAvailable": 3,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 92,
        "name": "Anushka Sharma",
        "rating": 4.9,
        "car": "Kia Carnival",
        "routes": {
            "start": "RVCE",
            "end": "Ulsoor"
        },
        "departureTime": "5:30 PM",
        "seatsAvailable": 1,
        "price": 7,
        "isOnline": true
    },
    {
        "id": 93,
        "name": "Vikram Chawla",
        "rating": 4.8,
        "car": "Skoda Kushaq",
        "routes": {
            "start": "RVCE",
            "end": "JP Nagar"
        },
        "departureTime": "6:20 PM",
        "seatsAvailable": 2,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 94,
        "name": "Renu Sinha",
        "rating": 4.7,
        "car": "Honda Civic",
        "routes": {
            "start": "RVCE",
            "end": "BTM Layout"
        },
        "departureTime": "5:40 PM",
        "seatsAvailable": 3,
        "price": 5,
        "isOnline": true
    },
    {
        "id": 95,
        "name": "Arjun Khanna",
        "rating": 4.6,
        "car": "Maruti Ciaz",
        "routes": {
            "start": "RVCE",
            "end": "Koramangala"
        },
        "departureTime": "6:30 PM",
        "seatsAvailable": 4,
        "price": 6,
        "isOnline": true
    },
    {
        "id": 96,
        "name": "Shalini Rao",
        "rating": 4.9,
        "car": "Hyundai Aura",
        "routes": {
            "start": "RVCE",
            "end": "Indiranagar"
        },
        "departureTime": "5:55 PM",
        "seatsAvailable": 1,
        "price": 7,
        "isOnline": true
    }   
];

export default driversDatabase;