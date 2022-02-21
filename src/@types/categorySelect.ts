import { TouchableOpacityProps } from "react-native";

export type CategorySelectButtonProps = TouchableOpacityProps & {
  title: string;
};

export type CategorySelectScreenProps = {
  category: CategoryProps;
  setCategory: (category: CategoryProps) => void;
  closeSelectCategory: () => void;
};

export type CategoryProps = {
  key: string;
  name: string;
};
