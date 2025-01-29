import { sortCharacters } from '../char_display';


describe('char list sort function', () => {
    test.each([
        [
            [
                {name: 'мечник', health: 10},
                {name: 'маг', health: 100},
                {name: 'лучник', health: 80},
            ],
            [
                {name: 'маг', health: 100},
                {name: 'лучник', health: 80},
                {name: 'мечник', health: 10},
            ]   
        ],
        [
            [
                {name: 'маг', health: 100},
                {name: 'лучник', health: 80},
                {name: 'мечник', health: 10},
            ],
            [
                {name: 'маг', health: 100},
                {name: 'лучник', health: 80},
                {name: 'мечник', health: 10},
            ]
        ]
    ])('should return sorted list of char objects', (unsortedList, expectedList) => {
        expect(sortCharacters(unsortedList)).toEqual(expectedList);
    });
});