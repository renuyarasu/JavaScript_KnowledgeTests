// JavaScript | Knowledge Tests
// https://t.me/javascript_tests
console.clear();
/* 
let fruits = ['Apple', 'Banana', 'Avocado', 'Apricots', 'Blackberries', 'Blueberries'];
let result =
console.log(result); 
*/

// Test: 47 [December 26, 2021]

const uri = 'https://www.goodreads.com/';
const encoded = encodeURI(uri);

try {
    console.log(encoded);
} catch (e) {
    console.error(e);
}


// encodeURI() 🔥
/* 
The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing some characters with one, two, three, or four escape sequences representing the UTF-8 encoding of the character (the four escape sequences will only be used for characters consisting of two "surrogate" characters) .

The URI is assumed to be a complete URI, so the method does not encode reserved characters that have special meaning in the URI.

encodeURI replaces all characters except the following with the appropriate UTF-8 escape sequences

An example is shown in the picture. */