"use client";

import React, { createContext, useContext, useRef, useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

type PageTransitionContextType = {
    startTransition: (href: string) => void;
};

const PageTransitionContext = createContext<PageTransitionContextType | null>(
    null
);

export function usePageTransition() {
    const ctx = useContext(PageTransitionContext);
    if (!ctx) {
        throw new Error("usePageTransition must be used inside PageTransitionProvider");
    }
    return ctx;
}

export default function PageTransitionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const firstRenderRef = useRef(true);

    // FECHAR cortina depois que a rota mudou
    useLayoutEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }

        const overlay = overlayRef.current;
        if (!overlay) return;

        gsap.fromTo(
            overlay,
            { scaleY: 1 },
            {
                scaleY: 0,
                duration: 0.45,
                delay: 0.4,
                ease: "power2.inOut",
            }
        );
    }, [pathname]);

    // ABRIR cortina antes de trocar de página
    function startTransition(href: string) {
        const overlay = overlayRef.current;
        if (!overlay) return;

        // ❌ Se já estamos nessa rota, não faz nada
        if (href === pathname) return;

        gsap.fromTo(
            overlay,
            { scaleY: 0 },
            {
                scaleY: 1,
                duration: 0.45,
                ease: "power2.inOut",
                onComplete: () => {
                    router.push(href);
                },
            }
        );
    }

    return (
        <PageTransitionContext.Provider value={{ startTransition }}>
            <div ref={overlayRef} className="page-transition-overlay" />
            {children}
        </PageTransitionContext.Provider>
    );
}
