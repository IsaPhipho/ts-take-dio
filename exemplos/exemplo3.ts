const Pessoa = {
  nome: 'Maria',
  idade: 25,
  profissao: 'engenheira'
}

Pessoa.idade = 32;

const joao: {nome: string, idade: number, profissao: string} = {
  nome: 'João',
  idade: 32,
  profissao: 'motorista'
}

const luciana: {nome: string, idade: number, profissao: string} = {
  nome: 'Luciana',
  idade: 42,
  profissao: 'designer'
}

enum Profissao {
  Engenheira,
  Motorista,
  Designer,
  Atriz
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}

const murilo: Pessoa = {
  nome: 'Murilo',
  idade: 46,
  profissao: Profissao.Designer
}

const catarina: Estudante = {
  nome: 'Catarina',
  idade: 20,
  materias: [
    'Álgebra linear',
    'Desenho técnico',
    'Introdução à Programação'
  ]
}

const dirceu: Estudante = {
  nome: 'Dirceu',
  idade: 20,
  profissao: Profissao.Motorista,
  materias: [
    'História da Arte',
    'Psicolgia das Relações Humanas'
  ]
}  

function listarPessoa(lista: string[]) {
  for(const item of lista) {
    console.log('- ', item);
  }
}

listarPessoa(catarina.materias);