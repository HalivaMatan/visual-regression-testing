import { createTheme } from "@mui/material/styles";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

const customViewports = Object.entries(theme.breakpoints.values).reduce(
  (viewports, [breakpoint, width]) => ({
    ...viewports,
    [breakpoint]: {
      name: `${breakpoint} (min width)`,
      styles: {
        width: `${breakpoint === "xs" ? 320 : width}px`,
        height: "100%",
      },
    },
  }),
  {}
);

export const parameters = {
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  chromatic: { viewports: [320, 600, 960, 1280, 1280, 1920] },
  grid: {
    gridOn: false,
    columns: 12,
    gap: "16px",
    gutter: "32px",
    maxWidth: "600px",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
