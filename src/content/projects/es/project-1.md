---
lang: es
title: "Metronopy"
description: "Herramienta Python para crear metrónomos audiovisuales con sincronía perfecta"
date: "Feb 04 2026"
draft: false
#repoURL: "https://github.com/MartaHPortilla/metronopy"
---

**Metronopy** nació de una necesidad muy personal: como alguien que vive entre la música y el código, me frustraba no encontrar una herramienta ~~gratuita~~ sencilla que generara metrónomos en vídeo con una sincronía matemática. Así que decidí construirla yo misma usando **Python**.

A diferencia de los metrónomos convencionales, Metronopy no solo suena; genera un **archivo de vídeo determinista**. Esto significa que cada pulso y cada indicador visual están perfectamente alineados, cuadro por cuadro, algo fundamental para crear contenido educativo de calidad o referencias rítmicas infalibles.

## Lo que puedes hacer con Metronopy

No quería un sistema complejo, sino algo que hiciera una sola cosa de forma impecable:

- Generar secuencias de metrónomo directamente en formato vídeo.
- Configurar el **tempo, compás y duración** total a medida.
- Garantizar una precisión absoluta gracias a su salida determinista.
- Disfrutar de un código **modular y bien documentado**, fácil de extender.

## Bajo el capó

Este proyecto fue mi campo de entrenamiento para aplicar **mejores prácticas de arquitectura**:

- He mantenido la lógica de dominio separada de la infraestructura, buscando esa **sobriedad y limpieza** que tanto valoro.
- El diseño es modular, pensado para que otros desarrolladores (o yo misma en el futuro) puedan añadir nuevas funcionalidades sin romper nada.
- Me he centrado en la generación de vídeo y sincronización de audio sin recurrir a frameworks pesados, manteniendo la herramienta ligera y eficiente.

Al final, Metronopy es el fiel reflejo de mi forma de entender el software: una solución técnica sólida que nace de una inquietud creativa. Si eres músico, educador o simplemente te apasiona el desarrollo con Python, espero que te sea tan útil como lo es para mí.
