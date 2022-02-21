import React from "react";
import Button from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { Container, Title, Header, Form, Fields } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
