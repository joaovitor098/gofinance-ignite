import { RectButtonProps } from "react-native-gesture-handler";

export type ButtonProps = Omit<RectButtonProps, "onPress"> & {
  title: string;
  onPress: () => void;
};

export type TransactionButtonProps = RectButtonProps & {
  title: string;
  type: "up" | "down";
  isActie: boolean;
};
