import { prisma } from "@/db";

export type Todo = {
  id?: string
  name: string
  complete?: Boolean
  createdAt?: Date
  updatedAt?: Date
}

export const getTodos = () => prisma.todo.findMany()

export const updateTodoStatus = (id: string, complete: boolean) =>
  prisma.todo.update({ where: { id }, data: { complete } })

export const createTodo = (title: string) =>
  prisma.todo.create({
    data: {
      title,
      complete: false
    }
  })
