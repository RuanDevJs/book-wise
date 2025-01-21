'use client';

import { IBook } from '@/@types/Books'
import api from '@/lib/Axios';
import { AxiosRequestConfig } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IBooksContext {
  books: IBook[];
  loadingBooks: boolean;
}

const bookContext = createContext({} as IBooksContext);

export function BookProvider({ children }: React.PropsWithChildren) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  async function fecthBooksFromApi(options?: AxiosRequestConfig) {
    try {
      const response = await (await api.get('/books', options)).data.books as IBook[];
      setBooks(response);
    } catch (error) {
      if (error instanceof Error) return console.error(error.message);
    } finally {
      setLoadingBooks(false);
    }
  }

  useEffect(() => {
    fecthBooksFromApi();
  }, []);

  return (
    <bookContext.Provider value={{ books, loadingBooks }}>
      {children}
    </bookContext.Provider>
  )
}


export function useBooks() {
  const { books, loadingBooks } = useContext(bookContext);
  return { books, loadingBooks }
}
