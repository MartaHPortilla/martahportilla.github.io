---
title: "Qué es Astro y por qué lo elegí para mi portfolio"
description: "Qué es Astro, cómo funciona su arquitectura basada en islas y por qué lo elegí para crear un portfolio rápido, estático y optimizado para SEO."
date: 2026-02-24
tags: ["Astro", "Frontend", "Web Performance", "SEO"]
lang: "es"
---

# Qué es Astro y por qué lo elegí para mi portfolio

> En este artículo explico qué es Astro, qué problema resuelve en el desarrollo web moderno y por qué lo he elegido para construir este portfolio.

---

## ¿Qué es Astro?

Astro es un framework moderno orientado a la creación de sitios web centrados en contenido.

- Genera HTML estático por defecto.
- Permite integrar componentes de React, Vue o Svelte si es necesario.
- Prioriza el rendimiento.
- Reduce el envío innecesario de JavaScript al navegador.

Astro se basa en el concepto de **Static Site Generation (SSG)** y adopta un enfoque llamado **Islands Architecture**.

🔎 Fuentes oficiales consultadas:

- Documentación oficial de Astro  
  https://docs.astro.build/en/getting-started/

- Página oficial  
  https://astro.build

- Concepto de Islands Architecture  
  https://docs.astro.build/en/concepts/islands/

---

## ¿Qué problema resuelve Astro?

Muchos frameworks modernos generan aplicaciones SPA (Single Page Application).  
Este enfoque es ideal para aplicaciones complejas, pero puede implicar:

- Mayor envío de JavaScript al navegador.
- Más tiempo de carga inicial.
- Impacto en rendimiento y métricas como Core Web Vitals.

Astro propone un enfoque diferente: enviar HTML estático siempre que sea posible y cargar JavaScript solo cuando es necesario.

🔎 Fuentes oficiales consultadas:

- Core Web Vitals (Google)  
  https://web.dev/vitals/

- Documentación oficial de React  
  https://react.dev

---

## Qué es Islands Architecture

La Islands Architecture consiste en:

- Renderizar el contenido principal como HTML estático.
- Hidratar únicamente los componentes interactivos.
- Cargar JavaScript de forma aislada y bajo demanda.

Esto permite mantener páginas rápidas sin renunciar a interactividad puntual.

El concepto fue popularizado por Jason Miller, ingeniero de Google.

🔎 Fuentes oficiales consultadas:

- Documentación oficial de Astro  
  https://docs.astro.build/en/concepts/islands/

- Artículo original de Jason Miller  
  https://jasonformat.com/islands-architecture/

---

## Astro vs SPA tradicionales

Sin desmerecer frameworks como React, cada tecnología tiene su contexto ideal.

| SPA tradicional | Astro |
|----------------|--------|
| Renderizado principalmente en cliente | HTML generado por defecto |
| Más JavaScript enviado | JavaScript solo cuando es necesario |
| Ideal para aplicaciones complejas | Ideal para sitios de contenido |

Para un portfolio personal, donde el contenido es prioritario, el enfoque de Astro resulta especialmente adecuado.

🔎 Fuente oficial:

- Rendering Modes en Astro  
  https://docs.astro.build/en/core-concepts/rendering-modes/

---

## Por qué elegí Astro para mi portfolio

Elegí Astro por varias razones:

- Quería aprender desarrollo web moderno desde la base.
- Buscaba un enfoque minimalista.
- Me interesaba entender mejor la arquitectura frontend.
- Necesitaba buen rendimiento desde el inicio.
- Se integra fácilmente con GitHub Pages para despliegue sencillo.

🔎 Fuente oficial:

- GitHub Pages Documentation  
  https://docs.github.com/en/pages

---

## SEO y rendimiento

Un sitio generado como HTML estático facilita:

- Indexación por motores de búsqueda.
- Mejores tiempos de carga.
- Buenas métricas en herramientas como Lighthouse.

Para medir rendimiento utilizo Lighthouse, herramienta oficial de auditoría de Google integrada en Chrome.

🔎 Fuente oficial:

- Lighthouse  
  https://developer.chrome.com/docs/lighthouse/

---

## Conclusión

Elegir una tecnología no significa usar la más popular, sino la más adecuada para el contexto.

Para un portfolio centrado en contenido, rendimiento y claridad estructural, Astro encaja perfectamente.

En próximos artículos explicaré cómo lo he configurado y desplegado paso a paso.