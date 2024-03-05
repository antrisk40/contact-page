// components/Layout.jsx

import { ThemeProvider as NextThemesProvider } from "next-themes";

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <NextThemesProvider attribute="class" defaultTheme="system">
          {children}
        </NextThemesProvider>
      </main>
    </div>
  );
};

export default Layout;
