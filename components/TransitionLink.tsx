"use client";

import React from "react";
import { usePageTransition } from "./PageTransitionProvider";
import { usePathname } from "next/navigation";

// mesma função de normalização usada no Provider
function normalizePath(path: string): string {
  if (!path || path === "") return "/";

  try {
    const url = new URL(path, "http://dummy");
    path = url.pathname;
  } catch {
    // se não for URL completa, segue o path do jeito que veio
  }

  if (path !== "/" && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  return path || "/";
}

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
  activeClassName,
}: TransitionLinkProps) {
  const { startTransition } = usePageTransition();
  const pathname = usePathname();

  const current = normalizePath(pathname);
  const target = normalizePath(href);
  const isActive = current === target;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isActive) {
      // já está na rota → não navega e não anima
      e.preventDefault();
      return;
    }

    e.preventDefault();
    startTransition(href);
  }

  const finalClassName = [
    className,
    isActive && activeClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      onClick={handleClick}
      className={finalClassName}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </a>
  );
}
