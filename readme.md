



### Dependencias

  * Install `npm install express`
  * Install `npm install dotenv env-var`


### Dev Dependencias

  * Install `npm install prisma --save-dev`


### Devs
  
  * Clonar el `.env.example` y crear `.env`
  * Ejecutar `docker compose up -d`
  * Ejecutar `npx prisma init --datasource-provider <postgresql, mysql, sqlite, sqlserver, mongodb>`


### Generar SSL OpenSSL .key .crt

  * Instalar GIT
  * Nos dirigimos a la ruta y copiar path `C:\Program Files\Git\usr\bin`
  * Habilitar variable de entorno `Path -> Nuevo -> C:\Program Files\Git\usr\bin`
  * Ejecutar `openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`
    ```
    Country Name (2 letter code) [AU]: CL
    State or Province Name (full name) [Some-State]: Santiago
    Locality Name (eg, city) []: Santiago
    Organization Name (eg, company) [Internet Widgits Pty Ltd]: ACME
    Organizational Unit Name (eg, section) []: Dev
    Common Name (e.g. server FQDN or YOUR name) []: Dev
    Email Address []: jor.lagos.1988@gmail.com
    ```