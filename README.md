# Proyecto Blog
## Creado por
- Gerardo Pineda 22880
## Descripción
Este un proyecto para el curso de sistemas y tecnologias web en donde se realizo un blog. Toda la parte del frontend esta realizada con VITE + REACT, haciendo uso de hooks, router y contextos. La parte del backend esta realizada con express, en esta api se pueden usar los metodos get pero los demas metodos piden un token que manda la api una vez el admin este loggeado.  
  
Este blog es sobre el juego de The legend of zelda donde existen varias opciones de visualizacion.
## Instalacion
En caso de que se quiera hacer uso de esta aplicacion puede ser de dos formas:
- Local
- Nube
### Local
Nos dirigimos a la carpeta ```` BACKEND ```` en donde se debera reliazar el comando ```` - docker compose up ```` esto levantara un docker con la api y la base de datos.  
Nos dirigimos a la carpeta  ```` FRONTEND ```` en donde se tiene que realizan el comando ```` - npm install ```` luego de realizar este comando se tiene que hacer ```` - npm run dev ```` 

Con esto el proyecto estara listo para ser utilizado.  

### Nube
El FrontEnd esta alojado en: https://blog-zelda.vercel.app/  
  
El BackEnd esta alojado en: 

## Uso
Una vez inciamos el proyecto encontraremos distintas rutas:
```diff
+ /Home
```
En esta ruta podremos encontrar la pantalla principal donde cualquier usuario puede ver el contenido del blog y al apachar cualquier item nos va a redirigir hacia un apartado con mas detalle de ese item especifico.  

```diff
+ /Game/:id
````
En esta ruta podemos ver los datos especificos de un juego por medio de su ```` id ```` que es un parametro que se pasa por medio de la ruta.  
Si estas ingresado con el usuario ```` admin ```` apareceran 2 cuadros que diran: actualizar y eliminar, los cuales hacen especificamente lo que dicen los botones.

```diff
+ /character/:id
````
En esta ruta podemos ver los datos especificos de un personaje por medio de su ```` id ```` que es un parametro que se pasa por medio de la ruta.  
Si estas ingresado con el usuario ```` admin ```` apareceran 2 cuadros que diran: actualizar y eliminar, los cuales hacen especificamente lo que dicen los botones.

```diff
+ /object/:id
````
En esta ruta podemos ver los datos especificos de un objeto por medio de su ```` id ```` que es un parametro que se pasa por medio de la ruta.  
Si estas ingresado con el usuario ```` admin ```` apareceran 2 cuadros que diran: actualizar y eliminar, los cuales hacen especificamente lo que dicen los botones.

```diff
+ /admin
````
Esta ruta nos muestra un login el cual al acceder se manda a traer un token a la api la cual deja realizar post, delete y update.  
Credenciales:  
- Usuario: admin
- Constaseña: 12345

```diff
+ /Post
````
Esta ruta


## Rutas  

```diff
/Home
```
En esta ruta se puede encontrar la visualizacion

