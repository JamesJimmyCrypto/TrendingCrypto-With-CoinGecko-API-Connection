import { getActiveCryptocurrenciesCount } from "./activeCrypto.js"
import { fillTrendingCoins } from "./trendingCrypto.js";

const disclaimerModalElement = document.getElementById('disclaimer-modal');

document.querySelector('#disclaimer').addEventListener('click', e => {
    if (e.target.id == 'disclaimer-button') {
        disclaimerModalElement.style.display = 'block';
    } else if (e.target.id == 'disclaimer-close-button') {
        disclaimerModalElement.style.display = 'none';
    }
})

document.querySelector('#active-cryptocurrencies').textContent = await getActiveCryptocurrenciesCount();
fillTrendingCoins();