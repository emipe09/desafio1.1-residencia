import promptSync from 'prompt-sync';
const readline = promptSync();

class Turma {
    constructor(alunos) {
        this.alunos = alunos;
    }

    addAluno(a) {
        this.alunos.push(a);
    }

    removeAluno(matricula) {
        let index = this.alunos.findIndex(a => a.matricula == matricula);
        if (index != -1) {
            this.alunos.splice(index, 1);
        }
    }

    lancarNota(nota, matricula) {
        let p = readline('Qual a prova? (P1 ou P2) ');
        let aluno = this.alunos.find(a => a.matricula == matricula);
        p = p.toUpperCase();
        if (p == 'P1') {
            aluno.p1 = nota;
            aluno.nf = (aluno.p1 + aluno.p2) / 2;
        } else if (p == 'P2') {
            aluno.p2 = nota;
            aluno.nf = (aluno.p1 + aluno.p2) / 2;
        } else {
            console.log('Entrada inválida para a prova.');
        }
    }

    imprimirAlunos(){
        console.log('-------------------------------------');
        console.log('Matricula | Nome | P1 | P2 | NF');
        console.log('-------------------------------------');
        this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
        this.alunos.forEach(a => {
            console.log(`${a.matricula} | ${a.nome} | ${a.p1} | ${a.p2} | ${a.nf}`);
        });
    }
}

class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.p1 = null;
        this.p2 = null;
        this.nf = 0;
    }
}

let a1 = new Aluno('João', 1);
let a2 = new Aluno('Maria', 2);

let t1 = new Turma([a1, a2]);

let nota = Number(readline('Informe a nota:'))
let matricula = Number(readline('Informe a matrícula:'))
t1.lancarNota(nota, matricula);

t1.addAluno(new Aluno('José', 3));
t1.addAluno(new Aluno('Adão', 4));

t1.imprimirAlunos();



