import type { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../presentation/pages/home/index';
import BooksPage from '../../presentation/pages/books/index';

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
