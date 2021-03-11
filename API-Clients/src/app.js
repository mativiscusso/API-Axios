const express = require("express");
const app = express();

const clientsRouter = require('./routes/api/clients')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/clients', clientsRouter)

app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});
