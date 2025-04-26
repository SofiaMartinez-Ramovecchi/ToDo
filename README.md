# 📝✨ Todo App Sofi's Launch ✨📝

¡Bienvenid@ a la Todo App! Una aplicación sencilla pero poderosa para gestionar tus tareas diarias, construida como un proyecto de aprendizaje de CI/CD y tecnologías de desarrollo web.

Este proyecto te ayuda a organizar tus pendientes y, al mismo tiempo, sirve como ejemplo práctico del uso de:

*   **Node.js / Express:** Para un backend rápido y eficiente.
*   **MongoDB:** Como base de datos NoSQL para almacenar tus tareas.
*   **Docker & Docker Compose:** Para empaquetar y orquestar la aplicación y sus dependencias (base de datos, servidor web) de forma aislada y reproducible. 🐳⚙️
*   **Nginx:** Como un robusto servidor web y proxy inverso. 🚦
*   **GitHub Actions:** Para la Integración Continua (¡construcción y publicación automática de imágenes Docker!). 🐙 CI
*   **(Planificado)** **Terraform & Oracle Cloud:** Para Infraestructura como Código y Despliegue Continuo en la nube gratuita. 🏗️☁️ CD

## ✨ Características Principales

*   **Añadir Tareas:** Crea nuevas tareas fácilmente. ✅
*   **Listar Tareas:** Visualiza todas tus tareas pendientes y completadas. 👀
*   **Marcar como Completadas:** ¡Siente la satisfacción de terminar una tarea! ✔️
*   **Eliminar Tareas:** Deshazte de lo que ya no necesitas. 🗑️
*   **Persistencia:** Tus tareas se guardan en MongoDB. 💾
*   **Servido con Nginx:** Acceso a través de un proxy inverso configurado. 🌐

## 🛠️ Stack Tecnológico

*   **Backend:** Node.js 🟩, Express.js 🚀
*   **Base de Datos:** MongoDB 🍃
*   **Frontend:** EJS (Server-Side Rendering) 📄, Bootstrap 🅱️, Font Awesome <i class="fa fa-font-awesome"></i>
*   **Contenedores:** Docker 🐳, Docker Compose ⚙️
*   **Servidor Web/Proxy:** Nginx 🚦
*   **CI/CD:** GitHub Actions 🐙 (CI), Terraform 🏗️ + Oracle Cloud ☁️ (CD - Próximamente)

## 🚀 Cómo Empezar (¡Correr Localmente!)

¿Quieres probar la aplicación en tu propia máquina? ¡Es fácil con Docker!

### Prerrequisitos

Asegúrate de tener instalados:

1.  **Git:** Para clonar el repositorio. ([Descargar Git](https://git-scm.com/downloads))
2.  **Docker:** El motor de contenedores. ([Descargar Docker Desktop](https://www.docker.com/products/docker-desktop/))
3.  **Docker Compose:** Generalmente viene incluido con Docker Desktop.

### Pasos para la Instalación Local

1.  **Clona el Repositorio:**
    ```bash
    git clone https://github.com/SofiaMartinez-Ramovecchi/ToDo
    cd tu-repositorio # Entra en la carpeta del proyecto
    ```

2.  **¡No necesitas archivo `.env` para este setup local!**
    El archivo `docker-compose.prod.yaml` ya incluye las variables de entorno necesarias (como la URI de conexión a la base de datos con credenciales) para que funcione directamente en el entorno Docker local. *Nota: Para un despliegue en producción real, gestionarías los secretos de forma más segura.*

3.  **Construye las Imágenes y Levanta los Contenedores:**
    Este comando leerá `docker-compose.prod.yaml`, construirá la imagen de tu aplicación (`todo-app`) si no existe, descargará las imágenes de `mongo` y `nginx`, y lanzará los tres contenedores en segundo plano.
    ```bash
    docker compose -f docker-compose.prod.yaml up --build -d
    ```
    *   `-f docker-compose.prod.yaml`: Especifica el archivo de configuración a usar.
    *   `up`: Crea e inicia los contenedores.
    *   `--build`: Construye la imagen de la app antes de iniciar (importante si haces cambios en el código o Dockerfile).
    *   `-d`: Modo "detached" (corre en segundo plano).

4.  **¡Accede a la Aplicación!** 🎉
    Abre tu navegador web favorito y ve a:
    👉 `http://localhost` (o `http://localhost:80`)

    ¡Deberías ver tu Todo App funcionando! Prueba añadir, completar y eliminar tareas.

### Detener la Aplicación Local

Cuando quieras detener los contenedores, ejecuta:
```bash
docker compose -f docker-compose.prod.yaml down
Use code with caution.
Markdown
Si además quieres eliminar el volumen de la base de datos (¡perderás todas las tareas guardadas!), usa:
docker compose -f docker-compose.prod.yaml down -v
Use code with caution.
Bash
🤝 ¿Quieres Colaborar?
¡Las contribuciones son súper bienvenidas! Si tienes ideas para mejorar la app, encuentras un bug o quieres añadir una nueva característica:
Haz un Fork del repositorio.
Crea una Nueva Rama (git checkout -b feature/mi-nueva-feature o bugfix/arreglo-genial).
Haz tus Cambios y ¡asegúrate de que todo siga funcionando!
Haz Commit de tus cambios (git commit -m 'feat: Añade característica X').
Haz Push a tu rama (git push origin feature/mi-nueva-feature).
Abre un Pull Request en este repositorio.
¡Revisaremos tu PR lo antes posible! 🙏💖
📄 Licencia
N/A
¡A disfrutar organizando tus tareas y aprendiendo sobre desarrollo web moderno! 🚀
