export async function load() {
    // Uncomment to call the fake json server
    // const response = await fetch('http://localhost:3000');
    // const articles = await response.json();

    // Uncomment to call the Directus server in Docker
    const token = 'REPLACE WITH A NEW TOKEN'; // <- Directus token here
    const response = await fetch(`http://0.0.0.0:8055/items/articles?access_token=${token}`);
    const articles = await response.json();

    return {
        articles: articles.data
    };
}