import promptSync from 'prompt-sync';
const readline = promptSync();

export class Turma {
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
            if(a.p1 == null) a.p1 = '-';
            if(a.p2 == null) a.p2 = '-';
            console.log(`${a.matricula} | ${a.nome} | ${a.p1} | ${a.p2} | ${a.nf}`);
        });
    }
}