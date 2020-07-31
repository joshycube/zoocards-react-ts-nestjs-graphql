const COLORS = {
  LIGHT_BROWN: "#FFCC99",
  LIGHT_BLUE: "#6EB5FF",
  BLACK: "#16161d",
};

const SIZES = {
  SMALL: 12,
  MEDIUM: 22,
  LARGE: 42,
};

export default {
  sizes: {
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    large: SIZES.LARGE,
  },
  backgrounds: {
    primary: COLORS.LIGHT_BROWN,
  },
  colors: {
    primary: COLORS.BLACK,
  },
  primary: {
    backgroundColor: COLORS.LIGHT_BLUE,
    hoverColor: COLORS.LIGHT_BROWN,
  },
  secondary: {
    backgroundColor: COLORS.LIGHT_BROWN,
  },
};
