/* eslint-disable import/prefer-default-export */
export const generateThemeOptions = (appTheme) => {
  const mode = appTheme.mode || "light";
  const primaryColor = "#000000";
  const secondaryColor = "#000000";
  const backgroundColor = mode === "light" ? "#ffffff" : "#010101";
  const cardBackgroundColor = mode === "light" ? "#f2f2f2" : "#272727";

  return {
    palette: {
      mode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      background: {
        default: backgroundColor,
      },
    },
    typography: {
      overflow: "hidden",
      fontFamily: ["Montserrat"],
      body1: {
        noWrap: true,
        fontWeight: 500,
        textOverflow: "ellipsis",
      },
      body2: {
        noWrap: true,
        fontWeight: 500,
        textOverflow: "ellipsis",
      },
    },

    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            overflow: "hidden",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#f6f5f4",
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: cardBackgroundColor,
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: primaryColor,
            "&:hover": {
              backgroundColor: "#f6f5f4",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },

        styleOverrides: {
          root: {
            textTransform: "capitalize",

            "&.MuiButton-containedPrimary:hover": {
              backgroundColor: "#333",
            },

            "&.MuiButton-containedSecondary:hover": {
              backgroundColor: "#fafafa",
            },

            "&.MuiTypography-root": {
              fontSize: "18px",

              fontWeight: "500",
            },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#dadada",

            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              backgroundColor: "#dadada",
            },

            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#A7A7A7",
              },

            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,

              backgroundColor: "#A7A7A7",

              border: "3px solid #A7A7A7",
            },
          },
        },
      },
    },
  };
};
