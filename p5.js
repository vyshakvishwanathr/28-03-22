function removecharacter(str, char_pos) 
 {
     n1=str.substring(0,char_pos);
     n2=str.substring(char_pos+1,str.length);
     return(n1+n1);
 }
 console.log(removecharacter("substring",0));
 console.log(removecharacter("substring",2));
 console.log(removecharacter("substring",5));
 console.log(removecharacter("substring",9));