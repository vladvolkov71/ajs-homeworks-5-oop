import Bowman from '../class/Bowman';

test('Правильно создается объект', () => {
    const bowman = new Bowman('Rid');
    const correct = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: 'Rid',
        type: 'Bowman',

    };

    expect(bowman).toEqual(correct);
});