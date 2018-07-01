

function largestPrimeFactor(number) {
  if(number==2 || number==3){
    return number;
  }
  var i,j,num,prime;
  for(i=4;i<=number;i++){
    num=1;
    //checking it is a prime number or not
    if(i%2!=0){var m=i/2;
    for(j=2;j<=m;j++){
      if(i%j==0){
        num=0;
        break;
        }
    }}
  if(num==1 && number%i==0){
      prime=i;
  }
}

  return prime;
}
largestPrimeFactor(51475143)
