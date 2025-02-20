const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database/config');
const userRoutes = require('./routes/userRoutes');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes);


// Sync Database
sequelize.sync({ alter: true }).then(() => {
    console.log('Database synced');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




