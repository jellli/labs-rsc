import { Link } from 'waku';

export const Header = () => {
  return (
    <header className="flex items-center gap-4 p-6">
      <h2 className="text-lg font-bold tracking-tight">
        <Link to="/">Labs / Waku</Link>
      </h2>
      <nav className='flex gap-2'>
        <Link to="/form" className="inline-block underline">
          Form
        </Link>
        <Link to="/about" className="inline-block underline">
          About Waku
        </Link>
      </nav>
    </header>
  );
};
