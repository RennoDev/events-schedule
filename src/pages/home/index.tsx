import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HomeContainer, HomeContent } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <h1>Events Scheduler</h1>
      <HomeContent className="col-sm-10 col-md-8 col-lg-6">
        <h1>Bem vindo (Usuário)!</h1>
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Nome</th>
              <th>Data(s)</th>
              <th>Horário</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aniversário</td>
              <td>21/07/2021</td>
              <td>15:30 - 18:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Palestra</td>
              <td>25/08/2021</td>
              <td>13:00 - 15:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Reunião</td>
              <td>12/09/2021</td>
              <td>08:00 - 09:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
          </tbody>
        </Table>
        <Link to="/event">
          <span className="material-icons">
            add_circle
          </span>
        </Link>
      </HomeContent>
      <HomeContent>
        <h1>Convites Pendentes</h1>
        <h3>Enviados</h3>
        {/* Criar ternário após banco de dados */}
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Nome</th>
              <th>Data(s)</th>
              <th>Horário</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aniversário</td>
              <td>21/07/2021</td>
              <td>15:30 - 18:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Palestra</td>
              <td>25/08/2021</td>
              <td>13:00 - 15:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Reunião</td>
              <td>12/09/2021</td>
              <td>08:00 - 09:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
          </tbody>
        </Table>
        <h3>Recebidos</h3>
        {/* Criar ternário após banco de dados */}
        <Table className="table" striped bordered hover>
          <thead>
            <tr>
              <th>Evento</th>
              <th>Nome</th>
              <th>Data(s)</th>
              <th>Horário</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aniversário</td>
              <td>21/07/2021</td>
              <td>15:30 - 18:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Palestra</td>
              <td>25/08/2021</td>
              <td>13:00 - 15:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Reunião</td>
              <td>12/09/2021</td>
              <td>08:00 - 09:00</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</td>
            </tr>
          </tbody>
        </Table>
      </HomeContent>
      <div className="Logout">
        <Link to="/">
          <h3>Sair</h3>
          <span className="material-icons">
            logout
          </span>
        </Link>
      </div>
    </HomeContainer>
  )
}