import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Music() {
  const { t } = useLanguage();
  return (
    <section>
      <Link to="/">
      <ArrowLeft/><span>Voltar</span>
      </Link>
      <h1>{t.music.title}</h1>
      <p>{t.music.paragraph}</p>
    </section>
  );
}