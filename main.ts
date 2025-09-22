let a: any = { n: "Conan", c: "Guerreiro", h: 100, m: 0, w: null };
let b: any = { n: "Merlin", c: "Mago", h: 100, m: 100, w: null };
let xx: any = { n: "Legolas", c: "Arqueiro", h: 100, m: 0, w: null };

let ws: any = [
  { n: "espada", d: 10, a: ["Guerreiro", "Mago"] },
  { n: "lanca", d: 15, a: ["Guerreiro"] },
  { n: "arco", d: 12, a: ["Arqueiro"] }
];

let ss: any = [
  { n: "fire", mc: 20, d: 25 },
  { n: "ice", mc: 15, d: 18 }
];

// lista de monstros
let monstros: any = [
  { n: "lobo", h: 40, d: 6 },
  { n: "goblin", h: 30, d: 4 },
  { n: "dragao", h: 200, d: 25 }
];

let monstroAtual: any = null;

function eq(p: any, wn: string) {
  for (let i = 0; i < ws.length; i++) {
    if (ws[i].n === wn) {
      if (ws[i].a.indexOf(p.c) === -1) {
        console.log(p.n + " não pode usar " + wn);
        return;
      }
      p.w = ws[i];
      console.log(p.n + " equipou " + wn);
      return;
    }
  }
  console.log("Arma nao existe");
}

function atk(p1: any, p2: any) {
  if (!p1.w) {
    console.log("sem arma");
    return;
  }
  p2.h -= p1.w.d;
  if (p2.h < 0) p2.h = 0;
  console.log(p1.n + " atacou " + p2.n + " e causou " + p1.w.d + " de dano, vida de " + p2.n + " agora é " + p2.h);
}

function atk2(p1: any, p2: any) {
  if (!p1.w) {
    console.log("sem arma");
    return;
  }
  p2.h -= p1.w.d;
  if (p2.h < 0) p2.h = 0;
  console.log(p1.n + " atacou " + p2.n + " e causou " + p1.w.d + " de dano, vida de " + p2.n + " agora é " + p2.h);
}

function sp(c: any, t: any, sn: string) {
  for (let i = 0; i < ss.length; i++) {
    if (ss[i].n === sn) {
      if (c.c !== "Mago") {
        console.log("classe errada");
        return;
      }
      if (c.m < ss[i].mc) {
        console.log("mana insuficiente");
        return;
      }
      c.m -= ss[i].mc;
      t.h -= ss[i].d;
      if (t.h < 0) t.h = 0;
      console.log(c.n + " lançou " + sn + " em " + t.n + " causando " + ss[i].d + " de dano. Vida " + t.n + ": " + t.h);
      return;
    }
  }
  console.log("magia inexistente");
}

function heal(p: any) {
  if (p.c === "Mago") {
    p.h += 20;
    p.m -= 10;
    console.log(p.n + " curou e agora tem vida " + p.h + " e mana " + p.m);
  } else if (p.c === "Guerreiro") {
    p.h += 10;
    console.log(p.n + " descansou e agora tem vida " + p.h);
  } else if (p.c === "Arqueiro") {
    p.h += 5;
    p.m += 2;
    console.log(p.n + " meditou e agora tem vida " + p.h + " e mana " + p.m);
  }
}

// --- Features novas: Monstro ---

function aparecerMonstro() {
  let i = Math.floor(Math.random() * monstros.length);
  monstroAtual = { ...monstros[i] };
  console.log("Um " + monstroAtual.n + " apareceu! Vida: " + monstroAtual.h);
}

function atacarMonstro(p: any) {
  if (!monstroAtual) {
    console.log("Nenhum monstro!");
    return;
  }
  if (!p.w) {
    console.log(p.n + " tentou atacar o monstro mas não tem arma!");
    return;
  }
  monstroAtual.h -= p.w.d;
  if (monstroAtual.h < 0) monstroAtual.h = 0;
  console.log(p.n + " atacou o " + monstroAtual.n + " e causou " + p.w.d + " de dano. Vida do monstro: " + monstroAtual.h);

  if (monstroAtual.h === 0) {
    console.log("O " + monstroAtual.n + " foi derrotado!");
    monstroAtual = null;
  } else {
    // contra ataque
    p.h -= monstroAtual.d;
    console.log("O " + monstroAtual.n + " revidou e causou " + monstroAtual.d + " de dano em " + p.n + ". Vida atual: " + p.h);
  }
}

// --- MAIN ---
function main() {
  console.log("Estado inicial", a, b, xx);

  eq(a, "espada");
  eq(b, "espada");
  eq(xx, "lanca"); // equipa lanca no legolas

  atk(a, b);
  atk2(b, a);

  sp(b, a, "fire");
  sp(xx, a, "fire");

  heal(a);
  heal(b);
  heal(xx);

  // novo fluxo com monstro
  aparecerMonstro();
  atacarMonstro(a);
  atacarMonstro(b);
  atacarMonstro(xx);

  console.log("Fim do jogo", a, b, xx);
}

main();
