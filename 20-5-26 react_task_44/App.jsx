import { Container, Stack } from "@mui/material";
import LoginForm from "./LoginForm";
import ProductCard from "./ProductCard";

function App() {
  return (
    <Container sx={{ mt: 5 }}>

      <Stack
        spacing={5}
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <LoginForm />
        <ProductCard />
      </Stack>

    </Container>
  );
}

export default App;