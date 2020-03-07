"use strict";

console.log('Javascript started for exercise is_vowel');


function is_vowel(str) {
    const LC_VOWELS = 'aeiou';
    return (-1 === LC_VOWELS.indexOf(str[0].toLowerCase()));
}

