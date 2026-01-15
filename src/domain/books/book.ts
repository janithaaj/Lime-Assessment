export type BookId = number;

export interface Book {
  id: BookId;
  title: string;
  author: string;
  category: string;
  rating: number;
  coverUrl: string;
}

export type BookInput = Omit<Book, 'id'> & {
  id?: BookId;
};
