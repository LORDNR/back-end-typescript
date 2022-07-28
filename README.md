# back-end-typescript

create file .env 
### .env
PORT = Write your port

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

#### example  
PORT = 5000

DATABASE_URL="mysql://root:@localhost:3306/yourDB"
)

#### open Terminal
> pnpm install

> pnpm prisma generate

> pnpm prisma migrate dev --name init

> pnpm dev
