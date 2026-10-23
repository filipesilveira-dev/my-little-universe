// Responsabilidade: controle de rotas
import Home from "./pages/Home";
import Series from "./pages/Series";
import Music from "./pages/Music";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-(--bg) sm:w-[80%]  mx-auto">
      <Header />

      {/* Estabelece as rotas com base na URL: renderiza a página de acordo com a URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/music" element={<Music />} />

        {/* Página curinga para rotas inexistentes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
