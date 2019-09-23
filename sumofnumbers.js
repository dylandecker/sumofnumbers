function sumFor(list) {
  let sum = 0;
  list.forEach((item) => sum += item);
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let index = 0;
  while (index < list.length) {
    sum += list[index];
    index++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {return memo + num ;}, 0);
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
console.log(sumTheSimpleWay([1, 2, 3]));
