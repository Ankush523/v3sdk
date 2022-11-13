import { SwapWidget } from "@uniswap/widgets";
import "./App.css";
import "@uniswap/widgets/fonts.css";
const alchemyRPC =
  "https://polygon-mainnet.g.alchemy.com/v2/CtHqiL3aNzpaAZKwY2aMl3s0ArBkcHpw";
function App() {
  const retro = {
    primary: "black",
    secondary: "black",
    interactive: "#f7f7f7",
    container: "#F7F6F2",
    module: "#DCDCDC",
    accent: "#DD3E3E",
    outline: "black",
    dialog: "#F7F6F2",
    borderRadius: 0.0,
  };

  const WBTC = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
  return (
    <div className="flex flex-row justify-center items-center mt-[40px]">
      <div className="Uniswap border-2 border-black box_back">
        <SwapWidget jsonRpcEndpoint={alchemyRPC} theme={retro} />
      </div>
    </div>
  );
}

export default App;
