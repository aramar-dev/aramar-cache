---
name: create-themetoggle
description: "Genera el componente ThemeToggle.tsx respetando la identidad MD3 de Aramar Dev y Next.js App Router."
argument-hint: "¿Hay alguna especificación extra para el ThemeToggle (ej. usar heroicons, lucide-react, o tamaño específico)?"
---

# Generación del componente ThemeToggle (Aramar Dev Architect)

Implementa el componente `ThemeToggle` siguiendo estrictamente estas especificaciones técnicas y de diseño.

## Contexto
Vamos a crear el botón de cambio de tema (claro/oscuro) que se integrará en el `Navbar`. El proyecto usa **Next.js App Router**, **Tailwind CSS** y `next-themes` (el cual debe ser compatible, usando la prop `suppressHydrationWarning` en el Layout según las buenas prácticas, y `useTheme` en este componente Client).

## Requisitos de Diseño (Material Design 3 & Identidad Visual)
- **Geometría:** Debe ser un botón circular (`rounded-full`) o con gran redondez (`rounded-2xl`).
- **Estados:** Debe tener estados fluidos de `hover` y `active` (`transition-all duration-300 ease-in-out`, escalado sutil al hacer click `active:scale-90`).
- **Colores:** 
  - **🚫 Cero blanco/negro puro.** 
  - En modo claro: Fondo usando la variable `dev-4` o un gris muy suave (ej. `bg-[#F2F2F2]`), con icono color `dev-1` (`#4E458C`).
  - En modo oscuro: Fondo usando `dev-5` (`#262626`), con icono en un tono claro legible (ej. un gris derivado de `dev-4` adaptado para el contraste).
- **Elevación:** Un sombreado suave al hacer hover (`hover:shadow-md`).

## Requisitos Técnicos
1. **Client Component:** Debe iniciar con `"use client";`.
2. **Hidratación:** Asegúrate de manejar el problema de hidratación de `next-themes` (usando un `useEffect` para montar el estado `mounted`, y retornando un botón "esqueleto" invisible o un `null` durante el Server Side Rendering).
3. **Iconografía:** Usa lógica condicional: si `theme === 'dark'`, muestra un ícono de Sol, de lo contrario un ícono de Luna. (Si el usuario no especifica librería, asume SVGs en línea simples o componentes de `lucide-react` si está disponible).
4. **Accesibilidad (a11y):** El botón DEBE tener `aria-label="Alternar tema de color"` o similar, y un estado de `focus-visible:ring-2 focus-visible:ring-dev-1 focus-visible:ring-offset-2`.

## Estructura de salida esperada
1. Una breve explicación como Arquitecto Senior indicando por qué el componente se estructuró así.
2. El bloque de código con el componente completo (idealmente para ser guardado en `src/components/layout/ThemeToggle.tsx` o `src/components/ui/ThemeToggle.tsx`).

Genera el código ahora considerando las directrices del archivo de instrucciones `md3-components.instructions.md`.
