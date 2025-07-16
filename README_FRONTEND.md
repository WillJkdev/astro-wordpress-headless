# Astro Frontend para WordPress Headless

Este proyecto es el frontend de un sitio WordPress Headless, construido con Astro. Consume datos del backend WordPress a través de su API REST.

## Requisitos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/WillJkdev/astro-wordpress-headless.git
   cd astro-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno si es necesario (por ejemplo, la URL del backend WordPress).

## Desarrollo

Para iniciar el entorno de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321` por defecto.

## Despliegue

1. Genera la versión estática:
   ```bash
   npm run build
   ```

2. El contenido generado estará en la carpeta `dist/`. Puedes desplegarlo en cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc).

3. Asegúrate de que el backend WordPress sea accesible públicamente para que el frontend pueda consumir la API.

## Personalización

- Los componentes están en `src/components/`.
- Las páginas están en `src/pages/`.
- La lógica para consumir la API de WordPress está en `src/lib/wp.ts`.

---
