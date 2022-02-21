import { View, Text } from "react-native";
import React from "react";
import { Container, Title, Icon } from "./styles";
import { TransactionButtonProps } from "../../../@types";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export default function TransactionTypeButton({
  title,
  type,
  isActie,
  ...rest
}: TransactionButtonProps) {
  return (
    <Container isActive={isActie} type={type} {...rest}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
