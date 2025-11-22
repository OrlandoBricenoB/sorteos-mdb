# Sorteos Md'B - Frontend

Sitio web para sorteos con sistema de referidos, construido con Astro y desplegado en Cloudflare Pages.

## 🚀 Tecnologías

- **Astro 5** - Framework web moderno con SSR
- **Tailwind CSS** - Framework de CSS utility-first
- **Cloudflare Pages** - Hosting y SSR edge computing
- **TypeScript** - Tipado estático

## 📦 Instalación

```bash
pnpm install
```

## 🛠️ Desarrollo

```bash
# Servidor de desarrollo
pnpm dev

# El sitio estará disponible en http://localhost:4321
```

## 🏗️ Build

```bash
# Build para producción
pnpm build

# Preview del build localmente
pnpm preview

# Preview con Wrangler (simula Cloudflare Pages)
pnpm preview:cf
```

## 🌐 Deployment a Cloudflare Pages

### Opción 1: Desde el Dashboard de Cloudflare

1. Ve a [Cloudflare Pages](https://dash.cloudflare.com/)
2. Crea un nuevo proyecto
3. Conecta tu repositorio de GitHub
4. Configura el build:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Framework preset**: Astro
5. Haz deploy

### Opción 2: Desde la línea de comandos

```bash
# Primero, haz login en Cloudflare
npx wrangler login

# Deploy
npx wrangler pages deploy dist
```

## 📁 Estructura del Proyecto

```
sorteos-mdb/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts de página
│   ├── pages/          # Páginas (rutas)
│   └── styles/         # Estilos globales
├── public/             # Archivos estáticos
├── dist/               # Build output (generado)
└── astro.config.mjs    # Configuración de Astro
```

## ⚙️ Configuración SSR

El proyecto está configurado para usar **Server-Side Rendering (SSR)** con el adaptador de Cloudflare:

```javascript
// astro.config.mjs
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    mode: "directory",
  }),
});
```

Esto significa que:

- ✅ Las páginas se generan dinámicamente en cada request
- ✅ Los datos siempre están actualizados (no necesita rebuilds)
- ✅ Se ejecuta en el edge de Cloudflare (ultra rápido)

## 🔗 API Backend

El frontend consume la API en: `https://api.sorteosmdb.com/api/v1`

Endpoints principales:

- `GET /raffles/:id/numbers` - Obtener números ocupados
- `POST /participants` - Crear participante
- `GET /participants` - Obtener participante por email

## 📝 Notas

- El proyecto usa **SSR** por lo que no genera HTML estático
- Cada página se renderiza en tiempo real en Cloudflare Workers
- Los datos de la API siempre están frescos sin necesidad de rebuilds
- El favicon está en `/public/favicon.svg`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece a Sorteos Md'B.
