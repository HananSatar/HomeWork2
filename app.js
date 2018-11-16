//count row of file
var fs=require('fs');
let _=require('underscore');
 var data=fs.readFileSync('flower.txt');
 var res=data.toString().split('\n').length;
 console.log("count num of row=",res);

 //count NUM of flower not start with "s"
 function totalWordCount() {
  // var l1=[];
  var str =data.toString().split('\n');
  var total = 0;

  for (var i = 0; i < str.length-1; i++)
    if (str[i].charAt(0)!="S") { 
     total = total+1;
    /// l1=[str];
  }
  total = total+1; 
  return total;
}
console.log("count NUM of flower not start with 's'",totalWordCount());

// flower name that start with letter 'S' 
 res=data.toString().split('\n');
let Start_with_S = _.filter(res, (element) => {
  return element.startsWith("S");
});
console.log("flower name that start with letter 'S' : " + Start_with_S);

// flower name that start with letter 'H' 
res=data.toString().split('\n');
let Start_H = _.filter(res, (element) => {
  return element.startsWith("H");
});
console.log("flower name that start with letter 'H' : " + Start_H);
//list flower that length =5
var l = _.filter(res, function(flower){ return flower.length==5; });
console.log("5-List all the flower the name length is 5 \n" + l)
/////**5 count flower name length 5**/
function totallenth() {
  //var l1=[str];
 var str =data.toString().split('\n');
 var totalSoFar = 0;

 for (var i = 0; i < str.length-1; i++)
   if (str[i].length==5) { 
    totalSoFar = totalSoFar+1;
  
 
 }
 totalSoFar = totalSoFar+ 1;
 return totalSoFar;
}
console.log("count flower name length 5=",totallenth())
  
/* function fname(){
  var str=data.toString().split('/n');
  let sname=[];
  for(var i=0;i<str.length-1;i++){
  //sname[i]=str[i];
  if(sname=(str[i].charAt(0).split('/n')=="H"))
  { 
    str[i]= sname[i];
  }
  sname[i]=sname[i]+1;
  }
  console.log(sname[i])
  //sname[i]=sname[i]+1;
   // return console.log(sname);
  return sname[i];
  }
console.log(fname());*/


