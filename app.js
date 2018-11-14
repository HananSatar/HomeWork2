//count row of file
var fs=require('fs');
// filename=process.argv[2];

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
///4flower that begin with my name
function fname(){
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
console.log(fname());

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
/*var fs=require('fs');
var data=fs.readFileSync('flower.txt');
var c=data.toString().split('/n');
function WordCount(str) { 
    if(str.charAt(0)=="G")
    var data=fs.readFileSync('flower.txt');
    var c=data.toString().split('/n');
    return list=[str];
   // return c.split('/n').length.charAt(0)="S";
  }
  
  console.log(WordCount(c));
*/