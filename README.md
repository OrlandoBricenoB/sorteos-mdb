# Sorteos MDB

Proyecto construido con Astro y Tailwind CSS, con un componente SEO reutilizable para gestionar los metadatos de cada página.

## 🚀 Características

- ⚡ **Astro** - Framework web moderno y rápido
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🔍 **Componente SEO** - Gestión completa de metadatos SEO
- 📦 **Estructura limpia** - Código organizado y simple

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos

| Comando           | Acción                                               |
| :---------------- | :--------------------------------------------------- |
| `npm install`     | Instala las dependencias                             |
| `npm run dev`     | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/`      |
| `npm run preview` | Previsualiza la build local, antes de publicar       |

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Seo.astro          # Componente SEO reutilizable
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro         # Página de inicio
│   │   └── about.astro         # Página de ejemplo
│   └── styles/
│       └── global.css          # Estilos globales con Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🔍 Uso del Componente SEO

El componente `Seo.astro` puede ser usado directamente o a través del `BaseLayout.astro`.

### Uso con BaseLayout

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Mi Página"
  description="Descripción de la página"
  keywords={['keyword1', 'keyword2']}
  siteName="Mi Sitio"
  image="/imagen.jpg"
  url="/mi-pagina"
  themeColor="#3b82f6"
>
  <!-- Contenido de la página -->
</BaseLayout>
```

### Uso directo del componente SEO

```astro
---
import Seo from '../components/Seo.astro';
---

<html>
  <head>
    <Seo
      title="Mi Página"
      description="Descripción de la página"
      keywords={['keyword1', 'keyword2']}
      siteName="Mi Sitio"
    />
  </head>
  <body>
    <!-- Contenido -->
  </body>
</html>
```

## 📝 Propiedades del Componente SEO

| Propiedad        | Tipo       | Descripción                                       |
| ---------------- | ---------- | ------------------------------------------------- |
| `title`          | `string`   | Título de la página (requerido)                   |
| `description`    | `string`   | Descripción para SEO (requerido)                  |
| `keywords`       | `string[]` | Array de palabras clave                           |
| `image`          | `string`   | URL de la imagen principal                        |
| `url`            | `string`   | URL canónica de la página                         |
| `type`           | `string`   | Tipo de contenido (default: 'website')            |
| `siteName`       | `string`   | Nombre del sitio                                  |
| `author`         | `string`   | Autor de la página                                |
| `robots`         | `string`   | Directivas para robots (default: 'index, follow') |
| `canonical`      | `string`   | URL canónica personalizada                        |
| `ogImage`        | `string`   | Imagen para Open Graph                            |
| `twitterCard`    | `string`   | Tipo de tarjeta de Twitter                        |
| `twitterSite`    | `string`   | Usuario de Twitter del sitio                      |
| `twitterCreator` | `string`   | Creador del contenido                             |
| `themeColor`     | `string`   | Color del tema (default: '#ffffff')               |
| `lang`           | `string`   | Idioma (default: 'es')                            |

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
