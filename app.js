
const express = require('express');
const app = express();
const tasks = require('./routes/tasksroutes');
const PORT = process.env.PORT || 4000;
const connectDB = require('./db/connect')

require('dotenv').config()
//middleware

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//routes

app.use('/api/v1/tasks',tasks)



const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
          });
        // Continue with your logic using the created task
    } catch (error) {
        console.log(error);
    }
}

start();
