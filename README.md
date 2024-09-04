# PG Notes

A simple note taking app made with Next.js, shadcn and Prisma.

It has PG in the name because I used postgresql as the database but now that I think about it, this project works with any database that Prisma supports...

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Without Docker](#without-docker)
  - [With Docker](#with-docker)

## Prerequisites

- Node.js
- npm
- PostgreSQL (with a database already created)
- Docker (optional)

## Getting Started

### Without Docker

First, copy the `.env.example` file to `.env` and fill in the required fields.

```bash
DATABASE_URL="postgresql://user:password@host:5432/dbname" # Or whatever database you are using
```

Then, perform a migration to create the tables in the database and generate the Prisma client:

```bash
npx prisma db push
npx prisma generate
```

Finally, run the development server:

```bash
npm run dev
```

### With Docker

First, copy the `.env.example` file to `.env` and fill in the required fields.

```bash
DATABASE_URL="postgresql://user:password@host:5432/dbname" # Or whatever database you are using
```

Then, build & run the docker image:

```bash
docker compose up
```
