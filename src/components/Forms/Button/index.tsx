import React from "react";
import { Container, Title } from "./styles";
import { ButtonProps } from "../../../@types";

export default function Button({ title, onPress, ...rest }: ButtonProps) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
