// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.


function printerError(s) {
    var err = 0
    for (let i = 0; i < s.length; i++) {
      if (s[i] < "a" || s[i] > "m") {
        err++
      }
    }
    return(`${err}/${s.length}`)
  }