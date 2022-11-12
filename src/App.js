import { SwapWidget } from "@uniswap/widgets";
import './App.css'
import "@uniswap/widgets/fonts.css";
const alchemyRPC =
  "https://polygon-mainnet.g.alchemy.com/v2/CtHqiL3aNzpaAZKwY2aMl3s0ArBkcHpw";
function App() {
  const retro = {
  primary: 'white',
  secondary: 'white',
  interactive: '#f7f7f7',
  container: '#0A0708',
  module: '#3F3F3F',
  accent: '#006DFF',
  outline: 'white',
  dialog: '#000',
  fontFamily: 'Josefin Sans',
  borderRadius: 0.6,
  }
  return (
    <div className="flex flex-row justify-center items-center mt-[40px]">
      <div className="Uniswap border-2 border-black rounded-xl">
        <SwapWidget jsonRpcEndpoint={alchemyRPC} theme={retro} />
      </div>
    </div>
  );
}

export default App;
