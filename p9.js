function checknum(x, y, z) 
{
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
}

console.log(checknum(20, 200, 99));
console.log(checknum(50, 99, 19));
console.log(checknum(29, 39, 499));
console.log(checknum(65, 25, 599));