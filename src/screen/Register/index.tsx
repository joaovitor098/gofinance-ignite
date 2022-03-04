import React, { useState } from "react";
import { Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { CategorySelect } from "../CategorySelect";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../components/Forms/Button";
import CategorySelectButton from "../../components/Forms/CategorySelectButton";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import { InputForm } from "../../components/Forms/InputForm";

import {
  Container,
  Title,
  Header,
  Form,
  Fields,
  TransactionTypes,
} from "./styles";

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("Informe um  valor númerico")
    .positive("O valor não pode ser negativo")
    .required("Quantidade é obrigatória"),
});

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const [transactionType, setTransactionType] = useState<"up" | "down">();
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function handleTransactionTypesSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleOpenSelectCategory() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategory() {
    setCategoryModalOpen(false);
  }

  function handleSubmitForm(form: any) {
    console.log(form);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <Title>Cadastrar</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              erro={errors.name && errors.name.message}
            />

            <InputForm
              control={control}
              name="amount"
              placeholder="Quantidade"
              keyboardType="numeric"
              erro={errors.amount && errors.amount.message}
            />

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
          <Button title="Enviar" onPress={handleSubmit(handleSubmitForm)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
