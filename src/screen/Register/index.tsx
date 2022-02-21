import React from "react";
import { Input } from "../../components/Forms/Input";
import { Container, Title, Header, Form } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  );
}
