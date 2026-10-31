import { useLanguage } from "../hooks/useLanguage";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Series() {
  const { t } = useLanguage();
  return (
    <section>
      <Link to="/">
      <ArrowLeft/><span>Voltar</span>
      </Link>
      <h1>{t.series.title}</h1>
      <p>{t.series.paragraph}</p>
    </section>
  );
}