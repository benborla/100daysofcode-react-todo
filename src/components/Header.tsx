import Link from "next/link";

type HeaderProps = {
  leftText: string;
  rightText?: string;
};

export default function Header({ leftText, rightText }: HeaderProps) {
  console.log(typeof rightText === 'string' || rightText !== '');
  return (
    <header className="flex justify-between mb-5">
      <h1 className="text-2xl">{leftText}</h1>
      {typeof rightText !== 'string' || rightText !== '' ?
        <Link
          href="/new"
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          {rightText}
        </Link>
        : ''}
    </header>
  );
}
