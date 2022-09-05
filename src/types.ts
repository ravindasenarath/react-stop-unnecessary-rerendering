export type Category = {
  categoryID: number;
  categoryName: string;
};

export type Person = {
  mainId: number;
  firstName: string;
  lastName: string;
  categories: Array<Category>;
  salary?: number;
};

export type Response = {
  data: Array<Person>;
};

export type Todo = {
  description: string;
  createdAt: number;
};
