import { tokens } from "./tokens";

export const getColor = (colorNameAndVariant) => {
  // 쪼개자!!

  if (colorNameAndVariant.includes("/")) {
    let [colorName, colorVariant] = colorNameAndVariant.split("/"); // []
    return tokens.colors[colorName][colorVariant];
  } else {
    return tokens.colors[colorNameAndVariant];
  }
};

getColor("primary/500");
