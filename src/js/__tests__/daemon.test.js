import Daemon from '../class/Daemon';

test('Правильно создается объект', () => {
    const daemon = new Daemon('Hren');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1, 
        name: 'Hren',
        type: 'Daemon',
        
    };

expect(daemon).toEqual(correct);
});
