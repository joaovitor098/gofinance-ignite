import { View, Text } from "react-native";
import React from "react";
import { Container, Title } from "./styles";
import { ButtonProps } from "../../../@types";

export default function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
