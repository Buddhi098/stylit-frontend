
# STYLIT - Online Fashion Marketplace

This is a comprehensive online fashion marketplace platform where users can shop for items, shops can register to list their items, couriers can manage delivery orders, and the admin can oversee the platform with advanced management features. The platform is developed using **ReactJS** and **Material-UI (MUI)** for a modern, responsive design.

---

## Features

### User Features:
- Browse and buy fashion items.
- View product details and reviews.
- Secure checkout process.
- Save favourite Shops and Products

### Shop Features:
- Shop registration and profile management.
- Add, update, and manage product listings.
- real time Chat service
- Order management
- Can See Product & Order statistics

### Courier Features:
- View and accept courier orders.
- Manage delivery statuses.
- real time chat services

### Admin Features:
- Manage users (buyers, shops, couriers).
- Monitor platform statistics (sales, users, delivery metrics).

---

## Tech Stack
- **Architecture**: Micro-service architecture
- **Frontend**: ReactJS, Material-UI (MUI)
- **Backend**: Java Springboot
- **Database**: MySQL
- **Other Tools**: Firebase , Keycloak , docker , Netflix Eureka , Payhere

---

## Installation

### Prerequisites
- Node.js installed
- NPM or Yarn installed

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Buddhi098/stylit-frontend.git
2. Navigate to the project directory:
   ```bash
   cd stylit-frontend
3. Install dependencies:
   ```bash
   npm install
4. Get API key from "https://locationiq.com/" and Add it to .env file
   ```bash
    REACT_APP_MAP_API_KEY=your_map_api_key_here # Obtain your API key from https://locationiq.com/

    REACT_APP_BACKEND_BASE_URL=http://localhost:8081

4. Start the development server:
   ```bash
   npm start
