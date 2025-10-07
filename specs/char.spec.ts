import { Character, ClassType } from "../domain/Character";

describe('should create a new character', () => {
  it('should create a warrior character', () => {
    const character = new Character(ClassType.Warrior, 'Conan');
    expect(character.name).toBe('Conan');
    expect(character.className).toBe(ClassType.Warrior);
  });

  it('should create a mage character', () => {
    const character = new Character(ClassType.Mage, 'Merlin');
    expect(character.name).toBe('Merlin');
    expect(character.className).toBe(ClassType.Mage);
    expect(character.health).toBe(100);
  });

  it('should create an archer character', () => {
    const character = new Character(ClassType.Archer, 'Legolas');
    expect(character.name).toBe('Legolas');
    expect(character.className).toBe(ClassType.Archer);
  });

  it('should create a new warrior with correct stats', () => {
    const character = new Character(ClassType.Warrior, 'Conan');
    expect(character.health).toBe(100);
    expect(character.mana).toBe(0);
  });

  it('should create a new archer with correct stats', () => {
    const character = new Character(ClassType.Archer, 'Legolas');
    expect(character.health).toBe(100);
    expect(character.mana).toBe(0);
  });

  it('should create a new mage with initial mana', () => {
    const character = new Character(ClassType.Mage, 'Merlin');
    expect(character.health).toBe(100);
    expect(character.mana).toBe(60);
  });

  it('should create a new character without weapons', () => {
    const character = new Character(ClassType.Mage, 'Merlin');
    expect(character.weapon).toBeNull();
  });
});
