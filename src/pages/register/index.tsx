import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import Input from "../../components/forms/Input";
import { RegisterContainer, RegisterCard } from "./styles";

export default function Register() {

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <RegisterContainer>
      <RegisterCard className="col-sm-8 col-md-6 col-lg-4">
        <div className="Icon">
          <Link className="arrowIcon" to="/">
            <span className="material-icons">
              arrow_back
            </span>
          </Link>
        </div>
        <h1>Registre-se por aqui!</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Input name="username" label="Usuário" />
          <Input name="password" label="Senha" type="password" />
          <Input name="password" label="Confirme sua Senha" type="password" />
          <button type="submit">Registrar</button>
        </Form>
      </RegisterCard>
    </RegisterContainer>
  )
}