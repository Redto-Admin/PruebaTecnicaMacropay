# PruebaTecnicaMacropay
 Prueba tecnica typescrip elaboracion de un CRUD
 
# Instrucciones de Instalación y Uso

## Instalación de las Librerías npm

Para instalar las librerías npm necesarias, ejecuta el siguiente comando en la raíz de tu proyecto:

```
npm install
```
Esto instalará todas las dependencias necesarias para ejecutar la aplicación.

```
npm run dev
```
Esto levantara la aplicación en un entorno dev.

```
npm run start
```
Esto levantara la aplicacion en un entorno productivo.

```
npm run lint
```
Esto iniciara el analisis de codigo de eslint.

```
npm run format
```
Esto formateara el codigo del proyecto con prettier.

## Variables de entorno

Las variables de entorno son:

- JWT_EXPIRATION_TIME = tiempo de expiracion del token jwt
- JWT_SECRET_KEY = secret api key para la generacion de tokens
- ALLOWED_USER = username del usuario de autenticacion
- ALLOWED_USER_PASSWORD = contraseña valida para el usuario de autenticacion 
- PORT = puerto donde levantara la aplicacion 


## Docker

Levantar el Contenedor Docker
Para levantar el contenedor Docker con los comandos proporcionados, sigue estos pasos:

Construye la imagen Docker utilizando el siguiente comando. Asegúrate de reemplazar los valores de port, secret, user, password y expiration según sea necesario:


```  
docker build -t prueba-tecnica --build-arg port= --build-arg secret= --build-arg user= --build-arg password= --build-arg expiration= .
```

Una vez que la imagen se haya construido correctamente, ejecuta el siguiente comando para iniciar el contenedor Docker:
    
```
docker run -p 3005:3005 prueba-tecnica
```
Nota: Los valores de las variables de entorno se compartiran.

## Endpoints
A continuación se muestran los endpoints disponibles en la aplicación:

GET /: Retorna el hello world!.

GET /books/average: Retorna el promedio de precio de los libros.

GET /books: Retorna todos los libros.

GET /books?phrase=oz: Retorna todos los libros que contengan la frase oz.

GET /books?price=900: Retorna todos los libros mayor al precio ingresado.

GET /books/:id: Retorna un libro específico por su ID.

POST /books: Crea un nuevo libro.

POST /auth: Generat un token de autenticacion de un usuario.

Nota: Todos los endpoints que requieren autenticación están protegidos con un token JWT. Asegúrate de incluir el token en el encabezado de la solicitud para acceder a estos endpoints.
