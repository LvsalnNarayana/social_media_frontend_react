export const generateThemeOptions = (appTheme) => {
	const mode = appTheme.mode || "light";
	const primaryColor = "#000000";
	const secondaryColor = "#000000";
	const backgroundColor = mode === "light" ? "#ffffff" : "#010101";
	const cardBackgroundColor = mode === "light" ? "#f2f2f2" : "#272727";

	return {
		components: {
			MuiButton: {
				defaultProps: {
					disableRipple: true,
				},
				styleOverrides: {
					root: {
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
						textTransform: "capitalize",
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						backgroundColor: cardBackgroundColor,
						backgroundImage: "none",
					},
				},
			},
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
							backgroundColor: "#dadada",
							width: "12px",
						},
						"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner":
						{
							backgroundColor: "#dadada",
						},
						"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb":
						{
							backgroundColor: "#A7A7A7",
							border: "3px solid #A7A7A7",
							borderRadius: 8,
						},
						"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
						{
							backgroundColor: "#A7A7A7",
						},
						"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
						{
							backgroundColor: "#A7A7A7",
						},
						"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
						{
							backgroundColor: "#A7A7A7",
						},
						scrollbarColor: "#dadada",
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						"&:hover": {
							backgroundColor: "#f6f5f4",
						},
						color: primaryColor,
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
			MuiTypography: {
				styleOverrides: {
					root: {
						overflow: "hidden",
					},
				},
			},
		},
		palette: {
			background: {
				default: backgroundColor,
			},
			mode: mode,
			primary: {
				main: primaryColor,
			},
			secondary: {
				main: secondaryColor,
			},
		},

		typography: {
			body1: {
				fontWeight: 500,
				noWrap: true,
				textOverflow: "ellipsis",
			},
			body2: {
				fontWeight: 500,
				noWrap: true,
				textOverflow: "ellipsis",
			},
			fontFamily: ["Montserrat"],
			overflow: "hidden",
		},
	};
};
