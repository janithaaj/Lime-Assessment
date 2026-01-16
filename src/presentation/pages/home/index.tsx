import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useBooks } from '../../hooks/useBooks';

import { motion } from 'framer-motion';
import bookStack from '../../../assets/images/book-stack.png';
import heroBook from '../../../assets/images/hero-book.png';
import PrimaryButton from '../../components/common/button/primary-button';
import MainLayout from '../../components/layout/main-layout';
import { Book } from '../../../domain/books/book';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { books, isLoading, isError, error } = useBooks();

  const handleShopCollection = () => {
    navigate('/books');
  };

  const handleViewAll = () => {
    navigate('/books');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">Error: {error?.message}</div>
      </div>
    );
  }

  const bestSellingBooks = books?.slice(0, 6) || [];

  return (
    <MainLayout>
      <div className="hero-section-gradient py-[150px] bg-secondary-50 relative">
        <div className="flex container mx-auto flex-row justify-end items-center">
          <div className="sm:flex-1 md:flex-[.4] flex-row">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-gray-900 font-fontBody text-[40px] leading-[56px]"
            >
              The Fine Print Book Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base text-gray-600 font-fontBody text-[16px] leading-[24px] mb-[25px]"
            >
              Best Offer Save 35%. Grab It Now!!
            </motion.p>
            <PrimaryButton
              btnText="Shop Collection"
              onClick={handleShopCollection}
            />
          </div>
          <div className="sm:flex-1 md:flex-[.6] flex gap-[60px] items-center justify-end">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={bookStack}
              alt="Book Stack"
              className=" object-cover w-64 lg:w-80 book-shadow rounded-lg"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src={heroBook}
              alt="Hero Book"
              className=" object-cover w-64 lg:w-80 book-shadow rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="info-section py-[100px]">
        <div className="flex container mx-auto flex-col">
          <div className="flex-[.4] flex-col">
            <div className="flex flex-col gap-[20px]">
              <h2 className="font-bold text-gray-900 font-fontBody text-[40px] leading-[56px]">
                Best Selling Books
              </h2>
              <p className="text-base text-gray-600 font-fontBody text-[16px] leading-[24px] mb-[25px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quos.
              </p>
            </div>
            <div className="flex flex-row gap-[20px]">
              <PrimaryButton btnText="View All" onClick={handleViewAll} />
            </div>
          </div>
          <div className="flex flex-row gap-[20px] pt-[50px]">
            <div className="flex flex-row gap-[20px]">
              {bestSellingBooks.map((book: Book) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  key={book.id}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-[200px] h-[200px] object-cover rounded-[20px]"
                  />
                  <h3 className="text-base text-gray-900 font-fontBody text-[20px] leading-[28px]">
                    {book.title}
                  </h3>
                  <p className="text-base text-gray-600 font-fontBody text-[16px] leading-[24px]">
                    {book.author}
                  </p>
                  <p className="text-base text-gray-600 font-fontBody text-[16px] leading-[24px]">
                    ${book.price}
                  </p>
                  <PrimaryButton btnText="Add to Cart" onClick={() => {}} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
