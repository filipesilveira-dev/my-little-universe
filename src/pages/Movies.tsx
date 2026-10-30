import { useLanguage } from "../hooks/useLanguage";

export default function Movies() {
  const { t } = useLanguage();
  return (
    <section>
      <h1>{t.movies.title}</h1>
      <p>{t.movies.paragraph}</p>
    </section>
  );
}
