import { Box, TextField, Button, Typography } from "@mui/material";

function LoginForm() {
  return (
    <Box
      sx={{
        width: 350,
        mx: "auto",
        mt: 5,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" mb={3}>
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
      />

      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;