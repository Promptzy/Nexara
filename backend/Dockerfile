
FROM node:18-alpine AS base


WORKDIR /app


COPY package*.json ./


RUN npm ci --only=production && npm cache clean --force


COPY . .


RUN npx prisma generate


EXPOSE 5000


RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001


RUN chown -R nextjs:nodejs /app
USER nextjs

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/health', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the application
CMD ["npm", "start"]