import Header from "@/components/Header";
import TodoItem from "@/components/TodoItem";
import { getTodos, updateTodoStatus } from '@/models/Todo'
import type { TodoItemProps } from '@/components/TodoItem'

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  
  await updateTodoStatus(id, complete);
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <Header leftText="To Do" rightText="New" />
      <ul className="pl-4">
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
