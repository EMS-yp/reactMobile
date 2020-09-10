function useBack(history){
    return ()=>{
        if(history.length>1){
            history.goBack();
        }else{
            history.push("/")
        }
    }
    }
function useInnerHeigth(){
    return window.innerHeight
}
export  {useBack,useInnerHeigth};