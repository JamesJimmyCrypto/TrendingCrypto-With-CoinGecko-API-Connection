const url = 'https://api.coingecko.com/api/v3/global'

export async function getActiveCryptocurrenciesCount() {
    try {
        const response = await fetch(url);
        
        if (response.status === 204 || response.ok === false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        return data.data['active_cryptocurrencies'];
    } catch (err) {
        console.error(err.message);
    }
}