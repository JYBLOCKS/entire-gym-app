// Paleta y tokens compartidos
export const brand = {
  primary: {
    50: "hsl(15 100% 96%)",
    100: "hsl(15 95% 90%)",
    200: "hsl(15 90% 80%)",
    300: "hsl(15 90% 70%)",
    400: "hsl(15 100% 60%)",
    500: "hsl(15 100% 55%)", // main
    600: "hsl(15 100% 45%)",
    700: "hsl(15 100% 35%)",
    800: "hsl(15 100% 25%)",
    900: "hsl(15 100% 20%)",
  },
  secondary: {
    50: "hsl(220 85% 95%)",
    100: "hsl(220 85% 90%)",
    200: "hsl(220 80% 80%)",
    300: "hsl(220 80% 70%)",
    400: "hsl(220 80% 60%)",
    500: "hsl(220 85% 45%)", // main
    600: "hsl(220 85% 38%)",
    700: "hsl(220 85% 30%)",
    800: "hsl(220 85% 24%)",
    900: "hsl(220 85% 18%)",
  },
  gray: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1F2937",
    900: "#0B1220",
  },
};

export const gradients = {
  brand: `linear-gradient(90deg, ${brand.primary[500]} 0%, ${brand.secondary[500]} 100%)`,
  subtle: `linear-gradient(135deg, ${brand.gray[50]} 0%, white 100%)`,
};

export const shape = {
  radius: 14,
};
