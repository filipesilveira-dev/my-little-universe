// useTheme.ts
import { useEffect, useState } from "react";

// Tipagem
type Theme = "light" | "dark";

// Função que reconhece o tema escolhido pelo usuário inicialemente. Ela é utilizada dentro do custom hook
function getInitialTheme(): Theme {

  // Recebe o que está no localStorage na chave "theme"
  const saved = localStorage.getItem("theme");

  // Se o valor de "saved" for válido, então retorne "saved"
  if (saved === "light" || saved === "dark") return saved;

  // Caso não haja um tema previamente salvo, será utilizada a preferência salva no sistema operacional
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Motivos para se iniciar com "getInitialTheme"
// 1. O terrível efeito "Pisca-Pisca" (Flash of Unstyled Content): primeiro acesso como "light" geraria efeito pisca-pisca (evitável iniciando com "dark". Ainda psiscaria, mas não projetando luz nos olhos inadvertidamente)
// 2. Memória entre acessos (Fidelidade do Usuário): ao sair
// 3. Acessibilidade e Integração com o Sistema: quase todos os sistemas têm automação para alterarna de tema a depender do horário

export function useTheme() {
  // Tema atual inicial com o Lazy Initial State: a referência da função é passada sem os "()". O React entende que, por se trtatar de uma função, ela será executada apenas na primeira vez que o componente for inicializado, caso contrário, ela seria executada sempre que o componente fosse renderizado.
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Injeta o tema atual diretamente na tag raiz do HTML (<html data-theme='dark'>)
    document.documentElement.setAttribute("data-theme", theme);
    // Salva o novo tema escolhido no navegador
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Arrow function que alterna os temas
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  // Retorna um objeto contendo o tema atual 'theme' e a função de alternar 'toggleTheme'
  return { theme, toggleTheme };
}