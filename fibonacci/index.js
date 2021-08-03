'use strict';
const x = document.querySelector('.submit');
const y = document.querySelector('.data');
var N;

x.addEventListener('click', function () {
  // function mul_matrix(m1, m2) {
  //   return (
  //     [
  //       m1[0][0] * m2[0][0] + m1[0][1] * m2[1][0],
  //       m1[0][0] * m2[0][1] + m1[0][1] * m2[1][1],
  //     ],
  //     [
  //       m1[1][0] * m2[0][0] + m1[1][1] * m2[1][0],
  //       m1[1][0] * m2[0][1] + m1[1][1] * m2[1][1],
  //     ]
  //   );
  // }
  // function mul_metrix_1(m1, m2) {
  //   return (
  //     m1[0][0] * m2[0] + m1[0][1] * m2[1], m1[1][0] * m2[0] + m1[1][1] * m2[1]
  //   );
  // }
  // function pow_matrix(m, n) {
  //   if (n === 1) return m;
  //   else {
  //     if (n % 2 === 0) {
  //       var a = pow_matrix(m, n / 2);
  //       return mul_matrix(a, a);
  //     } else return mul_matrix(pow_matrix(m, n - 1), m);
  //   }
  // }
  // function fib(n) {
  //   if (n <= 2) return 1;
  //   let a = [
  //     [1, 1],
  //     [1, 0],
  //   ];
  //   var an = pow_matrix(a, n);
  //   console.log(an);

  //   var pair_0 = [1, 1];
  //   var pair_n = mul_metrix_1(an, pair_0);
  //   return pair_n[1];
  // }

  N = document.querySelector('.task').value;

  function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  y.value = fib(N);
});
