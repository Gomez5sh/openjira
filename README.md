# Next.js Vertebra task app

Para correr localmente, se necesita la base de datos

```
docker-compose up -d

```

* La bandera de -d significa __detached__
* MondoDB URL local:
```
mongodb://localhost:27017/entriesdb
```
## Configurar variables de entorno

Renombrar el archivo __.env.template__ a __.env__ 

* Instalar node modules en el proyecto y correr la app
  
  ```
  yarn install
  yarn dev
  ```

# Llenar base de datos con informacion de prueba

```
http://localhost:3000/api/seed
```