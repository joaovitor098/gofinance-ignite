import { View, Text } from "react-native";
import React from "react";
import { Container, Category, Icon } from "./styles";
import { CategorySelectButtonProps } from "../../../@types";

export default function CategorySelectButton({
  title,
  ...rest
}: CategorySelectButtonProps) {
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
