import { queries, render, type RenderOptions } from "@testing-library/react";
import type { ReactNode } from "react";
//styles
import { AppThemeProvider } from "../theme/ThemeProvider";

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>;
};

const customRender = (
  ui: ReactNode,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { queries, wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
