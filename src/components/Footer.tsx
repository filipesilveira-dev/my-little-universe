import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col-reverse justify-center items-center mx-3 h-15 text-xs text-center font-bold min-[640px]:flex-row min-[640px]:justify-between">
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
