class Hero{
    constructor({nome, idade, tipo}){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    ataque(){
        if (this.tipo === 'guerreiro'){
            console.log(`O ${this.tipo} atacou com uma espada`)
        }  else if (this.tipo === 'mago'){
            console.log(`O ${this.tipo} atacou com um cajado`)
        } else if (this.tipo === 'monge'){
            console.log(`O ${this.tipo} atacou com artes marciais`)
        } else if (this.tipo === 'ninja'){
            console.log(`O ${this.tipo} atacou com um shuriken`)
        }
}
}

let guerreiro = new Hero({nome: 'Guerreiro', idade: 30, tipo: 'guerreiro'})
let mago = new Hero({nome: 'Mago', idade: 25, tipo: 'mago'})
let monge = new Hero({nome: 'Monge', idade: 40, tipo: 'monge'})
let ninja = new Hero({nome: 'Ninja', idade: 20, tipo: 'ninja'})

monge.ataque()
