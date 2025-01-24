'use client';

import { IBook, ICommentary, TypeCategory } from '@/@types/Books'
import api from '@/lib/Axios';
import { AxiosRequestConfig } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IBooksContext {
  books: IBook[];
  loadingBooks: boolean;
  booksCategory: TypeCategory[];
  fetchCommentsByBookId: (id: string) => Promise<ICommentary[]>
}

const bookContext = createContext({} as IBooksContext);

export function BookProvider({ children }: React.PropsWithChildren) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loadingBooks, setLoadingBooks] = useState(true);

  const booksCategory: TypeCategory[] = [
    "Tudo",
    "Fantasía",
    "Mitologia",
    "Épico",
    "Aventura",
    "Ficção Científica",
    "Desenvolvimento Pessoal",
    "HQ",
    "Batman",
    "Mistério",
    "Spider-Man",
    "Marvel",
    "Cyberpunk",
    "Robótica",
    "Distopia",
    "Produtividade",
    "Carreira",
    "Desenvolvimento",
    "Boas Práticas"]

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

  async function fetchCommentsByBookId(bookId: string) {
    const data = (await api.get(`/books/${bookId}`)).data as IBook;
    return data && data.comments ? data.comments : []
  }

  useEffect(() => {
    fecthBooksFromApi();

    return () => { fecthBooksFromApi() }
  }, []);

  return (
    <bookContext.Provider value={{ books, loadingBooks, booksCategory, fetchCommentsByBookId }}>
      {children}
    </bookContext.Provider>
  )
}


export function useBooks() {
  const { books, loadingBooks, booksCategory, fetchCommentsByBookId } = useContext(bookContext);
  return { books, loadingBooks, booksCategory, fetchCommentsByBookId }
}
