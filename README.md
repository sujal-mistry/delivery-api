# Delivery API

This project is a backend service for managing delivery.
It provides APIs to calculate delivery charges, book deliveries, and cancel deliveries before they are picked up.
Built with Node.js, JavaScript, and Express, this project integrates SQL for data management and supports essential delivery operations for any application requiring delivery functionalities.

## Features

- **Calculate Delivery Charges** based on distance, vehicle type, and other parameters.
- **Book a Delivery** by specifying pickup and drop locations, along with payment details and order information.
- **Cancel a Delivery** if the order has not yet been picked up.

## Technologies Used

- **Node.js** for building the backend server.
- **JavaScript** as the primary programming language.
- **Express** as the web framework for handling HTTP requests.
- **SQL Database** for storing delivery-related data.
- **Postman** for API testing and documentation.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [SQL Server](https://www.microsoft.com/en-in/sql-server/sql-server-downloads)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sujal-mistry/delivery-api.git
   cd delivery-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run start
   ```

The server should now be running on `http://localhost:3000`.

## API Documentation

### Base URL

All endpoints assume the base URL `http://localhost:3000/api`.

### Endpoints

#### 1. Calculate Delivery Charge

**Endpoint:** `POST /calculate-charges`

**Description:** Calculates the delivery charge based on distance, vehicle type, and other factors.

#### 2. Book Delivery

**Endpoint:** `POST /book-delivery`

**Description:** Books a delivery with specified pickup and drop locations, payment details, and other order information.

#### 3. Cancel Delivery

**Endpoint:** `POST /cancel-delivery`

**Description:** Cancels a delivery if it has not been picked up yet.
