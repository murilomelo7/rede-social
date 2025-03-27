import { useState } from "react";
import { Add, ArrowBack, AttachMoney, Search, Save } from "@mui/icons-material";
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
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CategoriaForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
  });

  const handleBack = () => {
    navigate(-1); // Navega para a última página
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Categoria cadastrado:", form);
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
          Nova categoria
        </Typography>
        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            sx={{ color: "white", fontWeight: "bold" }}
            startIcon={<Save sx={{ color: "white" }} />}
            title="Salvar"
          >
            Salvar
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 3,
          height: "100%",
          width: "100%",
          boxShadow: 3,
        }}
      >
        <FormControl>
          <TextField
            fullWidth
            label="Nome da categoria"
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
      </Box>
    </Box>
  );
}
