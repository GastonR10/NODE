const axios = require("axios");


const monedas = async (req, res) => {
    try {
        const monedaDolar = await axios(
            "https://api.coindesk.com/v1/bpi/currentprice.json"
        );

        const dolar = monedaDolar.data.bpi.USD;

        res.send(dolar);
    } catch (error) {
        console.log(error)    
    }
    
};

module.exports = { monedas };