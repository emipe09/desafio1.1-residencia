import promptSync from 'prompt-sync';
const readline = promptSync();

import { Aluno } from "./classes/Aluno.js"
import { Turma } from "./classes/Turma.js"

let a1 = new Aluno('João', 1);
let a2 = new Aluno('Maria', 2);

let t1 = new Turma([a1, a2]);

let nota = Number(readline('Informe a nota:'))
let matricula = Number(readline('Informe a matrícula:'))
t1.lancarNota(nota, matricula);

t1.addAluno(new Aluno('José', 3));
t1.addAluno(new Aluno('Adão', 4));

t1.imprimirAlunos();



