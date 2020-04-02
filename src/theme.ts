const palette = {
  primary_900: "#333",
  primary_700: "#535353",
  primary_500: "#5A5A5A",
  primary_300: "#777777",
  primary_100: "#999999",
  secondary_900: "#AAAAAA",
  secondary_700: "#CCCCCC",
  secondary_200: "#FAFAFA",
  secondary_100: "#FFFFFF",
  accent: "#F15151"
};

const theme = {
  // TEXTS
  mainTextColor: palette.secondary_700,
  secondaryTextColor: palette.primary_100,
  titleTextColor: palette.secondary_900,
  // LINKS
  linkTextColor: palette.primary_300,
  linkHoverTextColor: palette.secondary_100,
  // COMPONENTS
  headerBackground: palette.primary_700,
  inputTextColor: palette.primary_500,
  inputBorderColor: palette.primary_300,
  inputPlaceholderColor: palette.primary_500,
  bookListBorderColor: palette.primary_700,
  groupingCategoryActiveBackground: palette.accent,
  spinnerBackgroundColor: palette.primary_700,
  spinnerColor: palette.accent
};

export default theme;
