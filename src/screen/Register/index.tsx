import React, { useState } from "react";
import Button from "../../components/Forms/Button";
import CategorySelect from "../../components/Forms/CategorySelect";
import { Input } from "../../components/Forms/Input";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState<"up" | "down">();

  function handleTransactionTypesSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              isActie={transactionType === "up"}
              onPress={() => handleTransactionTypesSelect("up")}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              isActie={transactionType === "down"}
              onPress={() => handleTransactionTypesSelect("down")}
            />
          </TransactionTypes>

          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
