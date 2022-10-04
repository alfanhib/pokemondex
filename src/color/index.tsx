import { Appearance } from "react-native";

export const Colors = () => {
  const colorScheme = Appearance.getColorScheme();

  let colors = {
    background: "#FFFFFF",
    textH1: "#42494D",
    textH2: "#42494D",
    textH3: "#42494D",
    textH4: "#B3B6B8",
    primary: "#FFD86C",
    baseFont: "#42494D",
    secondaryFont: "#7B8082",
    button: "#F2C94C",
    textButton: "#FFFFFF"
  }

  if (colorScheme === "dark") {
    colors = {
      background: "#2B3151",
      textH1: "#ffffff",
      textH2: "#ffffff",
      textH3: "#42494D",
      textH4: "#B3B6B8",
      primary: "#F7BA16",
      baseFont: "#ffffff",
      secondaryFont: "#ffffff",
      button: "#F7BA16",
      textButton: "#FFFFFF"

    }
  }
  return colors
}