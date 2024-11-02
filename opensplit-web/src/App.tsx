import { useState } from "react";

import Homepage from "@/app/Homepage";
import { Box, Container } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Box
      style={{ background: "var(--red)" }}
      minHeight={"100vh"}
      minWidth={"100vw"}
    >
      <Homepage></Homepage>
    </Box>
  );
}

export default App;
