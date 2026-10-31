import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Movies() {
  const { t } = useLanguage();
  return (
    <section>
      <Link to="/">
      <ArrowLeft/><span>Voltar</span>
      </Link>
      <h1>{t.movies.title}</h1>
      <p>{t.movies.paragraph}</p>
    </section>
  );
}
