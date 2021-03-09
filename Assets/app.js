/*each variables below are storing the value of the ASCII code character.
Using two different type to retrieve data from Unicode*/

lowerCase = getChar('a'.charCodeAt(0), 'z'.charCodeAt(0)); //console.log(lowerCase);
upperCase = getChar('A'.charCodeAt(0), 'Z'.charCodeAt(0)); //console.log(upperCase);
numeric = getChar(48, 57); //console.log(numeric);
specialChar = getChar(33, 47).concat(getChar(58, 64)).concat(getChar(91, 96)).concat(getChar(123, 126)); //console.log(specialChar);


// Execution of button click  
document.querySelector('.btn').addEventListener('click', function(){

  // Decalration of text box
   let textInput = document.getElementById('textInput');

   // Prompt user to enter a length value
   let userInput = prompt("Enter a length for your password"); 

  // If user does not enter a value, or the value is less than 8 and higher than 128, terminate the application.
  if(isNaN(userInput)){
    alert("Please enter a number to continue!");
    return;
  }
  if(userInput === ''){
    alert("A value should be entered!");
    return;
  }
  if(!userInput || userInput < 8 || userInput >128){
    alert("Please enter a length between 8 and 128 characters.");
     return;
  }

   // Prompt user to confirm if lowercase, uppercase, number, and symbol should be included.
   let includeLower = confirm("Would you like to include lowercase?");
   let includeUpper = confirm("Would you like to include uppercase?");
   let includeNum = confirm("Would you like to include numbers?");
   let includeSymb = confirm("Would you like to include symbols?");

  // Value entered by user is displayed as a password in the text box. 
  textInput.innerText = promptUser(userInput, includeLower, includeUpper, includeNum, includeSymb);
  
});

/* Function to retrieve the first and last Unicode from the character set.
 The value are stored in an array called characters  */
function getChar(first, last){
  const characters = [];
  for(i = first; i <= last; i++){
    String.fromCharCode.apply(characters.push(i));
    }
  return characters;
}

  /* Function to store user input from prompt in an array called charArray.
  An empty array is declared. Each time the user is prompted to enter/include a character set, this gets
  stored and appended to the next charactr set */
  let promptUser = function (userInput, includeLower, includeUpper, includeNum, includeSymb){
  
  let charArray = [];
  if(includeLower) { charArray = charArray.concat(lowerCase);}
  if(includeUpper) { charArray = charArray.concat(upperCase);}
  if(includeNum) { charArray = charArray.concat(numeric);}
  if(includeSymb) { charArray = charArray.concat(specialChar);}
  
  const passwordChar = [];
  for(let i = 0; i < userInput; i++){
    const someChar = charArray[Math.floor(Math.random() * charArray.length)];
    passwordChar.push(String.fromCharCode(someChar));
  }
  return passwordChar.join('');
}

