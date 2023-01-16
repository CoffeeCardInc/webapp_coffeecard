// From Docs: [https://next-auth.js.org/adapters/prisma#setup]
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default prisma