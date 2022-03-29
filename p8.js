function fb(str)
 {
  if (str.length>=3)
   {
   str_len = 3;

  back = str.substring(str.length-3);
   return back + str + back;
 }
   else
     return false;
 }
console.log(fb("nit"));
console.log(fb("ni"));
console.log(fb("nith"));
console.log(fb("nithin"));