# WordPress Backend para Headless CMS

Este proyecto es el backend de un sitio WordPress Headless. Provee la API REST que consume el frontend construido en Astro.

## Requisitos

- PHP >= 7.4
- MySQL/MariaDB
- Servidor web (Apache, Nginx, etc.)

## Instalación

1. Sube la carpeta `wordpress-backend` a tu servidor web.
2. Crea una base de datos y usuario para WordPress.
3. Copia y renombra el archivo `wp-config-sample.php` a `wp-config.php` y configura los datos de la base de datos.
4. Accede a la URL de tu servidor para completar la instalación de WordPress.

## Plugins recomendados

- [WP REST API](https://es.wordpress.org/plugins/rest-api/) (si tu versión de WordPress es antigua)
- [WP Headless](https://es.wordpress.org/plugins/wp-headless/) (opcional)
- Plugins de seguridad y SEO según tus necesidades.

## Configuración para Headless

- Opcional: Instala un plugin para deshabilitar el frontend clásico de WordPress y redirigir a tu frontend Astro.
- Asegúrate de que la API REST esté habilitada y accesible desde el dominio donde desplegarás Astro.

## Despliegue

1. Sube todos los archivos a tu servidor web.
2. Configura el dominio/subdominio para apuntar a la carpeta de WordPress.
3. Asegúrate de que los endpoints de la API REST sean accesibles públicamente (por ejemplo: `https://tudominio.com/wp-json/`).

## Notas

- No es necesario instalar un tema visual, ya que WordPress solo funcionará como backend.
- Mantén WordPress y los plugins actualizados por seguridad.
