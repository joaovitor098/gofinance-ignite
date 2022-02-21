import { View, Text } from "react-native";
import React from "react";
import { Container, Category, Icon } from "./styles";
import { CategorySelectProps } from "../../../@types";

export default function CategorySelect({ title }: CategorySelectProps) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
