import Array1 from "../iniciante/Array1";
import Array2 from "../iniciante/Array2";
import Components from "../iniciante/Components";
import Propriedades from "../iniciante/Propriedades";
import Desafio from "../iniciante/DesafioIniciante";

function Iniciante() {
  return (
    <>
      <h1>Iniciante</h1>
      <Array1 />
      <Array2 />
      <Components />
      {/* required is part of the rest ...props */}
      <Propriedades id="email" label="Email" required />
      {/* type is part of the rest ...props */}
      <Propriedades id="password" type="password" label="Password" />
      <Desafio />
    </>
  );
}
export default Iniciante;
