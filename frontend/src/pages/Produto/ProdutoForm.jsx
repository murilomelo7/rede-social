import { useState } from "react";
import { Add, ArrowBack, AttachMoney, Search } from "@mui/icons-material";
import {
	FormControl,
	TextField,
	Button,
	Box,
	Typography,
	Select,
	InputLabel,
	MenuItem,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProdutoForm() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		nome: "",
		descricao: "",
		preco: "",
		categoria: "",
	});

	const handleBack = () => {
		navigate(-1); // Navega para a última página
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Produto cadastrado:", form);
	};

	return (
		<Box
			component="main"
			sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Alinha os itens ao topo
        backgroundColor: "rgba(0, 0, 0, 0.50)", // Cor de fundo um pouco mais clara que o default
        width: "100%", // Para garantir que ocupe toda a largura
        height: "100%",
        // maxWidth: 1200, // Limitar o tamanho máximo para evitar que fique muito largo
        borderRadius: 2, // Bordas arredondadas
        boxShadow: 3, // Sombras para dar um efeito de elevação
    
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%", // Garante que o título e botão ocupem todo o espaço disponível
					marginBottom: "16px",
          // backgroundColor: "primary", // Cor de fundo um pouco mais clara que o default

				}}
			>
				{/* Botão de Voltar */}
				<IconButton onClick={handleBack} sx={{ marginRight: "16px" }}>
					<ArrowBack />
				</IconButton>

				{/* Título */}
				<Typography variant="h4" gutterBottom sx={{ flexGrow: 1 }}>
					Novo Produto
				</Typography>

				{/* Aqui você pode adicionar mais itens, como outro botão, se necessário */}
				<Box>{/* Coloque outro botão ou ícones se necessário */}</Box>
			</Box>

			{/* Formulário */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					p: 3,
					height: "100%", // Para ocupar todo o espaço disponível
					width: "100%", // Para ocupar todo o espaço disponível
					boxShadow: 3,
          backgroundColor: "rgba(56, 47, 47, 0.5)",
				}}
			>
				<FormControl>
					<TextField
						fullWidth
						label="Nome do Produto"
						name="nome"
						value={form.nome}
						onChange={handleChange}
						required
					/>
				</FormControl>

				<FormControl>
					<TextField
						fullWidth
						label="Descrição"
						name="descricao"
						value={form.descricao}
						onChange={handleChange}
						multiline
						rows={4}
					/>
				</FormControl>

				<FormControl>
					<TextField
						label="Preço"
						name="preco"
						value={form.preco}
						onChange={handleChange}
						type="number"
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<AttachMoney />
									</InputAdornment>
								),
							},
						}}
					/>
				</FormControl>

				<FormControl>
					<InputLabel>Categoria</InputLabel>
					<Select
						label="Categoria"
						name="categoria"
						value={form.categoria}
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value="eletronicos">Eletrônicos</MenuItem>
						<MenuItem value="vestuario">Vestuário</MenuItem>
						<MenuItem value="alimentos">Alimentos</MenuItem>
						<MenuItem value="livros">Livros</MenuItem>
					</Select>
				</FormControl>

				<Button variant="contained" color="primary" onClick={handleSubmit}>
					Cadastrar Produto
				</Button>
			</Box>
		</Box>
	);
}
