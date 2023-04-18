const url = 'https://api.coingecko.com/api/v3/search/trending';

export async function fillTrendingCoins() {
    try {
        const response = await fetch(url);

        if (response.status === 204 || response.ok === false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        const coins = data.coins;

        coins.forEach((coin, index) => {
            const element = document.querySelector(`.trending-row:nth-child(${index + 1})`);
            element.querySelector('td:nth-child(1)').innerHTML = `<img src="${coin.item.thumb}" class="w3-image w3-round"></img> ${coin.item.name}`;
            element.querySelector('td:nth-child(2)').textContent = coin.item.symbol;
            element.querySelector('td:nth-child(3)').textContent = Number(coin.item['price_btc']).toString(8);

        });
    } catch (err) {
        console.error(err.message);
    }
}