import React, { useState } from "react";
import { Modal } from "react-native";
import { CategorySelect } from "../CategorySelect";

import Button from "../../components/Forms/Button";
import CategorySelectButton from "../../components/Forms/CategorySelectButton";
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
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const [transactionType, setTransactionType] = useState<"up" | "down">();
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  function handleTransactionTypesSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategory}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  );
}
