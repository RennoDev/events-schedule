import { Form } from "@unform/web";
import { Link } from "react-router-dom";
import Input from "../../../components/forms/Input";
import { EventContainer, EventContent } from "./styles";

export default function Event() {

  function handleSubmit(data: any) {
    console.log(data)
  }

  return (
    <EventContainer>
      <EventContent className="col-sm-10 col-md-8 col-lg-6">
        <div className="Icon">
          <Link to="/home">
            <span className="material-icons">
              arrow_back
            </span>
          </Link>
        </div>
        <h1>Adicionar/Editar Evento</h1>
        <Form className="form" onSubmit={handleSubmit}>
          <Input name="Nome" label="Nome do Evento" />
          <Input name="Data" label="Data" />
          <p onClick={() => { }}>Evento de mais dias? adicione aqui!</p>
          <Input name="Horário" label="Duração (em horas)" />
          <button type="submit">Salvar</button>
        </Form>
      </EventContent>
    </EventContainer>
  )
}