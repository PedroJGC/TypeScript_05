/*
    Partial
*/

interface User {
  id: number;
  name: string;
  email: string;
}

const newUser: User = { id: 1, name: 'Pedro', email: 'pedro@email.com' };

const updatedUser: Partial<User> = { name: 'Pedro Carvalho' };
