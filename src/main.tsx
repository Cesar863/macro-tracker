import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import App from "./App.tsx";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#009688",
			light: "#33ab9f",
			dark: "#00695f",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#ff7043",
			contrastText: "#ffffff",
		},
		background: {
			default: "#f4f6f8",
			paper: "#ffffff",
		},
		text: {
			primary: "#1c2025",
			secondary: "#637381",
		},
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: { fontWeight: 700 },
		h2: { fontWeight: 600 },
		button: { textTransform: "none" },
	},
	shape: {
		borderRadius: 8,
	},
});

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>,
);
