---
name: "Aramar MD3 Components"
description: "Use when creating, editing, or reviewing React/Next.js UI components. Enforces Material Design 3 (MD3), Mobile-First architecture, and accessibility (a11y) standards for Aramar Dev."
applyTo: "**/src/components/**/*.tsx"
---

# Aramar Dev - MD3 Component Guidelines

Estas reglas son obligatorias al trabajar con componentes de interfaz de usuario (UI) en el directorio `src/components/` o al generar componentes de interfaz nuevos para el proyecto.

## 1. Filosofía Mobile-First
- **Regla de Oro:** Siempre inicia definiendo las clases base de Tailwind CSS para pantallas móviles.
- Utiliza los modificadores responsivos (`sm:`, `md:`, `lg:`, `xl:`) **únicamente** para sobrescribir o adaptar el diseño en pantallas más grandes.
- **Evita** construir el escritorio primero y tratar de encogerlo hacia el móvil.

## 2. Estética Material Design 3 (MD3)
Los componentes deben transmitir la sensación moderna, táctil e intuitiva de MD3:
- **Bordes redondeados:** Utiliza `rounded-lg`, `rounded-xl`, `rounded-2xl` o `rounded-full`. Los componentes modernos rara vez tienen esquinas de 90 grados.
- **Elevación y Profundidad:** Aplica `shadow-sm`, `shadow-md` o `shadow-lg` para destacar elementos superpuestos (como tarjetas, diálogos o navbars).
- **Interacción Fluida:** Todos los botones, enlaces y elementos accionables deben tener:
  - Estados claros: `hover:` y `active:`.
  - Transiciones suaves: `transition-all duration-200 ease-in-out`.
  - Efectos sutiles como `active:scale-95` o `hover:shadow-md` para brindar feedback táctil.
- **Respiración (Padding):** MD3 es espacioso. Usa paddings generosos (`p-4`, `px-6 py-3`).

## 3. Restricciones de Color y Paleta "dev"
- 🚫 **PROHIBIDO:** Usar negro puro (`#000000`, `bg-black`, `text-black`) o blanco puro (`#FFFFFF`, `bg-white`, `text-white`).
- ✅ **Sustitutos Correctos:**
  - En lugar de blanco: Usa el fondo claro base `dev-4` (`#F2F2F2` o su equivalente configurado en Tailwind ej. `bg-dev-4`).
  - En lugar de negro: Usa el fondo oscuro base `dev-5` (`#262626` o equivalente).
- **Acentos:** Para elementos principales o llamadas a la acción, prioriza `dev-1` (`#4E458C`), `dev-2` (`#494373`) y `dev-3` (`#403C59`).

## 4. Accesibilidad Total (a11y) y Semántica
- **Semántica HTML5:** Nunca uses un `<div onClick={...}>`. Si es clickeable, debe ser un `<button type="button">` o un `<a>`. Usa etiquetas estructurales como `<section>`, `<article>`, `<aside>`, `<nav>`, `<header>` y `<footer>`.
- **Navegación por teclado (Focus):** Los usuarios deben poder tabular por la interfaz visualmente. Implementa estados de foco visibles que no rompan el diseño: 
  - Ejemplo recomendado: `focus:outline-none focus-visible:ring-2 focus-visible:ring-dev-1 focus-visible:ring-offset-2`.
- **Atributos ARIA (Accessible Rich Internet Applications):**
  - Si un botón es solo un icono, **DEBE** tener `aria-label`.
  - Modales, menús y acordeones deben usar `aria-expanded`, `aria-hidden` y/o `aria-controls` de manera reactiva al estado.
  - Toda imagen (`<Image />` o `<img>`) debe llevar un atributo `alt` descriptivo (o vacío `alt=""` si es meramente decorativa).
