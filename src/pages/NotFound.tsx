import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section>
      <Link to="/">
      <ArrowLeft/><span>Voltar</span>
      </Link>
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não corresponde a uma página disponível.</p>
    </section>
  )
}