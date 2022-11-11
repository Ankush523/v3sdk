import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
const alchemyRPC =
  "https://polygon-mainnet.g.alchemy.com/v2/CtHqiL3aNzpaAZKwY2aMl3s0ArBkcHpw";
function App() {
  return (
    <div className="Uniswap">
      <SwapWidget jsonRpcEndpoint={alchemyRPC} />
    </div>
  );
}

export default App;
