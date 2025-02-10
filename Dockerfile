# Use Node.js base image
FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files
COPY dist/ ./dist/
COPY node_modules/ ./node_modules/
COPY package.json .
COPY server.js .

EXPOSE 3000

CMD ["node", "server.js"]
