import prisma from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const tasks = await prisma.tasks.findMany()
  return NextResponse.json(tasks)
}

export async function POST(req: Request) {
  const { title, description } = await req.json()
  const newTask = await prisma.tasks.create({
    data: {
      title,
      description,
    },
  })
  return NextResponse.json(newTask)
}

export async function PATCH(req: Request) {
  const { id, title, description } = await req.json()
  const updateTask = await prisma.tasks.update({
    where: {
      id: id,
    },
    data: {
      title,
      description,
    },
  })
  return NextResponse.json(updateTask)
}

export async function DELETE(req: Request) {
  const { id } = await req.json()
  const deleteItem = await prisma.tasks.delete({
    where: {
      id: id,
    },
  })
  return NextResponse.json(deleteItem)
}
