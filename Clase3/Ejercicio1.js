import fetch from 'node-fetch';

// fetch("https://api.github.com/users/angatupyry")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         console.log("Github respondió:", response);
//     });

async function main() {
    try {
        const response = await fetch("https://api.github.com/users/GastonR10");

        const result = await response.json();

        console.log("Github respondió:", result.id);
    } catch (error) {
        console.log(error);
    }
}
main();