/*
    Record
*/

// Cria um objeto onde todas as chaves são string e os valores são números.
const scores: Record<string, number> = {
  Pedro: 10,
  Mayk: 15,
};

// Limitar valores.
type Profile = 'admin' | 'user' | 'guest';

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
};

// Objetos personalizados.
interface User {
  name: string;
  email: string;
}

const users: Record<number, User> = {
  1: { name: 'Pedro', email: 'pedro@email.com' },
  2: { name: 'Mayk', email: 'mayk@email.com' },
};
