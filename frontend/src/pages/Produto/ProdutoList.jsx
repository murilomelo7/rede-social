import { Add, Grid4x4, PostAdd, Search } from "@mui/icons-material";
import {
	Box,
	Avatar,
	Typography,
	Button,
	TextField,
	Card,
	CardContent,
	IconButton,
	Paper,
	Grid,
	CardMedia,
	CardActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

function ProdutoList() {
	const theme = useTheme();

	const colunas = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "nome", headerName: "Produto", width: 200 },
		{ field: "descricao", headerName: "Descrição", width: 300 },
		{ field: "preco", headerName: "Preço", width: 120 },
	];

	const linhas = [
		{
			id: 1,
			nome: "Produto A",
			descricao: "Descrição do Produto A",
			preco: "R$ 99,99",
		},
		{
			id: 2,
			nome: "Produto B",
			descricao: "Descrição do Produto B",
			preco: "R$ 149,90",
		},
		{
			id: 3,
			nome: "Produto C",
			descricao: "Descrição do Produto C",
			preco: "R$ 79,50",
		},
		{
			id: 4,
			nome: "Produto D",
			descricao: "Descrição do Produto D",
			preco: "R$ 59,90",
		},
	];
	return (
		<Box component="main" sx={{ flexGrow: 1 }}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "10px",
					marginTop: "10px",
				}}
			>
				<Typography variant="h4" gutterBottom sx={{ marginTop: "10px" }}>
					Produtos
				</Typography>

				<Box>
					<IconButton
						color="secondary"
						// title={newPostFormIsOpen ? "Fechar" : "Novo post"}
						// onClick={toggleNewPostForm}
						sx={{ marginLeft: "10px" }}
					>
						<Search />
					</IconButton>
					<IconButton
						color="success"
						// title={newPostFormIsOpen ? "Fechar" : "Novo post"}
						// onClick={toggleNewPostForm}
						sx={{ marginLeft: "10px" }}
					>
						<Add />
					</IconButton>
				</Box>
			</Box>
			<Box sx={{ height: "calc(100vh - 100px)", width: "100%" }}>
				<DataGrid
					rows={linhas}
					columns={colunas}
					pageSize={5}
					rowsPerPageOptions={[5, 10, 20]}
					checkboxSelection
					disableColumnFilter={true}
				/>
			</Box>
		</Box>
	);
}
export default ProdutoList;
