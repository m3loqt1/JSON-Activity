const route = require('./routes/router')
const express = require("express")

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server');
});


app.use(route)
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});




