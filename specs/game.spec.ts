function eq(p: any, wn: string) {
  let ws: any = [
    { n: "espada", d: 10, a: ["Guerreiro", "Mago"] },
    { n: "lanca", d: 15, a: ["Guerreiro"] },
    { n: "arco", d: 12, a: ["Arqueiro"] }
  ];

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

describe('Game', () => {
  it.skip('should atk another player', () => {
    const player1 = { n: "Conan", c: "Guerreiro", h: 100, m: 0, w: null };
    const player2 = { n: "Merlin", c: "Mago", h: 80, m: 100, w: null };

    const sword = { n: "espada", d: 10, a: ["Guerreiro", "Mago"] };
    // atk(player1, player2);
    expect(player2.h).toBe(70);
  });

  it('should equip a valid weapon', () => {
    const player = { n: "Conan", c: "Guerreiro", h: 100, m: 0, w: null };
    eq(player, "espada");
    expect(player.w.n).toBe("espada");
    expect(player.w.d).toBe(10);
    expect(player.w.a).toEqual(["Guerreiro", "Mago"]);
  });

  it('should not equip an invalid weapon', () => {
    const player = { n: "Conan", c: "Guerreiro", h: 100, m: 0, w: null };
    eq(player, "besta");
    expect(player.w).toBe(null);
  });
  
  it('should not equip a weapon for wrong class', () => {
    const player = { n: "Legolas", c: "Arqueiro", h: 100, m: 0, w: null };
    eq(player, "lanca");
    expect(player.w).toBe(null);
  });
});
