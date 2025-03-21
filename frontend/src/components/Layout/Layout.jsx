import React, { useState } from "react";
import { CssBaseline, Box, Container, alpha } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useTheme } from "@emotion/react";

function Layout({ children }) {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<CssBaseline />
			<Sidebar />
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					minHeight: "100vh",
					padding: 0,
					margin: 0,
					paddingTop: 0,
					marginTop: 0,
					display: "flex",
					width: "100%",
				}}
			>
				<Container
					sx={{
						minHeight: "100vh",
						width: "100%",
					}}
				>
					{children}
				</Container>
			</Box>
		</Box>
	);
}

export default Layout;
