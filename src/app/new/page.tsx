import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createTodo } from "@/models/Todo";

async function create(data: FormData) {
  "use server"

  const title = data.get('title')?.valueOf();
  console.log({ title })

  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title');
  }
  
  await createTodo(title);
  
  redirect('/')
}

export default function Page() {
  return (
    <>
      <Header leftText="New" rightText="" />
      <form action={create} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300
            bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button type="submit" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Create</button>
        </div>
      </form>
    </>
  );
}
