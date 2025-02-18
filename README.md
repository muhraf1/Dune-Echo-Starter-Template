# Dune Echo Starter Template

This repository provides a starter template for building applications that interact with the [Dune Echo](https://dune.com/echo) real-time, multichain developer platform. Echo enables developers to access blockchain data instantly across multiple chains with lightning-fast response times.

## How to Run the Program

Follow the steps below to set up and run the application:

### Front-End Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/muhraf1/Dune-Echo-Starter-Template.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Dune_Echo
   ```

3. **Install the required dependencies:**

   ```bash
   npm install
   ```

4. **Start the front-end development server:**

   ```bash
   npm run dev
   ```

### Back-End Setup

1. **Open a new terminal and navigate to the same project directory:**

   ```bash
   cd  Dune_Echo
   ```

2. **Install back-end dependencies:**

   ```bash
   npm install
   ```

3. **Start the back-end server:**

   ```bash
   npm run start
   ```

## Important Notes

- **DUNE_API_KEY Configuration:**

  Ensure you replace the `DUNE_API_KEY` placeholder in your environment configuration with your personal DUNE API key. You can obtain your API key by signing up at [Dune Echo](https://dune.com/echo).

- **Environment Variables:**

  Create a `.env` file in the root directory of the project and add your `DUNE_API_KEY`:

  ```env
  DUNE_API_KEY=your_personal_dune_api_key
  ```

  This will allow the application to authenticate requests to the Dune Echo API.

For more information on Dune Echo and its capabilities, refer to the [Dune API Overview](https://docs.dune.com/echo/overview). 
