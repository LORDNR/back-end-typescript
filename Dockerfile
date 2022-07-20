FROM node:16-alpine

WORKDIR /usr/local/app
COPY . .

RUN corepack enable
RUN pnpm install
RUN pnpm prisma generate

RUN pnpm build

CMD ["node", "dist/index.js"]