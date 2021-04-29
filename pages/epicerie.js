import { Box, Container, Typography } from "@material-ui/core";
import Header from "../src/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container disableGutters>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Épicerie
          </Typography>
        </Box>
      </Container>
    </>
  );
}
