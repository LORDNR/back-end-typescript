FROM node:16-alpine
ENV DATABASE_URL="mysql://lord:8P&5nzy3dNzs@db.rennycat.works:3306/project_icm"
ENV SHADOW_DATABASE_URL="mysql://lord:8P&5nzy3dNzs@db.rennycat.works:3306/project_icm_shadow"
ENV JWT_SECRET="QEGTUI"

WORKDIR /app
COPY package*.json ./

RUN corepack enable

RUN pnpm install

RUN pnpm prisma generate
COPY . .

RUN pnpm build


EXPOSE 3000
CMD ["node", "dist/index.js"]