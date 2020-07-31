export type ColorKeys = "default" | "primary" | "secondary";

export interface Theme {
  backgrounds: {
    primary: string;
  };
  colors: {
    primary: string;
  };
  default: {
    backgroundColor: string;
    hoverColor: string;
  };
  primary: {
    backgroundColor: string;
    hoverColor: string;
  };
  secondary: {
    backgroundColor: string;
    hoverColor: string;
  };
}
