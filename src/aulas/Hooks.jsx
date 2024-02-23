import DesafioUseState from "../hooks/DesafioUseState";
import UseEffect from "../hooks/UseEffect";
// import Produto from "./hooks/context/Produto";
// import { GlobalContext } from "./hooks/context/GlobalContext";
// import Limpar from "./hooks/context/Limpar";
import CustomHooks from "../hooks/custom hooks/CustomHooks";

function Hooks() {
  return (
    <>
      <h1>Hooks</h1>
      <DesafioUseState />
      <UseEffect />

      {/* 09 useContext 2 */}

      {/* <GlobalContext>
        <Produto />
        <Limpar />
      </GlobalContext> */}

      <CustomHooks />
    </>
  );
}

export default Hooks;
