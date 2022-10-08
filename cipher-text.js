function caesar_enc() {
  var cs = document.getElementById('caesar').value;
  var key = parseInt(document.getElementById('key').value);
  console.log(key)
  
  // console.log("berhasil")
  let str_result = '';
  // console.log(cs.length)
  for (let i = 0; i < cs.length; i++) {
    if (cs[i] != ' ') {

      let ch = charToInt(cs[i]);
      console.log(ch)
      ch = (ch+ key) % 26;
      
      var chr = intToChar(ch);
      str_result += chr
    } else {
      str_result += " ";
    }
  }
  console.log(str_result)
  document.getElementById('caesar-result').value = str_result.toUpperCase();
}


function caesar_dec() {
  var cs = document.getElementById('cp-caesar').value.toLowerCase();
  var key = parseInt(document.getElementById('key-dec').value);
  
  // console.log("berhasil")
  let str_result = '';
  console.log(cs.length)
  for (let i = 0; i < cs.length; i++) {
    if (cs[i] != ' ') { // MESIR --> cs[0] = M, 

      let ch = charToInt(cs[i]);
      ch = (ch - key) % 26
      // console.log(ch)
      var chr = intToChar(ch); 
    } else { 
      str_result += " ";
    }
    str_result += chr
    console.log(str_result)
  }
  document.getElementById('caesar-dec-result').value = str_result.toUpperCase();
}


// ==================================== Convert Function ==============================
function charToInt(char) {
  const code = 'a'.charCodeAt(0); //code = 65
  // console.log(code);
  return char.charCodeAt(0) - code;
}

// References : https://bobbyhadz.com/blog/javascript-convert-integer-to-character#:~:text=To%20convert%20an%20integer%20to,character%20equivalent%20of%20the%20integer.

function intToChar(int) {
  const code = 'A'.charCodeAt(0);
  // console.log(code);
  return String.fromCharCode(code + int);
}
// =====================================================================================