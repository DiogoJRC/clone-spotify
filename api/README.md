# About

Spotify Clone backend built with **Node.js** with **Express** and **MongoDB**. The project allows users to browse artists and songs, with a music player available on each song's page.

## Project Setup

### Prerequisites

- Node.js
- MongoDB

### Getting Started

1. **Create the Database and Collections**:

   You need to create the **Spotify** database and the required collections **artists** and **songs** in MongoDB. If you are using MongoDB Atlas or a local MongoDB instance, make sure the database exists.

   - Create a database called **spotify**.
   - Create two collections inside the **spotify** database:
     - **artists**
     - **songs**

2. **Insert Sample Data**:

   Inside the `/api/src/database/` folder, you will find a file called `insertMany.js`. This file can be run to insert sample data into the **artists** and **songs** collections.

   To run the `insertMany.js` file, use the following command:

   ```bash
   node /api/src/database/insertMany.js
   ```

   This will insert the sample records into the **artists** and **songs** tables.

3. **Setup and Run**:

   Install dependencies:

   ```bash
   npm install
   ```

   Set up the `.env` file in the `/api` folder:

   Inside the `/api` folder, create a `.env` file with the following content:

   ```env
   DB_URI=your_mongodb_connection_url
   ```

   Replace `your_mongodb_connection_url` with your MongoDB connection URL (either local or MongoDB Atlas).

   Start the backend API:
   
   ```bash
   npm start
   ```

   Your API should now be running.

## Technologies Used

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

