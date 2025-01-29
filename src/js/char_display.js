export function sortCharacters(charArray) {
    let res = charArray.sort((firstChar, secondChar) => firstChar.health - secondChar.health);
    return res;
}