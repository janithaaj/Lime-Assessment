import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { bookApiRepo } from '../../infrastructure/books/bookApiRepo';
import type { Book, BookInput } from '../../domain/books/book';

const BOOKS_KEY = ['books'] as const;

export function useBooks() {
  const queryClient = useQueryClient();

  const booksQuery = useQuery<Book[], Error>({
    queryKey: BOOKS_KEY,
    queryFn: bookApiRepo.getAll,
  });

  const addBook = useMutation<Book, Error, BookInput>({
    mutationFn: (input) => bookApiRepo.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BOOKS_KEY });
    },
  });

  const updateBook = useMutation<Book, Error, { id: number; input: BookInput }>(
    {
      mutationFn: ({ id, input }) => bookApiRepo.update(id, input),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: BOOKS_KEY });
      },
    }
  );

  const deleteBook = useMutation<void, Error, number>({
    mutationFn: (id) => bookApiRepo.remove(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BOOKS_KEY });
    },
  });

  return {
    // data
    books: booksQuery.data ?? [],

    // states
    isLoading: booksQuery.isLoading,
    isError: booksQuery.isError,
    error: booksQuery.error ?? null,

    // actions
    refetch: booksQuery.refetch,
    addBook,
    updateBook,
    deleteBook,
  };
}
