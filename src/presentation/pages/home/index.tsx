import type { FC } from 'react';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <span className="text-lg font-semibold text-primary-600">Lime Books</span>
          <nav className="flex items-center gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-800 hover:text-primary-600 transition-colors"
              aria-label="Go to home page"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="text-sm font-medium text-neutral-800 hover:text-primary-600 transition-colors"
              aria-label="Go to books page"
            >
              Books
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex flex-1 items-center justify-center px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="mb-4 text-3xl font-bold text-neutral-900">
            Welcome to <span className="text-primary-600">Lime Books</span>
          </h1>
          <p className="mb-6 text-sm text-neutral-600">
            Browse and manage your book collection. 
          </p>
          <Link
            to="/books"
            className="rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            aria-label="View books"
          >
            View Books
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

