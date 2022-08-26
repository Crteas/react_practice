import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(1);
  const [money, setMoney] = useState(1);
  const coinChange = (event) => {
    const { target } = event;
    const coinPrice = target[target.selectedIndex].value;
    setPrice(coinPrice);
  };
  const moneyChange = (event) => {
    setMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log(money, price);
  return (
    <div>
      <h1>The Coin ({coins.length})</h1>
      {loading ? <strong>Loading.....</strong> : null}
      <select onChange={coinChange}>
        <option>select Coin</option>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <input type={"number"} value={money} onChange={moneyChange} />
      <strong>{(money / price).toFixed(2)}</strong>
    </div>
  );
}

export default App;
