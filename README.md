# GOTAM - Documentación del Proyecto

Evaluation project of a CRUD mini app with node.js for gotam

## Descripción del Proyecto

Este proyecto es una mini app de un CRUD de alta de personal, utilizando Node.js. El proyecto utiliza una arquitectura escalable y aprovecha el patrón de diseño Singleton para los servicios. Está configurado para ejecutarse en contenedores Docker y utiliza MongoDB como base de datos para almacenar los datos. Las tecnologías principales utilizadas en este proyecto son Node.js, Express, TypeScript, JWT (JSON Web Tokens) y bcrypt para el cifrado de contraseñas.


## Estructura del Proyecto

El proyecto sigue una estructura de directorios que facilita la escalabilidad y la organización del código. A continuación, se describe la estructura principal del proyecto:

gotam/


## Arquitectura y Patrón de Diseño

La arquitectura del proyecto sigue un enfoque escalable, con componentes separados para controladores, modelos, servicios y rutas. Para los servicios, se utiliza el patrón de diseño Singleton, que asegura que solo haya una instancia de ciertos servicios a lo largo del ciclo de vida de la aplicación.

Los controladores se encargan de manejar las solicitudes HTTP y la lógica de negocio asociada. Los modelos definen la estructura de los datos almacenados en MongoDB. Los servicios proporcionan la lógica de negocio y la interacción con la base de datos, implementando el patrón Singleton cuando sea necesario.

## Autenticación y Seguridad

Para la autenticación de usuarios, el proyecto utiliza JWT (JSON Web Tokens) para generar tokens de acceso seguros. Además, se utiliza bcrypt para el cifrado seguro de contraseñas antes de almacenarlas en la base de datos.

## Flujo de Trabajo GitFlow

Este proyecto sigue el flujo de trabajo GitFlow para la gestión y organización del desarrollo. Las ramas principales del flujo de trabajo son:

- `main`: Representa la versión en producción del proyecto. El código en esta rama es estable y está listo para ser desplegado en producción.

- `develop`: Es la rama de desarrollo donde se integran todas las características y cambios. A partir de esta rama, se crean ramas de características, bug-fix y hotfixes.

- Ramas de características (feature branches): Se crean a partir de la rama `develop` y se utilizan para desarrollar nuevas características o mejoras. Una vez que se completa la función, se fusiona nuevamente en la rama `develop`.

- Ramas de bug-fix (bug-fix branches): Se crean a partir de la rama `develop` y se utilizan para solucionar errores que se hayan fusionado en `develop`. Una vez que se soluciona el error, se fusiona nuevamente en la rama `develop`.

- Ramas de hotfix (hotfix branches): Se crean a partir de la rama `main` y se utilizan para corregir problemas críticos en producción. Una vez que se completa el hotfix, se fusiona en ambas ramas `main` y `develop`.
