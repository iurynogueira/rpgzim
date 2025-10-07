export enum ClassType {
  Warrior = "Warrior",
  Mage = "Mage",
  Archer = "Archer"
}

export class Character {
  className: ClassType;
  name: string;
  health: number;
  mana: number;
  weapon: any;

  constructor(className: ClassType, name: string) {
    this.className = className;
    this.name = name;
    this.health = 100;
    this.weapon = null;
    this.mana = this.initialMana();
  }

  initialMana(): number {
    const mageMana = 60;
    return this.className === "Mage" ? mageMana : 0;
  }

  atack(target: Character, damage: number): void {}
}
