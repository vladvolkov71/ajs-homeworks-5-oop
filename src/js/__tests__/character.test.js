import Character from '../class/Character';
import Bowman from "../class/Bowman";

test('Ошибка в name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow();
});

test('Ошибка в type', () => {
    expect(() => new Character('Alex', 'Bow')).toThrow();
});

test('Правильно создается объект', () => {
    const warior = new Character('Alex', 'Bowman');
    const correct = {
        attack: undefined, defence: undefined, health: 100, name: 'Alex', type: 'Bowman', level: 1
    };

expect(warior).toEqual(correct);
});

test('Правильно увеличивается уровень', () => {
    const warior = new Bowman('Rid')
    warior.levelUp();
    const correct = {
        attack: 30, defence: 30, health: 100, name: 'Rid', type: 'Bowman', level: 2
    };
    expect(warior).toEqual(correct);
})

test('Правильно наносится урон', () => {
    const warior = new Bowman('Rid');
    warior.damage(10);
    const correct = {
        attack: 25, defence: 25, health: 92.5, name: 'Rid', type: 'Bowman', level: 1
    };
    expect(warior).toEqual(correct);
})

test('Не увеличивает уровень, если health = 0', () => {
    const bowman = new Bowman('Rid');
    bowman.damage(200);
    expect(bowman.health).toBe(0);
    expect(() => bowman.levelUp()).toThrow();
})

test('Не наносит урон, если health = 0', () => {
    const bowman = new Bowman('Rid');
    bowman.damage(200);
    expect(bowman.health).toBe(0);
    expect(() => bowman.damage(10)).toThrow();
})