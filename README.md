# myMusic
Uno de los mejores aplicativos para buscar tus canciones favoritas en iTunes y guardar todas aquellas que te hacen feliz.
Simple de usar, solo necesitas un usuario y listo.

## Tecnologías

- Nodejs v16.17,
- Docker v20.10
- Docker-compose v1.29.2


## Instalación en docker
```
- Configurar el archivo .env con los mismos datos que se encuentran en .env.example
```
Entrar en la carpeta del proyecto clonado y ejecutar los siguientes comandos:
- docker-compose up -d

```
- El puerto 8085 deberá estar disponible para obtener el proyecto ejecutando correcatmente
```
## Ejecutar el aplicativo

Una vez configurado, el aplicativo estará ejecutando en: http://127.0.0.1:8085. 

Rutas:

- http://127.0.0.1:8085/search_tracks?term=juanes
- http://127.0.0.1:8085/favoritos
- http://127.0.0.1:8085/favoritos/{usuario} Ej: http://http://127.0.0.1:8085/favoritos/pepito


## Instalación en máquina
```
- Configurar el archivo .env con los mismos datos que se encuentran en .env.example
```
En caso de que no se tenga docker instalad, se puede instalar el aplicativo directamente en la máquina. 

Entrar en la carpeta del proyecto clonado y ejecutar los siguientes comandos en una consola:
- npm install
- node app.js

```
- El puerto 8085 deberá estar disponible para obtener el proyecto ejecutando correcatmente
```
## Ejecutar el aplicativo

Una vez configurado, el aplicativo estará ejecutando en: http://127.0.0.1:8085. 

Rutas:

- http://127.0.0.1:8085/search_tracks?term=juanes
- http://127.0.0.1:8085/favoritos
- http://127.0.0.1:8085/favoritos/{usuario} Ej: http://http://127.0.0.1:8085/favoritos/pepito

