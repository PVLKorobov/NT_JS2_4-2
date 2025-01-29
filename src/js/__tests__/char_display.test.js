import { sortCharacters } from '../char_display';


test('should return sorted array', () => {
    let inputArray = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];
    let expectedArray = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    let result = sortCharacters(inputArray);
    expect(result).toEqual(expectedArray);
})

test('should return the same array', () => {
    let inputArray = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    let result = sortCharacters(inputArray);
    expect(result).toEqual(inputArray);
})