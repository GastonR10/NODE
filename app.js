import express from "express";

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!')
});

app.get("/users", (req, res) => {
    res.send("Hola desde usuarios");
});

app.get("/pendorcho", (req, res) => {
    res.send("Hola pendorchero");
});

app.listen(PORT, () => {
    console.log(`Corriendo en http:localhost:${PORT}`);
});