import React from "react";
import { InputProps } from "../../../@types";
import { Container } from "./styles";

export function Input({ ...rest }: InputProps) {
  return <Container {...rest}></Container>;
}
