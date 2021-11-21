const express = require("express");
const app = express();
const PORT = 8000;

const { monedas } = require("./monedas");

app.get("/", (req, res) => {
    res.send('Hola, mundo!');
});

app.get("/clase", (req, res) => {
    const clase ={
        numero: 7,
        fecha: '2021-11-21',
        canAlumnos: 25,
        cantProfesor: 1,
    };
    res.send(clase);

});

app.get("/moneda_dolar", monedas); 


app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});