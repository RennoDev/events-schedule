import { Link } from "react-router-dom";
import { LandingContainer, LandingContent } from "./styles";

export default function Landing() {
  return (
    <LandingContainer>
      <LandingContent>
        <h1>Bem vindo(a) ao Events Scheduler!</h1>
        <p>Efetue o Login ou Registre-se nas opções abaixo:</p>
        <Link to="/login">
          <button>
            Entrar
          </button>
        </Link>
        <Link to="/register">
          <button>
            Registrar
          </button>
        </Link>
      </LandingContent>
    </LandingContainer>
  )
}