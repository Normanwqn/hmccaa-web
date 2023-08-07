const theme = {
  colors: {
    Neutral: {
      50: "#f0f3f5",
      100: "#e6eef2",
      200: "#d0e3ed",
      300: "#adcfe0",
      400: "#8bb6cc",
      500: "#6097b2",
      600: "#376e8a",
      700: "#164c66",
      800: "#062d40",
      900: "#01151f",
      1000: "rgba(255,255,255,.8)",
    },
    Primary: {
      50: "#6494fa",
      300: "#1a56d6",
      500: "#0047ab",
      700: "#0c2966",
      900: "#061433",
      1000: "#4352B1",
    },
    Secondary: {
      50: "#faffd7",
      300: "#ecf2c2",
      500: "#e1ee90",
      700: "#daf14b",
      900: "#c3e200",
    },
    Accent: {
      50: "#f9f871",
      200: "#ff8069",
      300: "#ffbd57",
      500: "#ff8069",
      700: "#f0508b",
      900: "#a842a8",
    },
    Success: {
      50: "#ecfdf5",
      300: "#6ee7b7",
      500: "#10b981",
      700: "#047857",
      900: "#064e3b",
    },
    Warning: {
      50: "#fffbeb",
      300: "#fcd34d",
      500: "#f59e08",
      700: "#b45309",
      900: "#78350f",
    },
    Error: {
      50: "#fef2f2",
      300: "#f39ea2",
      500: "#ef4444",
      700: "#b91c1c",
      900: "#7f1d1d",
    },
    Shades: { 0: "#ffffff", 100: "#000000" },
    transparent: "transparent",
  },
  fontSize: {
    xs: "0.6875rem",
    sm: "0.75rem",
    base: "0.875rem",
    lg: "1rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontFamily: {
    gotham: "Gotham",
    "gotham-black": "Gotham Black",
    montserrat: "Montserrat",
    raleway: "Raleway",
    inter: "Inter",
  },
  borderRadius: {
    none: "0",
    xs: "0.125rem",
    sm: "0.25rem",
    default: "0.3125rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1.25rem",
    "3xl": "1.875rem",
    "4xl": "2.5rem",
    "5xl": "3.75rem",
    "6xl": "5rem",
    full: "9999px",
  },
  extend: {
    maxWidth: {
      container: "75.75rem",
      btn: "10.3125rem",
      "sm-md": "21.875rem",
      "sm-lg": "30rem",
      "md-lg": "31.25rem",
      "xl-md": "40.625rem",
      "3.25xl": "50.8125rem",
      "3.4xl": "53.125rem",
      "3.5xl": "53.625rem",
    },
    gap: {
      15: "3.75rem",
      30: "7.5rem",
    },
    width: {
      sm: "30rem",
      smx2: "36.25rem",
    },
    height: {
      sm: "21.63rem",
      smx2: "26.125rem",
    },
    lineHeight: {
      tighter: "1.2",
    },
    flexBasis: {
      "689/1180": "58.389831%",
    },
    boxShadow: {
      button: "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
    },
    letterSpacing: {
      "medium-wide": "0.06em",
    },
    width: {
      med: "66.3rem",
    },
    height: {
      med: "66.6rem",
    },
    padding: {
      1.75: "0.4375rem",
      2.25: "0.5625rem",
      2.75: "0.6875rem",
      11.25: "3.3125rem",
      14.5: "3.75rem",
      17: "4.1875rem",
      18: "4.5625rem",
      20.25: "5.0625rem",
      20.5: "5.125rem",
      24.5: "6.125rem",
      31: "7.625rem",
    },
    borderWidth: {
      1.5: "1.5px",
    },
    spacing: {
      2.25: "0.5625rem",
      4.5: "1.125rem",
      25: "6.25rem",
      26: "6.5rem",
      43: "10.75rem",
      50: "12.5rem",
    },
    rotate: {
      50: "50deg",
    },
    strokeWidth: {
      4: "4",
    },
    scale: {
      10: ".10",
    },
    backgroundImage: {
      about: "url('../images/background/about.png')",
      connect: "url('../images/background/connect.jpeg')",
      "next-steps": "url('../images/background/next-steps.jpg')",
      events: "url('../images/background/events.jpeg')",
      watch: "url('../images/background/watch.jpeg')",
      give: "url('../images/background/give.jpeg')",
      new: "url('../images/background/new.jpeg')",
    },
  },
};

export default theme;
