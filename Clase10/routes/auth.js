const express = require('express');
const bcrypt = require("bcrypt");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola, mundo desde auth");
  });

router.post("/registro", async (req, res, next) => {
    try {
        const SALT = 10;
        if (req.body.mail && req.body.name && req.body.password) {
          if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
            res
              .status(400)
              .json({ success: false, message: "Formato de mail incorrecto" });
            return;
          }
    
          const existeUser = usuarios.find((u) => {
            return u.mail === req.body.mail;
          });
    
          if (existeUser) {
            return res
              .status(400)
              .json({ success: false, message: "Mail repetido" });
          }
    
          const salt = await bcrypt.genSalt(SALT);
    
          const password = await bcrypt.hash(req.body.password, salt);
    
          const newUser = {
            name: req.body.name,
            mail: req.body.mail,
            password: password,
          };
    
          usuarios.push(newUser);
    
          return res.json({ success: true, newUser });
        } else {
          return res.status(400).json({
            success: false,
            message: "Faltan datos (requeridos: mail, name, password)",
          });
        }
      } catch (error) {
        return next(error);
      }
    });

router.get('/usuarios', (req, res) => {
    return res.send({ error: null, usuarios });
});

module.exports = router;

const usuarios = [
    {
        name: "Cesar",
        mail: "crolon@gmail.com",
        password: "ñkfjvpoiajfpojeposad"
    },
];
