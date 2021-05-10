const express = require('express');
const cors = require('cors');
const app = express();
const authRouter = require('./routers/authRouter');
const port = 4000;

require('./config/dbConnect');

app.use(cors());

app.use(express.json());
app.use('/auth', authRouter);



app.all('*', (req, res, next) => {
    res
        .status(404)
        .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})