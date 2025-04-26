ARG NODE_VERSION=19.5.0
FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production
WORKDIR /usr/src/app

# Instalar dependencias (incluyendo dev por ahora, podrías cambiar a --production si es seguro)
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev  # O considera cambiar a: npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Ejecutar como usuario no root
# Asegúrate de que el directorio y su contenido pertenezcan al usuario 'node'
# Puede que necesites copiar antes de cambiar de usuario o ajustar permisos.
# COPY . . # Mover esto ANTES de chown/USER si es necesario
RUN chown -R node:node /usr/src/app
USER node

# Exponer puerto
EXPOSE 3000

# Comando para iniciar en producción
CMD [ "npm", "start" ]
