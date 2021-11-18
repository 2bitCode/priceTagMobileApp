import { Dimensions } from "react-native";

export const variables = {
  DIMENSIONS: Dimensions.get("window"),
  IMAGE: { bgImageHeight: Dimensions.get("window").height / 1.33 },
  CATAGORY: {
    data: [
      { key: "catagory1" },
      { key: "catagory2" },
      { key: "catagory3" },
      { key: "catagory4" },
      { key: "catagory5" },
      { key: "catagory6" },
    ],
  },
};
