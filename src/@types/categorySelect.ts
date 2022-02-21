export type CategorySelectProps = {
  title: string;
};

export type CategorySelectScreenProps = {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
};

type Category = {
  key: string;
  name: string;
};
