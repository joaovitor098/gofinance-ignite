import { RectButtonProps } from "react-native-gesture-handler";

export type CategorySelectButtonProps = RectButtonProps & {
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
