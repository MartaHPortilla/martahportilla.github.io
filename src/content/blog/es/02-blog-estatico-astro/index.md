---
title: "Cómo crear un blog estático con Astro paso a paso"
description: "Guía detallada para la creación de un blog estático mediante Astro, empleando Markdown, generación estática y buenas prácticas de arquitectura web."
date: 2026-02-24
tags: ["Astro", "Blog", "Static Site Generation", "Frontend"]
lang: "es"
draft: true
---

> *El otro día estaba releyendo algunos de mis artículos antiguos y me invadió una extraña nostalgia por la solidez del papel. En la web, todo parece efímero, casi líquido; una maraña de peticiones y bases de datos que pueden desmoronarse al menor suspiro del servidor. Por eso, al plantearme este portfolio, buscaba precisamente lo contrario: una arquitectura que se sintiere casi tallada en piedra, pero que fluyera con la ligereza del viento digital.*

¿Cómo se consigue esa paradoja de solidez y velocidad? No fue una resolución inmediata, sino el fruto de una averiguación pragmática que me llevó a la generación estática. En estas líneas quiero desgranar, paso a paso, cómo edifiqué este blog utilizando Astro, convirtiendo esa nostalgia por lo perdurable en una decisión técnica sofisticada.

## El pilar de lo estático: ¿Por qué SSG?

La generación de un blog estático —o **Static Site Generation (SSG)**— implica producir los documentos HTML durante la fase de compilación (*build time*). A diferencia de las webs dinámicas tradicionales, aquí no hay esperas mientras un servidor interroga a una base de datos; todo está ya listo para ser servido.

Hemos decidido adoptar este enfoque por razones de peso que considero irrefutables para un proyecto de este tipo:

- **Rendimiento superior**: Al servir archivos preconstruidos, los tiempos de respuesta del servidor se minimizan drásticamente. Astro es, en su esencia, una herramienta diseñada para la velocidad.
- **Seguridad incrementada**: Al eludir el uso de bases de datos o lógica de *backend* compleja en tiempo real, eliminamos de un plumazo la mayoría de los vectores de ataque habituales.
- **Simplicidad de despliegue**: Los artefactos resultantes pueden alojarse con una facilidad pasmosa en plataformas de distribución estática como GitHub Pages.

## Inicialización: El lienzo en blanco

Para superar aquel "pavor al lienzo vacío" del que hablaba en mi anterior post, Astro nos proporciona una Interfaz de Línea de Comandos (CLI) sumamente ágil. El proceso comienza con un simple comando:

```bash
npm create astro@latest
```

Durante esta fase, el asistente nos permite elegir una base sólida sobre la que construir. Tras configurar TypeScript y las dependencias, ya podemos invocar nuestro entorno local:

```bash
npm install
npm run dev
```

Con el servidor activo en `http://localhost:4321`, ya tenemos nuestro andamiaje listo para empezar a "escribir" la estructura.

## Arquitectura: El mapa de nuestra biblioteca

En Astro, la organización no es opcional, es intrínseca al sistema. La estructura de directorios sigue una convención clara que facilita la escalabilidad:

- `src/pages/`: Donde reside el corazón de nuestro enrutamiento. Cada archivo es una puerta de entrada para el usuario.
- `src/layouts/`: Los componentes estructurales que garantizan la coherencia visual (mi "papel" y mis "márgenes" digitales).
- `src/components/`: Piezas de interfaz reutilizables, nuestras islas de interactividad.
- `src/content/`: El depósito sagrado de nuestros textos, donde almacenamos el contenido en Markdown o MDX.

## Content Collections: La disciplina de los metadatos

Para que un blog funcione con la precisión de una redacción periodística, el contenido debe estar perfectamente estructurado. Aquí es donde entran las **Content Collections**. Esta herramienta nos permite validar los metadatos (*frontmatter*) de cada artículo con un rigor casi académico.

Definimos nuestra colección en `src/content/config.ts` para asegurar que ningún post salga a la luz sin su fecha, su título o su descripción correcta:

```typescript
import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      lang: z.enum(["es", "en"]),
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).optional()
    })
  })
};
```

## El arte de escribir con Markdown

La redacción de los artículos se realiza de forma orgánica en archivos `.md` dentro de `src/content/blog/`. Gracias a la capacidad de i18n de Astro, organizamos nuestros textos en subdirectorios `es/` y `en/`, garantizando una gestión bilingüe fluida.

Cada archivo comienza con su cabecera de metadatos, el pistoletazo de salida para el motor de Astro:

```markdown
---
title: "Título de entrada impactante"
description: "Un resumen que incite a la lectura y ayude al SEO."
date: 2026-03-04
tags: ["Astro", "Desarrollo"]
lang: "es"
---
```

## Rutas dinámicas: Distribuyendo el contenido

Dado que nuestros artículos no están en la carpeta `pages`, necesitamos una plantilla que actúe como un distribuidor automático. En Astro, esto se solventa mediante rutas dinámicas (como `src/pages/[lang]/blog/[...slug].astro`) y la función asíncrona `getStaticPaths()`.

Esta función se encarga de instanciar cada una de las rutas durante la compilación, asegurándose de que cada "isla" de contenido tenga su lugar exacto en el mapa del sitio antes de que el usuario llegue siquiera a visitarlo.

## Concluyendo: Tallando en digital

Una vez verificado todo, el paso final es la consolidación de nuestro trabajo:

```bash
npm run build
```

Este comando es el que realmente "talla la piedra". Procesa las rutas, optimiza los recursos y deposita el sitio web final en el directorio `/dist`, listo para ser servido al mundo con una rapidez irrefutable.

En la próxima entrega, desgranaremos cómo automatizar todo este proceso para que, cada vez que termine de escribir una nueva aventura, el mundo pueda leerla de forma inmediata.