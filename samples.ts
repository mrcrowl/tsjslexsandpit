
function whatever() {
  let abc: number = 123 // okay to be let, because it's reassigned below
  if (console.log) {
    abc = 0
  }
  return abc
}

function notWhatever() {
  let abc: number = 123 // should be a const
  return abc
}

function tooManyVarsSameLine() {
  var a, b, c, d = 5 
}
