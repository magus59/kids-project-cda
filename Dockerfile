# Étape 1: Utiliser l'image de base Node.js
FROM node:alpine

# Étape 2: Définir le répertoire de travail
WORKDIR /usr/src/app

# Étape 4: Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Étape 5: Installer les dépendances (y compris bcrypt)
RUN npm install && npm cache clean --f

# Étape 6: Copier le reste des fichiers du projet
COPY . .

# Étape 7: Exposer le port sur lequel l'application sera lancée
EXPOSE 3001

# Étape 8: Démarrer l'application
CMD ["node", "index.js"]


# docker build . -t diag-api-node
# docker run -p 3001:3001  diag-api-node