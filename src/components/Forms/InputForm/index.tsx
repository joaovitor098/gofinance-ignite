import React from "react";
import { Controller } from "react-hook-form";
import { InputControlledProps } from "../../../@types";
import { Input } from "../Input";
import { Container, Error } from "./styles";

export function InputForm({
  control,
  name,
  erro,
  ...rest
}: InputControlledProps) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {erro && <Error>{erro}</Error>}
    </Container>
  );
}
