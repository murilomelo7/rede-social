import { Add, Search } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function ProdutoList() {
	const navigate = useNavigate();

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

	const handleNewForm = () => {
		navigate("/produtos/new");
	};

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
		>
			{/* Título e Botões */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: "10px",
					marginTop: "10px",
				}}
			>
				<Typography variant="h4" gutterBottom>
					Produtos
				</Typography>

				<Box>
					<IconButton color="secondary" sx={{ marginLeft: "10px" }}>
						<Search />
					</IconButton>
					<IconButton
						color="success"
						sx={{ marginLeft: "10px" }}
						onClick={() => handleNewForm()}
					>
						<Add />
					</IconButton>
				</Box>
			</Box>

			{/* DataGrid */}
			<Box
				sx={{
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
				}}
			>
				<DataGrid
					rows={linhas}
					columns={colunas}
					pageSize={5}
					rowsPerPageOptions={[5, 10, 20]}
					checkboxSelection
					disableColumnFilter={true}
					sx={{
						minHeight: "calc(100vh - 180px)", // Altura mínima para garantir visibilidade
						height: "calc(100vh - 180px)", // Ajuste para o espaço restante após o título e botões
						width: "100%", // Garante que o DataGrid ocupe toda a largura disponível
					}}
				/>
			</Box>
		</Box>
	);
}
