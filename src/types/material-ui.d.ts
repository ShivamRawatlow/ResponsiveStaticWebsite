import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    common: {
      blue:string;
      orange:string;
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    common: {
        blue:string;
        orange:string;
    }
  }
}