import fetch from 'node-fetch';

async function main () {
    try {
        let fetchResponse = await fetch("https://api.github.com/users/GastonR10");
        const response = await fetchResponse.json();

        const repositorioFetch = await fetch(response.repos_url);
        
        const repos = await repositorioFetch.json();

        repos.forEach((r) => {
            console.log(r.name);
        });
    } catch (error) {
        console.log(error);
    }
}
main();