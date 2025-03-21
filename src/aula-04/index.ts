/*
    Tipagem em objetos 
*/

let user: { name: string; age: number; urlAvatar?: string } = { name: 'Pedro', age: 38 };

console.log(user);

/*
function singIn(email: string, password: string) {
  // Lógica de conectar o usuário na aplicação
}

singIn('pedro@email.com', '123');
*/

function singIn({ email, password }: { email: string; password: string }) {
  // Lógica de conectar o usuário na aplicação
  console.log(`Usuário: ${email} conectado!`);
}

singIn({ email: 'pedro@email.com', password: '123' });
