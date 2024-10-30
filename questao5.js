import { DateTime, Interval } from 'luxon';


class Cliente{
    constructor(nome, cpf, dataNasc, rendaMen, estadoCivil, dep){
        if(nome.length < 5){
            throw new Error("Nome inválido. Devem haver pelo menos 5 caracteres");
        }
        this.nome = nome;
        
        if(cpf.length != 11){
            throw new Error("CPF inválido");
        }
        this.cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
        
        let data = DateTime.fromFormat(dataNasc, 'dd/MM/yyyy');
        if(!data.isValid){
            throw new Error("Data inválida");
        }
        let i = Interval.fromDateTimes(data, DateTime.now());
        if(i.length('years') < 18){
            throw new Error("Cliente menor de idade");
        }
        this.dataNasc = data.toFormat('dd/MM/yyyy');

        if(rendaMen < 0){
            throw new Error("Renda mensal inválida");
        }
        this.rendaMen = rendaMen;

        if(estadoCivil != 'S' && estadoCivil != 'C' && estadoCivil != 'D' && estadoCivil != 'V'){
            throw new Error("Estado civil inválido");
        }
        this.estadoCivil = estadoCivil;

        if(dep >10){
            throw new Error("Número de dependentes excede o limite");
        }
        this.dep = dep;
    }
}

let c1 = new Cliente('João Silva', '12345682092', '01/01/2000', 45000, 'S', 8);

