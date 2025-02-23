
![Frame 57](https://github.com/user-attachments/assets/de10948e-3b9c-4ce9-9b94-e96748475da6)




# EcoChamp Web App 🌍

Welcome to **EcoChamp** — the app that motivates you to do good things for the environment! 🌱 By completing eco-friendly actions such as recycling, using e-scooters, or taking public transport, you can earn points that can be redeemed for discounts from our eco-partner companies. Compete with others on the leaderboard and level up your environmental impact!

---

## 🔧 Setup Instructions

Follow these steps to get the EcoChamp web app up and running on your local machine.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/benjom22/Hackathon-2025-ClimateChange.git
    cd ecochamp
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    * Create a `.env` file in the root directory of your project.
    * Add the necessary environment variables. For example:
        ```
        DATABASE_URL="postgresql://postgres:MVzHaSRTheCFXneudWIdCtCHTZwmimUJ@ballast.proxy.rlwy.net:45194/railway"
        API_KEY="djwandiqndo2"
        ```

4.  **Start the Application:**
    ```bash
    npm run dev
    ```
    * The application should now be running on your local server.

## ⚠️ Important Note

The reward redemption functionality is currently simulated using static data. This means that:

* Rewards are not dynamically updated.
* Inventory management is not implemented.
* Actual reward fulfillment is not processed.

This is a demonstration of the system's flow, and the reward process will be further developed in future updates.
