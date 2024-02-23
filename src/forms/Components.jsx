import React from "react";
import {
  InputComponent,
  InputComponentWithValidation,
} from "./components/InputComponent";
import SelectComponent from "./components/SelectComponent";
import RadioComponent from "./components/RadioComponent";
import CheckboxComponent from "./components/CheckboxComponent";
import useForm from "./useForm";
import DesafioForms from "./desafio/DesafioForms";

function Components() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [fruta, setFruta] = React.useState("uva");
  const [num, setNum] = React.useState("");
  const [termos, setTermos] = React.useState([]);
  const [linguagens, setLinguagens] = React.useState([]);

  const nomeValidation = useForm();
  const sobrenomeValidation = useForm(false);
  const cepValidation = useForm("cep");
  const emailValidation = useForm("email");

  // ************************************************************
  // ****** sem o custom hooks useForm(), seria assim: ****** //

  // const [cep, setCep] = React.useState("");
  // const [error, setError] = React.useState(null);

  // function validateCep(value) {
  //   if (value.length === 0) {
  //     setError("Preencha um valor");
  //     return false;
  //   } else if (!/^\d{5}-?\d{3}$/.test(value)) {
  //     setError("Preencha um CEP valido");
  //     return false;
  //   } else {
  //     setError(null);
  //     return true;
  //   }
  // }

  // function handleChange({target}) {
  //   if (error) validateCep(target.value)
  //   setCep(target.value)
  // }

  // function handleBlur({ target }) {
  //   // const regex = /^\d{5}-?\d{3}$/;
  //   // const validação = regex.test(target.value);
  //   // console.log(validação);
  //   validateCep(target.value);
  // }

  function handleCepClick(event) {
    event.preventDefault();
    // if (validateCep(cep)) {
    // if (true) {
    if (
      cepValidation.validate() &&
      emailValidation.validate() &&
      nomeValidation.validate()
    ) {
      console.log("Enviou");
    } else {
      console.log("Não enviou");
    }
  }

  return (
    <div>
      <form>
        <h3>Form Components</h3>
        <InputComponent
          id="nomeComponent"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />

        <InputComponent
          id="emailComponent"
          label="Email"
          value={email}
          setValue={setEmail}
        />

        <SelectComponent
          options={["Uva", "Pera"]}
          value={fruta}
          setValue={setFruta}
        />

        <RadioComponent
          options={["cinco", "seis", "sete"]}
          value={num}
          setValue={setNum}
        />

        <p>Termos</p>
        <CheckboxComponent
          options={["Li e aceito os termos"]}
          value={termos}
          setValue={setTermos}
        />

        <p>Linguagens</p>
        <CheckboxComponent
          options={["JavaScript", "Python", "Ruby"]}
          value={linguagens}
          setValue={setLinguagens}
        />

        <p>Validação</p>
        <InputComponentWithValidation
          label="Nome"
          id="nomeValidate"
          type="text"
          {...nomeValidation}
          // value={cep.value}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <InputComponentWithValidation
          label="Sobrenome"
          id="sobrenomeValidate"
          type="text"
          {...sobrenomeValidation}
          // value={cep.value}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <InputComponentWithValidation
          placeholder="00000-000"
          label="CEP"
          id="cepValidate"
          type="text"
          {...cepValidation}
          // value={cep.value}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <InputComponentWithValidation
          placeholder="email@email.com"
          label="Email"
          id="emailValidate"
          type="text"
          {...emailValidation}
          // value={cep.value}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        <button onClick={handleCepClick}>Enviar</button>
      </form>

      <h3>Desafio Form</h3>
      <DesafioForms />
      
    </div>
  );
}

export default Components;
