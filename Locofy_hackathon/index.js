const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const doubtsroutes = require('./routes/doubts');
const solutionsroutes = require('./routes/solutions');
const userRoutes = require('./routes/users');

app.use(express.json());

app.use('/api/doubts', doubtsroutes);
app.use('/api/solutions', solutionsroutes);
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>{
           const server = console.log(`Connected to DB and server started on port 5000`);
           const io = require('socket.io')(server, {
            cors:{
                origin: 'http://localhost:3000'
            }
           });
           io.on('connection', () => {
            console.log('Connected to socket.io');
           })
        })
    })
    .catch((error) => {
        console.log(error);
    });

