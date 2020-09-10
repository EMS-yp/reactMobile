import React,{useEffect,useState} from 'react';
import http from '../../store/action/http';
import {Link,withRouter} from 'react-router-dom';
import isLogin from '../../store/action/islogin';
import loginOut from '../../store/action/loginout';
import {connect} from 'react-redux';
import {useBack} from '../hook/index';
function Header (props){
   const back=useBack(props.history);
   const path=props.location.pathname;
  const {user,changeShow} =props;
  const [isBtnShow,setBtnShow]=useState();
 // console.log(props);
  useEffect(()=>{
   props.dispatch(isLogin());
  },[])
  function getUser(){
    if(path==="/login"){
        return ""   
    }
    if(user){
        return(<span className="header-btn-right">
        <span 
        className=" header-user"
        onClick={()=>{
            setBtnShow(!isBtnShow)
        }}
        >{user}</span> 
        <span 
        className="header-logout-btn" 
        style={{
                display:isBtnShow?"block":"none"
            }}
        onClick={()=>{
            props.dispatch(loginOut());
        }}>退出</span>
         </span>) 
    }
   return <Link className="user" to="/login"  />
}
    http.post(
        "/lecturer/lists?page=1&rows=20",
        {
            order:"desc",
            sort:"id",
            category_id:1,
            recommend:1
        }
    ).then((res)=>{
        return res.data;
    }).then((data)=>{
        
    })
    return(
        <header id="header">
            <nav className="menu">
            {path==="/login"?<a  
            className="header-btn-left iconfont icon-back"
            onClick={()=>{
                back();
            }}
            ></a>
            : <a  
            className="header-btn-left iconfont icon-hycaidan"
            onClick={()=>{
                changeShow()  
            }}
             ></a>}
            </nav>
            <h1 className="logo"> miaov.com</h1>
            {getUser()}
        </header>
    )
}

export default connect(state=>{
    return {user:state.getUser}
})(withRouter(Header))  ;