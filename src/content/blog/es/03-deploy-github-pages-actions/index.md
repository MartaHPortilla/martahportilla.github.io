---
title: "Deploy automático con GitHub Pages y GitHub Actions usando Astro"
description: "Documentación técnica sobre el procedimiento de despliegue de un proyecto Astro en GitHub Pages, implementando un flujo de Integración Continua (CI/CD) mediante GitHub Actions."
date: 2026-02-24
tags: ["Astro", "GitHub Pages", "GitHub Actions", "CI/CD"]
lang: "es"
draft: true
---



> *El otro día estaba observando cómo se actualizaba mi portfolio tras un simple comando y no pude evitar pensar en la magia invisible que ocurre tras las bambalinas del código. Hubo un tiempo en el que publicar una web era un ritual casi artesanal: arrastrar archivos por FTP, cruzar los dedos y esperar que nada se rompiera en el camino. Hoy, esa labor recae en manos invisibles que trabajan con una precisión matemática mientras yo me dedico a lo que realmente importa: crear.*

Esa "magia" no es otra cosa que la soberanía técnica que nos otorga la automatización. En esta entrega, quiero desgranar cómo he configurado los engranajes de GitHub Actions para que mi portfolio en Astro se despliegue de forma autónoma, transformando un proceso tedioso en un flujo de trabajo elegante y profesional.

## La filosofía CI/CD: Automatizar para liberar

La automatización del despliegue se asienta sobre los pilares de la Integración Continua y el Despliegue Continuo (CI/CD). Es, en esencia, contratar a un asistente robótico que se encarga de las tareas repetitivas por nosotros:

- **Reducción de la fricción**: Olvidamos el comando de *build* local para subir archivos manualmente. El robot lo hace en un entorno limpio cada vez.
- **Blindaje contra errores**: Al compilar en un servidor externo (GitHub), nos aseguramos de que el código es robusto y no depende de "vicios" o configuraciones de nuestra máquina local.
- **Sincronización total**: La rama principal (`main`) se convierte en la única fuente de verdad. Lo que ves en el código es, de forma irrefutable, lo que hay en producción.

## Preparando el terreno en GitHub Pages

Antes de soltar a los robots, debemos indicar a GitHub dónde y cómo queremos que se muestre nuestra obra. Para este portfolio, el proceso es sumamente pragmático:

1. En los **Settings** del repositorio, navegamos hasta la sección de **Pages**.
2. Bajo el epígrafe de *Build and deployment*, cambiamos la fuente (*Source*) a **GitHub Actions**.

Con este simple gesto, le estamos diciendo a la plataforma: "No busques archivos estáticos aquí, espera a que mis Actions te entreguen el paquete listo para servir".

## Los engranajes: El flujo de trabajo (Workflow)

Para que la magia suceda, necesitamos un mapa de instrucciones. Este mapa reside en `.github/workflows/deploy.yml`. Es aquí donde definimos cada paso del rito de iniciación de nuestro código:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main] # Se activa con cada push a main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Este archivo describe un proceso impecable: el servidor se despierta, descarga nuestro código, instala las dependencias, genera el sitio con Astro y, finalmente, entrega los artefactos a la plataforma de despliegue.

## Verificación técnica: El pulso del despliegue

Una vez configurado, podemos seguir el latido de nuestro proyecto desde la pestaña **Actions** de GitHub. Allí veremos cómo los trabajos de *build* y *deploy* se suceden con una inercia reconfortante. Si aparece el check verde, el círculo se ha cerrado con éxito.

## Conclusión: El fin del "hacer por hacer"

Implementar este flujo no es solo una cuestión de comodidad técnica; es una declaración de intenciones. Al delegar la logística del despliegue, recuperamos el tiempo y la energía necesarios para centrarnos en la arquitectura del contenido y el diseño.

Aquel ritual manual de arrastrar carpetas ha quedado como un vestigio de otra época. Ahora, mi portfolio respira y se actualiza con una autonomía que me permite, simplemente, seguir escribiendo. En el próximo análisis, dejaremos de lado los engranajes internos para centrarnos en lo que el usuario realmente ve: la estructura semántica y el diseño que da vida a estas palabras.