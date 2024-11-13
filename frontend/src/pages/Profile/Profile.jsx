import { Box, Avatar, Typography, Button, TextField, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

function Profile() {
  const theme = useTheme();

  // Dados do usuário e postagens de exemplo
  const [user, setUser] = useState({
    name: "Nome do Usuário",
    username: "@username",
    bio: "Descrição breve ou biografia do usuário.",
    avatar: "/path/to/user/avatar.jpg"
  });

  const [posts, setPosts] = useState([
    { id: 1, content: "Esta é a minha primeira postagem!", date: "1 de janeiro de 2024" },
    { id: 2, content: "Estou gostando dessa rede social.", date: "2 de janeiro de 2024" },
    { id: 3, content: "O que vocês acham desse novo design?", date: "3 de janeiro de 2024" }
  ]);

  const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre visualização e edição
  const [editedUser, setEditedUser] = useState({ ...user }); // Estado para armazenar as edições

  // Função para salvar as edições
  const handleSave = () => {
    setUser(editedUser); // Salva as alterações no perfil
    setIsEditing(false); // Sai do modo de edição
  };

  // Função para cancelar a edição
  const handleCancel = () => {
    setEditedUser({ ...user }); // Reseta as edições
    setIsEditing(false); // Sai do modo de edição
  };

  return (
    <Box
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
    >
      {/* Seção do cabeçalho do perfil do usuário */}
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        width="100%" 
        maxWidth={600} 
        mb={4} 
        p={2} 
        bgcolor={theme.palette.background.paper} 
        borderRadius={2} 
        boxShadow={theme.shadows[2]}
      >
        <Avatar 
          alt={user.name} 
          src={user.avatar} 
          sx={{ width: 120, height: 120, mb: 2 }}
        />

        {isEditing ? (
          // Formulário de Edição
          <>
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editedUser.name}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
            />
            <TextField
              label="Nome de Usuário"
              variant="outlined"
              fullWidth
              margin="normal"
              value={editedUser.username}
              onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
            />
            <TextField
              label="Biografia"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              minRows={3}
              value={editedUser.bio}
              onChange={(e) => setEditedUser({ ...editedUser, bio: e.target.value })}
            />
            
            {/* Botões de Salvar e Cancelar */}
            <Box display="flex" gap={2} mt={2}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Salvar
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel}>
                Cancelar
              </Button>
            </Box>
          </>
        ) : (
          // Visualização das Informações
          <>
            <Typography variant="h5" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" mb={1}>
              {user.username}
            </Typography>
            <Typography variant="body1" align="center" mb={2}>
              {user.bio}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => setIsEditing(true)}>
              Editar Perfil
            </Button>
          </>
        )}
      </Box>

      {/* Seção das postagens do usuário */}
      <Box 
        width="100%" 
        maxWidth={600} 
        display="flex" 
        flexDirection="column" 
        gap={2}
      >
        {posts.map((post) => (
          <Card key={post.id} sx={{ bgcolor: theme.palette.background.paper }}>
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="body1" mt={1}>
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Profile;
