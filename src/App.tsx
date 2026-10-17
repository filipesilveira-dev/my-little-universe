// Responsabilidade: controle de rotas
import Home from "./pages/Home";
import Series from "./pages/Series";
import Music from "./pages/Music";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // Estabelece as rotas com base na URL: renderiza a página de acordo com a URL
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/music" element={<Music />} />

      {/* Página curinga para rotas inexistentes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
