import React from "react";
import { FlatList } from "react-native";
import { CategorySelectScreenProps } from "../../@types";
import Button from "../../components/Forms/Button";
import { categories } from "../../utils/categories";
import {
  Container,
  Hearder,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: CategorySelectScreenProps) {
  return (
    <Container>
      <Hearder>
        <Title>Categorias</Title>
      </Hearder>
      <FlatList
        data={categories}
        style={{
          flex: 1,
          width: "100%",
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
}
