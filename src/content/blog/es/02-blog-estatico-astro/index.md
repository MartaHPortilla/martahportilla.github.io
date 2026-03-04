---
title: "Cómo crear un blog estático con Astro paso a paso"
description: "Guía detallada para la creación de un blog estático mediante Astro, empleando Markdown, generación estática y buenas prácticas de arquitectura web."
date: 2026-02-24
tags: ["Astro", "Blog", "Static Site Generation", "Frontend"]
lang: "es"
draft: true
---

# Cómo crear un blog estático con Astro paso a paso

> En este documento expondremos el procedimiento técnico para construir un blog estático utilizando Astro. Analizaremos el uso de Markdown, la generación estática de sitios y la aplicación de buenas prácticas organizativas.

---

## 1. Justificación del blog estático

La generación de un blog estático implica producir los documentos HTML durante la fase de compilación (*build time*), en contraposición a la generación dinámica por cada petición que realiza el cliente.

Hemos decidido adoptar este enfoque por las siguientes razones técnicas:
- **Rendimiento superior**: Al servir archivos preconstruidos, los tiempos de respuesta del servidor se minimizan.
- **Seguridad incrementada**: La ausencia de una base de datos o lógica de *backend* elimina numerosos vectores de ataque.
- **Simplicidad de despliegue**: Los archivos resultantes pueden alojarse fácilmente en plataformas de distribución estática (como GitHub Pages o Vercel).

Este modelo arquitectónico es conocido en la industria como **Static Site Generation (SSG)**.

🔎 **Bibliografía de referencia:**
- Static Site Generation (Astro Docs): https://docs.astro.build/en/core-concepts/rendering-modes/

---

## 2. Inicialización del proyecto con Astro

Para comenzar la configuración de un nuevo proyecto, empleamos la Interfaz de Línea de Comandos (CLI) oficial que provee Astro:

```bash
npm create astro@latest
```

Durante este proceso interactivo de configuración, el asistente permite definir:
1. La plantilla base inicial.
2. La integración y nivel de uso de TypeScript.
3. La instalación automática de las dependencias requeridas.

Una vez finalizado el asistente, procedemos a iniciar el servidor local de desarrollo:

```bash
npm install
npm run dev
```

El entorno local estará disponible, por defecto, en la dirección `http://localhost:4321`.

🔎 **Bibliografía de referencia:**
- Getting Started (Astro Docs): https://docs.astro.build/en/getting-started/

---

## 3. Arquitectura y estructura de directorios

En la instanciación de un proyecto básico con Astro, encontramos una estructura de directorios con propósitos bien definidos:

- `src/pages/`: Directorio responsable del enrutamiento. Cada archivo generado aquí corresponde a una ruta pública del sitio.
- `src/layouts/`: Componentes estructurales de diseño reutilizables (cabeceras, pies de página, meta-etiquetas compartidas).
- `src/components/`: Componentes de interfaz de usuario funcionales o visuales.
- `src/content/`: Directorio destinado a almacenar el contenido estructurado del sitio (archivos Markdown, MDX, JSON).

El enrutamiento en Astro funciona mediante un sistema basado en archivos (*file-based routing*), simplificando significativamente la creación de nuevas vistas.

🔎 **Bibliografía de referencia:**
- Routing in Astro: https://docs.astro.build/en/core-concepts/routing/

---

## 4. Configuración de colecciones de contenido (Content Collections)

Para la gestión de los artículos del blog, hemos optado por implementar el sistema de **Content Collections**. Esta decisión técnica nos permite:

- Validar estrictamente los metadatos (*frontmatter*) de cada artículo mediante TypeScript y Zod.
- Garantizar la uniformidad estructural en todo el contenido publicado.
- Facilitar la escalabilidad y mantenibilidad del modelo de datos.

A continuación, exponemos la configuración establecida en el archivo `src/content/config.ts`:

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

🔎 **Bibliografía de referencia:**
- Content Collections: https://docs.astro.build/en/guides/content-collections/

---

## 5. Creación de artículos con Markdown

La redacción de los artículos se lleva a cabo dentro del directorio de la colección correspondiente, en nuestro caso `src/content/blog/`. Dado el soporte de internacionalización, dividiremos en los subdirectorios `es/` y `en/`.

El formato estándar para declarar metadatos (*frontmatter*) en Markdown es el siguiente:

```markdown
---
title: "Título estructurado del artículo"
description: "Resumen preciso para la etiqueta meta description."
date: 2026-02-24
tags: ["Astro", "Blog"]
lang: "es"
---

Contenido del artículo formateado en sintaxis Markdown nativa o MDX.
```

🔎 **Bibliografía de referencia:**
- Markdown en Astro: https://docs.astro.build/en/guides/markdown-content/

---

## 6. Generación de rutas dinámicas

Dado que los archivos Markdown no se alojan directamente en `src/pages/`, es indispensable generar una plantilla de ruta dinámica que renderice de forma individual cada artículo de la colección.

Para ello, utilizamos un archivo como `src/pages/[lang]/blog/[...slug].astro` u homólogo. En su interior, invocaremos a la función asíncrona `getStaticPaths()`. Dicha función se ejecuta durante el proceso de compilación (*build*) y retorna las rutas exactas y precisas que Astro debe construir. De este modo, garantizamos que el sitio resultante siga siendo 100% estático.

🔎 **Bibliografía de referencia:**
- getStaticPaths API API Reference: https://docs.astro.build/en/reference/api-reference/#getstaticpaths

---

## 7. Compilación y optimización final

Una vez verificados todos los elementos en el servidor local, procedemos a generar el producto final optimizado para producción mediante el comando:

```bash
npm run build
```

El motor estático procesa todas las rutas, hidrata los componentes requeridos, minifica los recursos y deposita el sitio web resultante en el directorio `/dist`. Estos artefactos finales son los que serán distribuidos en el entorno de alojamiento.

---

## 8. Conclusión

El uso de un generador de sitios estáticos no implica limitar la complejidad funcional de un blog, sino asegurar que dicha complejidad se maneja en tiempo de desarrollo.

Para este portfolio, asentar la base mediante Astro, Content Collections y Markdown nos ha proporcionado una arquitectura determinista, segura y libre de mantenimientos continuos. En el siguiente análisis técnico profundizaremos sobre la configuración de GitHub Actions para lograr el despliegue automático de esta misma infraestructura.