export function sortCharacters(charArray) {
    let res = charArray.sort((firstChar, secondChar) => secondChar.health - firstChar.health);
    return res;
}