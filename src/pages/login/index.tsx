import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import Input from "../../components/forms/Input";
import { LoginContainer, LoginCard } from "./styles";

export default function Login() {

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <LoginContainer>
      <LoginCard className="col-sm-8 col-md-6 col-lg-4">
        <div className="Icon">
          <Link to="/">
            <span className="material-icons">
              arrow_back
            </span>
          </Link>
        </div>
        <h1>Entre por aqui!</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Input name="username" label="Usuário" />
          <Input name="password" label="Senha" type="password" />
          <button type="submit">Entrar</button>
        </Form>
      </LoginCard>
    </LoginContainer>
  )
}