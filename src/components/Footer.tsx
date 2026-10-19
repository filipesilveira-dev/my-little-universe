export default function Footer() {
  return (
    <section className="flex flex-rol justify-between items-center m-1 p-2 gap-3 text-sm sm:text-base">
      <div>© 2026 My Little Universe. Todos os direitos reservados</div>
      <div className="flex flex-rol justify-center items-center gap-3">
        <span>Cinema</span>
        <span className="rounded-full bg-(--text) h-1 w-1"></span>
        <span>Séries</span>
        <span className="rounded-full bg-(--text) h-1 w-1"></span>
        <span>Música</span>
      </div>
    </section>
  );
}
