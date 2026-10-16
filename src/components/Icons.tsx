// src/components/Icons.tsx
import { Search, Menu, Sun, Moon } from "lucide-react";
import type { LucideProps } from "lucide-react";

// Criamos um tipo para que o TypeScript entenda que nossos ícones aceitam classes do Tailwind
type IconProps = LucideProps;

// 🔍 Ícone de Lupa (Pesquisa)
export function SearchIcon({ className, ...props }: IconProps) {
  return <Search className={className} strokeWidth={1.5} {...props} />;
}

// Ícone de Menu Hambúrguer
export function MenuIcon({ className, ...props }: IconProps) {
  return <Menu className={className} strokeWidth={1.5} {...props} />;
}

// Ícone do Sol (Modo Claro)
export function SunIcon({ className, ...props }: IconProps) {
  return <Sun className={className} strokeWidth={1.5} {...props} />;
}

// Ícone da Lua (Modo Escuro)
export function MoonIcon({ className, ...props }: IconProps) {
  return <Moon className={className} strokeWidth={1.5} {...props} />;
}
