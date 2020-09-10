import Http from './http';

export default function isLogin (data){
    return function(dispatch){
       return Http.post("/user/islogin",data).then(res=>{
           if(res.data.code==0){
                dispatch({
                    type:"LOGIN",
                    user:res.data.username
                });
              
           }
        })
        
    }
}