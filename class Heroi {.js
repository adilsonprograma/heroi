class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }
        print(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
let heroi1 = new Heroi("Merlin", 43, "mago");
heroi1.atacar();        // o mago atacou usando magia

let heroi2 = new Heroi("Arthas", 30, "guerreiro");
heroi2.atacar();        // o guerreiro atacou usando espada

let heroi3 = new Heroi("Lee", 25, "monge");
heroi3.atacar();        // o monge atacou usando artes marciais

let heroi4 = new Heroi("Hanzo", 21, "ninja");
heroi4.atacar();        // o ninja atacou usando shuriken
