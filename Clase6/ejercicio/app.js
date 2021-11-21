const express = require("express");
const { listarUsuarios } = require("./user");
const app = express();
const PORT = 5000;

app.get("/", async (req, res) => {
    const resultUsers = await listarUsuarios();
    res.send(resultUsers);
});

app.listen(PORT, () => {
    console.log(`Servidor arriba en el puerto ${PORT}`);
});