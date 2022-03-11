FROM node:17.4.0-alpine as deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat yarn
WORKDIR /usr/src/app
COPY dist/packages/airtable-api/package*.json ./
RUN yarn install --only=production

# Production image, copy all the files and run nest
FROM node:17.4.0-alpine as runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S express -u 1001
COPY --chown=express:nodejs dist/packages/airtable-api .
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
USER express
EXPOSE 80
ENV PORT 80
CMD ["dumb-init", "node", "main.js"]
