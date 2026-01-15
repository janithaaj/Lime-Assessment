import { http } from '../http/client';
import type { Book, BookInput } from '../../domain/books/book';

const RESOURCE = '/books';

export const bookApiRepo = {
  async getAll(): Promise<Book[]> {
    const { data } = await http.get<Book[]>(RESOURCE);
    return data;
  },

  async create(input: BookInput): Promise<Book> {
    const { data } = await http.post<Book>(RESOURCE, input);
    return data;
  },

  async update(id: number, input: BookInput): Promise<Book> {
    const { data } = await http.put<Book>(`${RESOURCE}/${id}`, input);
    return data;
  },

  async remove(id: number): Promise<void> {
    await http.delete(`${RESOURCE}/${id}`);
  },
};
