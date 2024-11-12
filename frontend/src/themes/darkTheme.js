import { deepPurple, lightBlue } from "@mui/material/colors";

export default {
  palette: {
    mode: 'dark',
    primary: deepPurple,
    secondary: lightBlue,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Para o botão 'contained'
          '&.MuiButton-contained': {
            backgroundColor: deepPurple[500],
            color: 'white',
            '&:hover': {
              backgroundColor: deepPurple[700],
            },
          },
          // Para o botão 'outlined'
          '&.MuiButton-outlined': {
            borderColor: deepPurple[500],  // Cor da borda
            color: deepPurple[500],  // Cor do texto
            '&:hover': {
              borderColor: deepPurple[700],  // Hover da borda
              color: deepPurple[700],  // Cor do texto no hover
            },
          },
        },
      },
    },
  },
};