var arr=[]
function changeOne(ele,n){
    if(arr.length==0){
    arr.push(ele)
    ele.src=`${n}.gif`
    }else if((ele.getAttribute("class")==n&& arr[0].getAttribute("class")==n)&& arr.length<2){
        ele.src=`${n}.gif` 
        arr.push(ele)
    }else if((ele.getAttribute("class")!= arr[0].getAttribute("class")) && arr.length<2){
            ele.src=`${n}.gif` 
            arr.push(ele)
            setTimeout(function(){
            arr[0].setAttribute("src",'moon.gif')
            arr[1].setAttribute("src",'moon.gif')
            location.reload()
            },500)        
    }
    }