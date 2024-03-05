import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider attribute="class" defaultTheme="system"{...props}>{children}</NextThemesProvider>;
}

export { ThemeProvider };
