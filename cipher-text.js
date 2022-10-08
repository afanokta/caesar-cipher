function caesar_enc() {
  var cs = document.getElementById('caesar').value;

  // console.log("berhasil")
  let str_result = '';
  console.log(cs.length)
  for (let i = 0; i < cs.length; i++) {
    if (cs[i] != ' ') {

      let ch = charToInt(cs[i]);
      if (ch >= 23) {
        ch = Math.abs((ch + 3) - 26)
      } else {
        ch += 3 
      }
      // console.log(ch)
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

  // console.log("berhasil")
  let str_result = '';
  console.log(cs.length)
  for (let i = 0; i < cs.length; i++) {
    if (cs[i] != ' ') { // MESIR --> cs[0] = M, 

      let ch = charToInt(cs[i]);
      if (ch <= 2) {
        ch = (ch - 3) + 26
      } else {
        ch -= 3
      }
      // console.log(ch)
      var chr = intToChar(ch);
      str_result += chr
    } else {
      str_result += " ";
    }
  }
  console.log(str_result)
  document.getElementById('caesar-dec-result').value = str_result.toUpperCase();
}

function charToInt(char) {
  const code = 'a'.charCodeAt(0); //code = 65
  // console.log(code);
  return char.charCodeAt(0) - code;
}

function intToChar(int) {
  const code = 'A'.charCodeAt(0);
  // console.log(code);
  return String.fromCharCode(code + int);
}