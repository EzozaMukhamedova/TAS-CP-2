# 1. Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2. Production stage
FROM node:20-alpine AS runner
WORKDIR /app

# копируем зависимости
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
# копируем билд и public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
