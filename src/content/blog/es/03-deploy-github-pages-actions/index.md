---
title: "Deploy automático con GitHub Pages y GitHub Actions usando Astro"
description: "Documentación técnica sobre el procedimiento de despliegue de un proyecto Astro en GitHub Pages, implementando un flujo de Integración Continua (CI/CD) mediante GitHub Actions."
date: 2026-02-24
tags: ["Astro", "GitHub Pages", "GitHub Actions", "CI/CD"]
lang: "es"
draft: true
---

# Deploy automático con GitHub Pages y GitHub Actions usando Astro

> En este documento detallaremos el procedimiento para configurar el despliegue automático de un proyecto desarrollado en Astro sobre la infraestructura de GitHub Pages. Asimismo, explicaremos la configuración de un flujo de integración continua (CI/CD) haciendo uso de GitHub Actions.

---

## 1. Justificación de la automatización del despliegue

La automatización de las tareas relativas a la publicación o integración continua se fundamenta en las siguientes razones técnicas:

- **Reducción de la intervención manual**: Evitamos procesar localmente el comando corporativo de *build* para enviar subidas inconexas de ficheros.
- **Minimización de errores humanos**: El compilador trabaja en un entorno limpio sin interferir con artefactos arrastrados de versiones anteriores.
- **Sincronización del entorno**: Se garantiza la consistencia íntegra entre el código fuente validado en la rama principal y el estado en producción.

El ecosistema CI/CD (**Continuous Integration / Continuous Deployment**) nos asegura que cada modificación o incremento versionado se someta a compilación y se exponga públicamente en producción sin fricción estructural.

🔎 **Bibliografía de referencia:**
- Documentación de GitHub Actions: https://docs.github.com/en/actions

---

## 2. Requisitos previos y estado inicial base

Antes de configurar la red de automatización, hemos de validar la existencia o idoneidad de los siguientes requerimientos:

- Un código funcional del proyecto de Astro operable en el entorno de desarrollo local.
- Un repositorio inicializado en la plataforma controladora de versiones (GitHub).
- Una rama principal (habitualmente `main` o `master`) que funcione como contenedor único de verdad.

Recordemos que Astro compila el contenido final en la carpeta estática `/dist` tras la ordenación por consola:

```bash
npm run build
```

🔎 **Bibliografía de referencia:**
- CLI Reference (Astro Build): https://docs.astro.build/en/reference/cli-reference/#astro-build

---

## 3. Configuración del empaquetado para GitHub Pages

En el caso puntual donde nuestro repositorio difiera del formato global generalizado (como por ejemplo si no es del tipo `usuario.github.io`), resulta imprescindible indicar el fragmento del repositorio base para encauzar exitosamente los ficheros CSS, JS o imágenes relativas. 

En el fichero de instrumentación `astro.config.mjs`, introducimos los parámetros correspondientes:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://usuario.github.io",
  base: "/nombre-del-repositorio/"
});
```

Este reajuste previene los problemas habituales del *Routing* e inyección de dependencias erróneas tras alojarse en un subdirectorio.

🔎 **Bibliografía de referencia:**
- Configuración fundamental Astro: https://docs.astro.build/en/reference/configuration-reference/

---

## 4. Inicializar GitHub Pages en las directrices de entorno

Para ordenar al repositorio la vinculación del despliegue:

1. Nos dirigimos al panel visual de **Settings** del propio depósito.
2. Exploramos la pestaña categorizada como **Pages**.
3. En el bloque titular de *Build and deployment*, indicamos como fuente principal de **Source** la opción de **GitHub Actions**.

Se dictamina mediante estos pasos que será un *workflow* automatizado quien delegue la generación del directorio base en la plataforma virtual, en contraposición al despliegue estático convencional operado desde la carpeta subida.

🔎 **Bibliografía de referencia:**
- GitHub Pages Docs: https://docs.github.com/en/pages

---

## 5. Implementación del Workflow de Actions

Hemos de ubicar estratégicamente dentro de la carpeta oculta de versionado `.github/workflows` un nuevo archivo descriptivo en el que explicitaremos las capas procedimentales automatizadas. 

Nominalmente empleamos el archivo `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Source
        uses: actions/checkout@v4

      - name: Setup Node Platform
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install Dependencies
        run: npm install

      - name: Compile Distribution
        run: npm run build

      - name: Setup Pages Configuration
        uses: actions/configure-pages@v4

      - name: Upload Build Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deployment Execute
        id: deployment
        uses: actions/deploy-pages@v4
```

Con una inspección detallada, el fichero declara:
- Su interceptación tras el evento asíncrono `push` realizado específicamente hacia la rama `main`.
- La instanciación de un servidor Linux virtual.
- La sucesiva ejecución en línea de la descarga, compilación e inyección formal del contenido estático resultante al enrutador nativo de la interfaz Pages.

🔎 **Bibliografía de referencia:**
- Despliegue oficial Pages con Actions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-github-actions-for-github-pages

---

## 6. Monitoreo y Verificación Técnica

Finalizadas todas las estipulaciones expuestas y realizando el primer *commit* sincronizado con la rampa de subida, podemos supervisar los procesos telemáticos desde el tab **Actions** provisto dentro del repositorio gráfico.

Si no emergen excepciones programáticas que invaliden el flujo CI/CD, este culminará indicando satisfactoriamente el éxito de empaquetado y subida final.

En conclusión, asentar esta directriz no representa de por sí un mecanismo de comodidad, sino una sólida política preventiva ante el manejo deficiente en la publicación de código web profesional, blindando formalmente todo el espectro de integración productiva.