import {
  Button,
  Container,
  Grid,
  Heading,
  Quote,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";

function Homepage() {
  const [count, setCount] = useState(0);

  return (
    <Container align={"center"}>
      <Heading align={"center"}>OpenSplit</Heading>
      <Heading align={"center"}>
        <Quote>Splitting made open and easy</Quote>
      </Heading>
      <Grid columns="1">
        <TextField.Root placeholder="Access Code"></TextField.Root>
        <Button>View Exisiting</Button>
        <Button>Create new</Button>
      </Grid>
    </Container>
  );
}

export default Homepage;
