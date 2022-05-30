import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<Box>Test</Box>} />
    </Routes>
  );
};

export default App;
