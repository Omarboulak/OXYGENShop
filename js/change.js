const selector = document.getElementById('money');
const amount = document.querySelectorAll('.amount');

selector.addEventListener('change', () => {
    const apiEndpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`;

    fetch(apiEndpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error("falied ");
            }
            return response.json();
        })
        .then((data) => {
            const valorEur = data.usd.eur;
            const valorGbp = data.usd.gbp;

            amount.forEach((amountElement) => {
                const valorUsd = parseFloat(amountElement.getAttribute('data-usd'));

                if (selector.value === 'eur') {
                    // Convertir a euros
                    const valorEnEuros = valorUsd * valorEur;
                    amountElement.textContent = `€${valorEnEuros.toFixed(2)}`;
                } else if (selector.value === 'gbp') {
                    // Convertir a libras
                    const valorEnGbp = valorUsd * valorGbp;
                    amountElement.textContent = `£${valorEnGbp.toFixed(2)}`;
                } else {
                    // Mostrar en dolar dólares
                    amountElement.textContent = `$${valorUsd.toFixed(2)}`;
                }
            });
        })
        .catch((error) => {
            console.error("Error fetching exchange rates:", error.message);
        });
});

amount.forEach((amountElement, index) => {
    const valoresUsdPorDefecto = [0, 20, 60]; 
    amountElement.setAttribute('data-usd', valoresUsdPorDefecto[index]);
    amountElement.textContent = `$${valoresUsdPorDefecto[index].toFixed(2)}`;
});
