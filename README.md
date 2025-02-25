# Dune Echo Starter Template

This repository provides a starter template for building applications that interact with the [Dune Echo](https://dune.com/echo) real-time, multichain developer platform. Echo enables developers to access blockchain data instantly across multiple chains with lightning-fast response times.

![Screenshot](https://mewing-storm-58d.notion.site/image/attachment%3Abdb60cf0-535a-41a3-93d8-1ef75fc5955a%3AScreenshot_2025-02-18_at_11.50.15.png?table=block&id=19e8151d-abba-80e9-861d-fb39375994a1&spaceId=512b3bd5-4787-4505-8142-d6bae8f79884&width=1420&userId=&cache=v2)

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
2. **Start the back-end server:**

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
