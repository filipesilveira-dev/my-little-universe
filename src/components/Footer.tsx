import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <section className="flex flex-rol justify-between items-center m-1 p-2 gap-3 text-sm font-bold sm:text-base">
      <div>© 2026 My Little Universe. {t.footer.rights}</div>
      <div className="flex flex-rol justify-center items-center gap-3">
        <span>{t.footer.cinema}</span>
        <span className="rounded-full bg-(--text) h-1 w-1"></span>
        <span>{t.footer.series}</span>
        <span className="rounded-full bg-(--text) h-1 w-1"></span>
        <span>{t.footer.music}</span>
      </div>
    </section>
  );
}
