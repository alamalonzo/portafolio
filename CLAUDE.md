# alamalonzo.com — Master Plan
**Portafolio multi-perfil: Arquitecto · iOS Developer · Project Manager**
Versión 1.0 · Abril 2026

---

## Stack técnico definido

| Pieza | Decisión | Razón |
|---|---|---|
| Generador | **Astro** | Templating sin framework obligatorio, HTML/CSS normal, optimización de imágenes nativa |
| Hosting | **GitHub Pages** | Gratis, deploy automático con GitHub Actions en cada push a `main` |
| Dominio | **alamalonzo.com** via Cloudflare Registrar | $10.44/año, DNS instantáneo, sin markup |
| Contacto | **Web3Forms** | 250 envíos/mes gratis, sin backend |
| Idiomas | **EN / ES** | Toggle en nav superior, inglés como default |
| CSS | **Vanilla CSS con variables** | Sin frameworks. Variables para tema, tipografía y colores |
| JS | **Vanilla JS** | Solo para interacciones (hover effects, toggle idioma, scroll) |
| Imágenes | **Astro `<Picture />`** | AVIF + WebP automático, lazy loading, sin CDN externo |

---

## Referentes visuales confirmados

- **Chris Raroque** (chrisraroque.com) → tono, estructura y voz de la homepage
- **Brittany Chiang** (brittanychiang.com) → sidebar/nav, layout de sub-portafolios, tarjetas de proyecto

**Paleta y estética a definir en Layout 1**, pero orientada a: sofisticada, no genérica, tipografía como elemento de diseño, fondo oscuro o muy claro (no gris medio).

---

## Mapa de URLs

```
alamalonzo.com/                          → Layout 1: Homepage
alamalonzo.com/architecture/             → Layout 2: Portafolio arquitectura
alamalonzo.com/architecture/[slug]/     → Layout 3: Detalle de proyecto
alamalonzo.com/apps/                     → Layout 4: iOS Developer
alamalonzo.com/apps/[slug]/             → Layout 4b: Detalle de app (opcional)
alamalonzo.com/uses/                     → Página de herramientas (tools)
```

> **PM no tiene URL propia.** El perfil de Project Manager vive dentro de
> `architecture/cediglo` — al final de esa página aparece el CV completo de PM.

---

## Estructura de carpetas del proyecto Astro

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro                  ← Layout 1
│   │   ├── architecture/
│   │   │   ├── index.astro              ← Layout 2
│   │   │   └── [slug].astro            ← Layout 3
│   │   ├── apps/
│   │   │   ├── index.astro              ← Layout 4
│   │   │   └── [slug].astro            ← Layout 4b
│   │   └── uses.astro                   ← Herramientas
│   ├── content/
│   │   ├── architecture/               ← .md por proyecto
│   │   │   ├── casa-jarabacoa.md
│   │   │   ├── bolero-21.md
│   │   │   ├── cediglo.md
│   │   │   └── ...
│   │   └── apps/                       ← .md por app
│   │       ├── jergas.md
│   │       ├── bimio.md
│   │       └── lazo.md
│   ├── components/
│   │   ├── Nav.astro                   ← Nav global con toggle EN/ES
│   │   ├── AppCard.astro               ← Card con wiggle hover
│   │   ├── ArchCard.astro              ← Card de proyecto arquitectónico
│   │   └── ProjectRow.astro            ← Fila de proyecto en Layout 2
│   ├── layouts/
│   │   ├── BaseLayout.astro            ← HTML base, meta, nav, footer
│   │   ├── SidebarLayout.astro         ← Para layouts 2 y 4 (sidebar + contenido)
│   │   └── DetailLayout.astro          ← Para layouts 3 y 4b
│   └── styles/
│       ├── global.css                  ← Variables CSS, reset, tipografía
│       └── components.css
├── public/
│   ├── images/
│   │   ├── architecture/               ← Fotos de proyectos
│   │   ├── apps/                       ← Iconos de apps (1024x1024 PNG)
│   │   └── avatar.jpg                  ← Foto circular homepage
│   ├── pdfs/
│   │   ├── cv-architect-en.pdf
│   │   ├── cv-architect-es.pdf
│   │   ├── cv-developer-en.pdf
│   │   └── cv-pm-en.pdf
│   └── CNAME                           ← alamalonzo.com
├── .github/
│   └── workflows/
│       └── deploy.yml                  ← GitHub Actions → GitHub Pages
└── astro.config.mjs
```

---

---

# LAYOUT 1 — Homepage

**URL:** `alamalonzo.com`
**Referente:** Chris Raroque
**Archivo:** `src/pages/index.astro`

## Objetivo
Presentación personal completa en scroll único. Tono conversacional, directo, personal. No es un CV — es una persona.

## Secciones en orden de scroll

### 1. Nav superior
```
[EN | ES]                    alamalonzo.com
```
- Toggle de idioma a la izquierda (cambia todo el texto de la página)
- Logo/nombre a la derecha o centrado
- Sin links adicionales en la homepage — el scroll lo dice todo

### 2. Hero — Saludo + identidad
```
Hola, soy Alam Alonzo.  [foto circular pequeña ~60px]
Hi, I'm Alam Alonzo.

Architect. iOS Developer. Author.
Santo Domingo, Dominican Republic.
```
- Foto circular pequeña, alineada inline con el nombre o flotando a la derecha del texto
- Tagline de una línea que une las tres disciplinas
- Sin botones aquí — el scroll invita a seguir

### 3. Bloque: iOS Apps
```
I make iOS apps.

[ícono Jergas] [ícono Bimio] [ícono Lazo]

See all →
```
**Comportamiento hover en cada ícono:**
- Wiggle animation (CSS keyframe)
- Nombre de la app aparece arriba del ícono
- Cursor pointer

**"See all →"** → lleva a `/apps`

### 4. Bloque: Arquitectura
```
I also design, build & supervise spaces.

[img Casa Jarabacoa] [img Bolero 21] [img CEDIGLO] [img ...]

See all →
```
- Imágenes cuadradas ~120px, simplificadas (objeto principal del proyecto)
- Mismo comportamiento hover: nombre del proyecto arriba, leve scale
- **"See all →"** → lleva a `/architecture`

### 5. Bloque: Disponibilidad / CTA
```
Need an architect who also codes?
Or a developer who understands construction?

I'm available for architecture projects, iOS development,
and project management.

→ Let's talk
```
- "Let's talk" abre el bloque de contacto abajo o lleva al email directamente
- Tono humano, no corporativo

### 6. Bloque: Redes sociales
```
I also post regularly on:

[X]  [Instagram]  [LinkedIn]  [TikTok]
```
- Iconos simples con link externo
- Sin texto adicional — los iconos hablan solos

### 7. Bloque: Tools + Contacto
```
Curious about the tools I use? → /uses

—

Want to work together on a project? → email
Want to say hi? → email o Twitter DM
```

## Notas técnicas Layout 1
- **Sin sidebar** — scroll único, contenido centrado con max-width ~680px
- Toggle EN/ES: JS vanilla que cambia atributos `data-lang` en el DOM. Los textos bilingües viven en el mismo HTML con `<span lang="en">` y `<span lang="es" hidden>` (o clases CSS)
- Las imágenes de arquitectura y los iconos de apps usan `<Picture />` de Astro
- Wiggle animation: CSS keyframe puro, activado por `:hover`

---

---

# LAYOUT 2 — Architecture Portfolio

**URL:** `alamalonzo.com/architecture`
**Referente:** Brittany Chiang (sidebar) + editorial propio
**Archivo:** `src/pages/architecture/index.astro`
**Layout base:** `SidebarLayout.astro`

## Objetivo
Lista completa de proyectos arquitectónicos. Funciona como un CV visual — cada proyecto es una fila horizontal clicable que lleva al detalle.

## Estructura de página

### Sidebar izquierdo (fijo en scroll)
```
Alam Alonzo
Architect · +10 yrs

─────────────
Projects
CV ↓
About
─────────────
← Back to home
```
- En mobile: desaparece el sidebar, nav colapsa al top
- "CV ↓" descarga el PDF directamente

### Contenido principal — Lista de proyectos

Cada proyecto es una **fila horizontal** con este layout interno:

```
┌─────────────────────────────┬─────────────────────────┐
│  TÍTULO DEL PROYECTO         │  [foto 1] [foto 2] [foto 3] │
│  Año · Tipo · Ubicación      │                         │
│                              │                         │
│  Descripción breve (2 líneas)│                         │
│  Mi rol: Diseño + Supervisión│                         │
└─────────────────────────────┴─────────────────────────┘
```

**Comportamiento hover:**
- Toda la fila tiene `cursor: pointer`
- Leve highlight de fondo (no borde — sutil)
- Las fotos hacen un leve scale
- Click en cualquier punto → Layout 3 (detalle)

### Proyectos a incluir (orden sugerido)
1. CEDIGLO Medical Center *(el más fuerte — va primero)*
2. Casa Jarabacoa
3. Bolero 21
4. Casa 15 de Mayo
5. Supermart
6. *(otros que quieras agregar)*

### Footer del contenido principal
```
─────────────────────────
Project Management

For detailed PM work on CEDIGLO Medical Center,
including budget management (RD$40M+), team coordination
and timeline delivery → see full case study ↑

CV completo disponible en PDF:
[Descargar CV Arquitecto EN]  [Descargar CV ES]
[Descargar CV Project Manager]
```

## Notas técnicas Layout 2
- Las filas de proyecto se generan desde Markdown (Content Collections de Astro)
- Frontmatter de cada `.md`: `title`, `year`, `type`, `location`, `role`, `description`, `photos[]`, `slug`
- Las 3 fotos en grid usan `<Picture />` con lazy loading
- Sidebar sticky: `position: sticky; top: 2rem`
- En mobile (< 768px): sidebar se convierte en nav top horizontal

---

---

# LAYOUT 3 — Detalle de Proyecto Arquitectónico

**URL:** `alamalonzo.com/architecture/[slug]`
**Archivo:** `src/pages/architecture/[slug].astro`
**Layout base:** `DetailLayout.astro`

## Objetivo
Mostrar un proyecto en profundidad. Combina la historia del proyecto con evidencia visual. Es lo que un reclutador de Gensler o ARUP verá cuando haga click.

## Estructura de página

### Header del proyecto
```
← Architecture

NOMBRE DEL PROYECTO
Tipo · Año · Ubicación · m²
```

### Sección 1 — Imagen hero
- Foto principal full-width (la más impactante del proyecto)
- Sin texto encima — la imagen habla primero

### Sección 2 — Overview (dos columnas)
```
┌──────────────────┬──────────────────┐
│  FICHA TÉCNICA   │  DESCRIPCIÓN     │
│                  │                  │
│  Cliente: —      │  Párrafo 1:      │
│  Área: — m²      │  contexto del    │
│  Presupuesto: —  │  proyecto        │
│  Duración: —     │                  │
│  Rol: —          │  Párrafo 2:      │
│  Estado: Built   │  reto principal  │
└──────────────────┴──────────────────┘
```

### Sección 3 — El proceso
Texto narrativo (2-4 párrafos) sobre:
- El reto
- La solución
- Lo que aprendí / lo que hice solo

### Sección 4 — Galería
Grid de fotos del proyecto:
- 1 foto grande (full-width) + 2 fotos medianas lado a lado
- O grid de 3 columnas según cantidad de fotos disponibles
- Click en foto → lightbox (JS vanilla)

### Sección 5 — Resultados (solo si aplica)
```
RD$40M+ presupuesto gestionado
1,308 m² construidos
8+ especialidades coordinadas
Premiado: Bienal de Arquitectura RD 2025
```
Solo en proyectos donde los números están disponibles.

### Sección 6 — Navegación entre proyectos
```
← Proyecto anterior        Proyecto siguiente →
```

### Sección especial — Solo en CEDIGLO
Al final de la página de CEDIGLO, sección adicional:

```
═══════════════════════════════
PROJECT MANAGEMENT
═══════════════════════════════

Beyond architecture, CEDIGLO was my most complex
PM challenge: [párrafo]

[métricas en grid]

Download full PM CV →
```

## Notas técnicas Layout 3
- El contenido viene del frontmatter + body del `.md` correspondiente
- Lightbox: JS vanilla, sin librerías
- `[slug].astro` usa `getStaticPaths()` de Astro para generar todas las páginas en build time
- Las imágenes necesitan estar en `public/images/architecture/[slug]/`

---

---

# LAYOUT 4 — iOS Developer

**URL:** `alamalonzo.com/apps`
**Referente:** Brittany Chiang (estructura) con identidad visual propia
**Archivo:** `src/pages/apps/index.astro`
**Layout base:** `SidebarLayout.astro`

## Objetivo
Presentar las apps publicadas y en desarrollo como un desarrollador iOS independiente serio. Comunica profundidad técnica sin parecer un CV genérico.

## Estructura de página

### Sidebar izquierdo (fijo)
```
Alam Alonzo
iOS Developer · Swift

─────────────
Apps
Skills
CV ↓
─────────────
← Back to home
```

### Contenido principal — Cards de apps

Cada app es una **card vertical** con:

```
┌─────────────────────────────┐
│  [ícono 80px]               │
│                             │
│  NOMBRE DE LA APP           │
│  Estado: Live / In Dev      │
│                             │
│  Descripción (2-3 líneas)   │
│                             │
│  SwiftUI  CloudKit  etc.    │
│  [tags de tecnología]       │
│                             │
│  [App Store ↗]  [Web ↗]    │
└─────────────────────────────┘
```

**Apps a incluir:**

| App | Estado | Links |
|---|---|---|
| Jergas | Live ✓ | App Store + landing |
| Bimio | In Development | — |
| Lazo | In Development | — |

### Sección: Skills técnicas
```
Languages    Swift · SwiftUI
Frameworks   CloudKit · StoreKit · WidgetKit
Tools        Xcode · TestFlight · Instruments
Design       Figma · SF Symbols
```
Lista limpia, sin barras de progreso — las barras de progreso en CVs son subjetivas y se ven amateur.

### Footer
```
CV técnico disponible:
[Descargar CV iOS Developer EN]
```

## Notas técnicas Layout 4
- Mismo `SidebarLayout.astro` que Layout 2, con sidebar de contenido diferente
- Los tags de tecnología son `<span>` con estilo de pill/badge
- Estado "Live" vs "In Development" con color sutil (verde / amarillo apagado)
- En mobile: cards en columna única, sidebar colapsa a nav top

---

---

# Página adicional — Uses / Tools

**URL:** `alamalonzo.com/uses`
**Referente:** Estilo de usesthis.com — lista simple, sin pretensiones
**Archivo:** `src/pages/uses.astro`

## Contenido sugerido

```
Tools I use

─────────────────
Hardware
  MacBook Pro M3
  [otros]

Development
  Xcode
  VS Code
  GitHub / GitHub Copilot
  Claude (lol)

Architecture
  AutoCAD
  Revit
  Blender
  Lumion / Enscape

Design
  Figma
  Adobe Suite

Productivity
  [lo que uses]

This site
  Built with Astro
  Hosted on GitHub Pages
  Domain via Cloudflare
```

---

---

# Sistema de bilingüismo (EN/ES)

## Enfoque técnico recomendado

**No usar rutas separadas** (`/es/`) — añade complejidad sin beneficio para un portafolio personal de esta escala.

**Usar data attributes + JS vanilla:**

```html
<!-- En el HTML -->
<span data-en="Hi, I'm Alam Alonzo." data-es="Hola, soy Alam Alonzo.">
  Hi, I'm Alam Alonzo.
</span>
```

```js
// Toggle
const toggle = document.querySelector('#lang-toggle');
toggle.addEventListener('click', () => {
  const lang = document.documentElement.lang === 'en' ? 'es' : 'en';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  localStorage.setItem('lang', lang);
});
```

- La preferencia se guarda en `localStorage`
- Al cargar la página, se lee `localStorage` y se aplica el idioma guardado
- El toggle en nav muestra el idioma activo: `EN` o `ES` en bold

---

---

# Sistema de variables CSS (Design Tokens)

A definir con precisión en Layout 1, pero la estructura:

```css
:root {
  /* Colores — a definir */
  --color-bg: ;
  --color-text: ;
  --color-text-muted: ;
  --color-accent: ;
  --color-border: ;

  /* Tipografía */
  --font-display: ;    /* Para títulos — algo con carácter */
  --font-body: ;       /* Para texto — legible, no genérico */
  --font-mono: ;       /* Para datos técnicos, tags */

  /* Espaciado */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 2rem;
  --space-lg: 4rem;
  --space-xl: 8rem;

  /* Layout */
  --sidebar-width: 260px;
  --content-max: 680px;
  --content-max-wide: 900px;
}
```

---

---

# Orden de construcción recomendado

Construir en este orden — cada paso es independiente y entregable:

| Paso | Qué construir | Output |
|---|---|---|
| 1 | Setup Astro + GitHub Pages + dominio | Sitio vacío en alamalonzo.com |
| 2 | `global.css` con variables + tipografía | Sistema de diseño base |
| 3 | `BaseLayout.astro` + `Nav.astro` con toggle EN/ES | Nav funcional |
| 4 | **Layout 1** — Homepage completa | Primera página live |
| 5 | **Layout 2** — Architecture index | Lista de proyectos |
| 6 | **Layout 3** — Detalle de proyecto (1 proyecto piloto: Jarabacoa) | Primera página de detalle |
| 7 | **Layout 4** — iOS Developer | Sección de apps |
| 8 | Contenido: resto de proyectos en Markdown | Sitio completo |
| 9 | Optimización: imágenes, SEO, meta tags | Listo para publicar |
| 10 | `uses.astro` | Página extra |

---

# Cómo usar este documento como prompt

Para cada paso, dale a Claude este contexto inicial:

```
Estoy construyendo mi portafolio personal en Astro + GitHub Pages.
El dominio es alamalonzo.com.
Tengo tres perfiles: Arquitecto, iOS Developer, Project Manager.
Referencias visuales: Chris Raroque y Brittany Chiang.
Stack: Astro, HTML/CSS vanilla, JS vanilla, sin librerías externas.

[Pega aquí la sección específica del plan que aplica al paso que vas a construir]

Hoy voy a construir: [nombre del paso].
```

Esto le da a Claude todo el contexto necesario sin repetir la conversación entera.

---

*Plan generado en abril 2026. Actualizar cuando cambien decisiones de diseño o contenido.*

## Rules for Claude Code
- Stack: Astro, vanilla CSS, vanilla JS only
- No third-party libraries except Web3Forms
- No React, Vue, or any UI framework
- Images always via Astro's <Picture /> component
- All CSS via variables defined in global.css
- Bilingual: data-en / data-es attributes, JS toggle
- Deploy target: GitHub Pages via Actions
