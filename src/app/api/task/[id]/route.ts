import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  console.log(params)
  const tasks = await prisma.tasks.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json(tasks)
}
