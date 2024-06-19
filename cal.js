function addNo(num){
    ans = document.getElementById('ans')
    lastchar=ans.innerHTML.substring(ans.innerHTML.length-1,);
        if((lastchar=="*" ||lastchar=="-" ||lastchar=="+" ||lastchar=="/" ) && (num=="+"||num=="-"||num=="*"||num=="/") ){

        }
        else{
            ans.innerHTML += num
        }
    
}
function clearAns(){
    ans=document.getElementById('ans')
    ans.innerHTML = ""
} 
function generateAns(){
    ans=document.getElementById('ans')
    finalAns=eval(ans.innerHTML)
    ans.innerHTML=finalAns;
    
}


