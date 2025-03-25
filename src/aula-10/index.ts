/*
    Intersecção de tipos
*/

type Person = {
  id: number;
  name: string;
};

type Teacher = Person & {
  subjects: number;
};

type Student = Person & {
  age: number;
};

let teacher: Teacher;
let student: Student;
