function lastdigit(x, y, z)
{
  if ((x > 0) && y > 0 && z > 0)
    {
     return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
   }
  else
    return false;
}

console.log(lastdigit(55,25,325));
console.log(lastdigit(-11,22,302));
console.log(lastdigit(90,-27,307));
console.log(lastdigit(10,20,-300));
