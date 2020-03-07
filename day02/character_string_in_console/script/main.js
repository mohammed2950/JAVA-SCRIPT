"use strict";

console.log('Javascript started');


const SENTENCE = 'The strength of JavaScript is that you can do anything. The weakness is that you will.';

console.log('The whole sentence:', SENTENCE);
console.log('The length of the string:' , SENTENCE.length);

console.log('The position of the word "is":', SENTENCE.indexOf('is'));
console.log('The position of the second word "is" (skipping first one):'
, SENTENCE.indexOf('is',SENTENCE.indexOf('is')+1));

console.log('The position of the last \'is\':', SENTENCE.lastIndexOf('is'));
console.log('The last sentence only:', '('+SENTENCE.substr(SENTENCE.indexOf('.')+1).trim()+')');
console.log('The 10 characters starting from the 17th character:', SENTENCE.substr(16, 10));
console.log('The number of words in the whole phrase:', SENTENCE.split(' ').length);
console.log('The 61st character:', SENTENCE.charAt(60));
console.log('Replace \'you\' with \'I\' in the whole phrase:', SENTENCE.replace('you', 'I').replace('you', 'I'));
