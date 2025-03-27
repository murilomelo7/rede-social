import { deepPurple, lightBlue, green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Definindo o tema como 'escuro'
    primary: deepPurple, // Cor primária
    secondary: lightBlue, // Cor secundária
    success: green, // Cor de sucesso
    error: red, // Cor de erro
    background: {
      default: "#121212", // Fundo escuro para o tema
      paper: "#1d1d1d", // Cor de fundo dos papéis (como caixas e formulários)
    },
    text: {
      primary: "#fff", // Cor do texto primário (branco para tema escuro)
      secondary: "#b0b0b0", // Cor do texto secundário (cinza claro)
    },
  },
  typography: {
    fontFamily: "sans-serif", // Fonte para o tema
    h1: {
      fontWeight: 600, // Exemplo de personalização de título
    },
    h2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
  },
  components: {
    // Customização do MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          // Estilos gerais para o botão
          fontWeight: 600,
        },
        contained: {
          backgroundColor: deepPurple[500], // Cor do fundo do botão 'contained'
          color: "white", // Cor do texto
          "&:hover": {
            backgroundColor: deepPurple[700], // Hover do botão 'contained'
          },
        },
        outlined: {
          borderColor: deepPurple[500], // Cor da borda do botão 'outlined'
          color: deepPurple[500], // Cor do texto do botão 'outlined'
          "&:hover": {
            borderColor: deepPurple[700], // Hover da borda
            color: deepPurple[700], // Cor do texto no hover
          },
        },
      },
    },
    // Customização do MuiTextField
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#333", // Cor de fundo do campo de texto
            borderRadius: "4px", // Bordas arredondadas
          },
        },
      },
    },
  },
});

export default theme;
