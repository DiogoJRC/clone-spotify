# Spotify Clone

This is a basic clone of Spotify built with **React** and **Vite** for the frontend, and **Node.js** with **Express** and **MongoDB** for the backend. The project allows users to browse artists and songs, with a music player available on each song's page.

## Features

- **Artists and Songs Listing**: Displays a list of artists and songs.
- **Artist Page**: Shows all songs by a specific artist.
- **Song Page**: Contains a music player to play songs.

## Project Setup

### Prerequisites

- Node.js
- MongoDB

### Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/spotify-clone.git
   cd spotify-clone
   ```
2. **Create the Database and Collections**:

   You need to create the **Spotify** database and the required collections **artists** and **songs** in MongoDB. If you are using MongoDB Atlas or a local MongoDB instance, make sure the database exists.

   - Create a database called **spotify**.
   - Create two collections inside the **spotify** database:
     - **artists**
     - **songs**

3. **Insert Sample Data**:

   Inside the `/api/src/database/` folder, you will find a file called `insertMany.js`. This file can be run to insert sample data into the **artists** and **songs** collections.

   To run the `insertMany.js` file, use the following command:

   ```bash
   node /api/src/database/insertMany.js
   ```

   This will insert the sample records into the **artists** and **songs** tables.

4. **Set up the Backend**:

   Navigate to the `api` folder:

   ```bash
   cd api
   ```

   Install backend dependencies:

   ```bash
   npm install
   ```

   Set up the `.env` file in the `/api` folder:

   Inside the `/api` folder, create a `.env` file with the following content:

   ```env
   DB_URI=your_mongodb_connection_url
   ```

   Replace `your_mongodb_connection_url` with your MongoDB connection URL (either local or MongoDB Atlas).

5. **Set up the Frontend**:

   Navigate back to the root folder and then to the `fe` folder (frontend):

   ```bash
   cd ..
   cd fe
   ```

   Install frontend dependencies:

   ```bash
   npm install
   ```

6. **Run the Project**:

   - First, start the backend API:

     ```bash
     cd ../api
     npm start
     ```

     This will start the Express API server.

   - Then, start the frontend Vite + React app:

     ```bash
     cd ../fe
     npm run dev
     ```

     This will start the Vite + React app.

   Your app should now be running, and you can open it in your browser.


## Technologies Used

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
