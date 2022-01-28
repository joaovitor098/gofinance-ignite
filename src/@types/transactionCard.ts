export type TransactionCardProps = {
  data: DataTransactionCardProps;
  type: "positive" | "negative";
};

export type DataTransactionCardProps = {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
};

type CategoryProps = {
  name: string;
  icon: string;
};
