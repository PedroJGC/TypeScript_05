/*
    Omit
*/

interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book: Omit<Book, 'description' | 'pages'> = { title: 'Typescript', author: 'Pedro' };
