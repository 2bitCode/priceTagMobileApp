import { Dimensions } from "react-native";

export const variables = {
  DIMENSIONS: Dimensions.get("window"),
  IMAGE: { bgImageHeight: Dimensions.get("window").height / 1.33 },
  CATAGORY: {
    data: [
      { key: "Home Appliances" },
      { key: "Electronics Accessories" },
      { key: "Health and Beauty" },
      { key: "Babies and Toys" },
      { key: "Groceries and Pets" },
      { key: "Home and Lifestyle" },
      { key: "Women's Fashion" },
      { key: "Men's Fashion" },
      { key: "Foods and Hotels" },
    ],
  },
  MENU: {
    data: [
      "Subscription Plans",
      "Activity",
      "Settings",
      "Privacy Policy",
      "Contact Us",
      "About Us",
      "Tell a friend",
      "Help and Feedback",
    ],
    icons: [
      "subscriptions",
      "local-activity",
      "settings",
      "policy",
      "mail",
      "people",
      "emoji-people",
      "feedback",
    ],
  },
};
