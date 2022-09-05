import { Response } from "./types";

export const peopleResponse: Response = {
  data: [
    {
      mainId: 1111,
      firstName: "Sherlock",
      lastName: "Homes",
      categories: [
        {
          categoryID: 1,
          categoryName: "Example",
        },
      ],
    },
    {
      mainId: 122,
      firstName: "James",
      lastName: "Watson",
      categories: [
        {
          categoryID: 2,
          categoryName: "Example2",
        },
      ],
    },
  ],
};
