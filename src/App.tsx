import { Box, Typography } from "@mui/material";
import ThemeToggle from "./theme/ThemeToggle";

function App() {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="background.default"
    >
      <ThemeToggle />
      <Typography variant="h1" color="primary">
        Hola
      </Typography>
    </Box>
  );
}

export default App;
