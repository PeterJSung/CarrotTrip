import { Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path='/' element={<div>This page is Lending Page with / path!</div>} />
    </Routes>
  );
};

export default App;
