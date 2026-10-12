# Menggunakan Nginx sebagai web server
FROM nginx:alpine

# Menyalin halaman website
COPY index.html /usr/share/nginx/html/

# Menyalin konfigurasi Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Dokumentasi port HTTP
EXPOSE 80
