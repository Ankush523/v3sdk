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
    module: "#707070",
    accent: "#0A0708",
    outline: "black",
    dialog: "#000",
    fontFamily: "Josefin Sans",
    borderRadius: 0.0,
  };
  return (
    <div className="flex flex-row justify-center items-center mt-[40px]">
      <div className="Uniswap border-2 border-black box_back ">
        <SwapWidget jsonRpcEndpoint={alchemyRPC} theme={retro} />
      </div>
    </div>
  );
}

export default App;
