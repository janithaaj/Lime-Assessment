import type { FC } from 'react';
import { Link } from 'react-router-dom';

const BooksPage: FC = () => {
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
              className="text-sm font-medium text-primary-600"
              aria-label="Go to books page"
            >
              Books
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex flex-1 flex-col px-4 py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <h1 className="text-2xl font-semibold text-neutral-900">Books</h1>
            <button
              type="button"
              className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Add new book"
            >
              Add Book
            </button>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white px-4 py-8 text-center text-sm text-neutral-500">
            Books list will appear here.
          </div>
        </div>
      </section>
    </main>
  );
};

export default BooksPage;

