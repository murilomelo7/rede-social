import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
	const [open, setOpen] = useState(true);

	const toggleSidebar = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
			<CssBaseline />

			{/* Navbar */}
			<Navbar toggleSidebar={toggleSidebar} />

			<Box sx={{ display: "flex", flexGrow: 1 }}>
				{/* Sidebar */}
				<Sidebar open={open} toggleSidebar={toggleSidebar} />

				{/* Main content */}
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						overflow: "auto",
						marginLeft: open ? "0px" : "0", // Ajusta a margem à largura do Sidebar
						transition: "margin-left 0.3s ease-in-out", // Transição suave
						backgroundColor: "rgba(182, 175, 175, 0.05)",
            padding: 2,
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
}

export default Layout;
