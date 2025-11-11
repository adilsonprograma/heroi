// Lê o nível de XP
let xp = parseInt(gets());
let nivel = "";

// Estruturas condicionais em cascata para classificar o herói
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe o nível do herói conforme a classificação
print("O Herói de XP " + xp + " está no nível " + nivel + "!");
