/*
    Pick
*/

interface Book {
  title: string;
  pages: number;
  author: string;
  description: string;
}

const book: Pick<Book, 'title' | 'pages'> = { title: 'Typescript', pages: 150 };
