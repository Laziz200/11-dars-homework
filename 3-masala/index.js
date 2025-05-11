let s="    fly me    to   the moons";
function sozlarSoni(s) {
    let sozlar = s.trim().split(" ").filter(soz => soz !== "");
    console.log(sozlar);
    return sozlar.length;
}

let str = "Salom Dunyo  Qalesan";
console.log(sozlarSoni(s)); 