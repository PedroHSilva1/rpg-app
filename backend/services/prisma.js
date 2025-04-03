import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient({
    //log: ["query", "info", "warn", "error"], //Retirar os comentários para ver os logs do Prisma
  });