import { PrismaClient } from "@prisma/client"

// INFO: This is used so that we don't have to
// initialize Prisma everytime we want to use it
// instead, it will instantiate a singleton

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
