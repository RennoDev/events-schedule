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
      <LoginCard className="col-sm-10 col-md-8 col-lg-6">
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
          <Link to="/home"><button type="submit">Entrar</button></Link>
        </Form>
      </LoginCard>
    </LoginContainer>
  )
}