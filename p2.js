function Arrays_sum(arr1, arr2) 
{
  var result = [];
  var k = 0;
  var x=0;

  if (arr1.length === 0) 
   return "array1 is empty";
  if (arr2.length === 0) 
   return "array2 is empty";   

  while (k<arr1.length && k<arr2.length) 
  {
    result.push(arr1[k] + arr2[k]);
    k++;
  }

  if(k<arr1.length-1 ){
      while(k<arr1.length){
        result.push(arr1[k]);
        k++;
      }
  }
  else{
    while(k<arr2.length){
        result.push(arr2[k]);
        k++;
      }
  }

  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));