module.exports = function solveEquation(equation) {
  const str = equation.split(" ");
  const a = Number(str[0]);
  const b = Number(str[3]+str[4]);
  const c = Number(str[7]+str[8]);
  const d = Math.pow(b , 2) - (4*a*c);
  const x1 = Math.round((-b + Math.sqrt(d))/(2*a));
  const x2 = Math.round((-b - Math.sqrt(d))/(2*a));
  const arr = [x1,x2];
  arr.sort(function(a, b) {
    return a - b;
  })
  return arr;
}
