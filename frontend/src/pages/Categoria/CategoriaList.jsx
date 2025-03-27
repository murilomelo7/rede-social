import { Add, ArrowBack, Search } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoriaList() {
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
    navigate("/categorias/new");
  };

  const handleBack = () => {
    navigate(-1); // Navega para a última página
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Alinha os itens ao topo
        backgroundColor: "background.paper", // Cor de fundo um pouco mais clara que o default
        width: "100%", // Para garantir que ocupe toda a largura
        height: "100%",
        borderRadius: 2, // Bordas arredondadas
        boxShadow: 3, // Sombras para dar um efeito de elevação
        border: "1px solid", // Define a borda
        borderColor: "primary.main", // Usa a cor do tema corretamente
      }}
    >
      {/* Título e Botões */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        <IconButton onClick={handleBack} sx={{ marginRight: "16px" }}>
          <ArrowBack />
        </IconButton>
        <Typography sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Categorias
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
          display: "flex",
          flexDirection: "column",
          gap: 2,
          //   p: 3,
          height: "100%",
          width: "100%",
          boxShadow: 3,
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
