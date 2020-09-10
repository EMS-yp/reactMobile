import React,{useEffect,useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Frame from '../../common/component/frame';
import getWork from '../../store/action/getWork';
import getMessageList from '../../store/action/getMessageList';
import '../../common/css/miiaov.css';
import Skeleton from '../../common/component/skeleton';
import Main from './main';
import Message from './message';
function Work(props){
    let {data,loading,dispatch,match,user,history}=props;
    let {id}=match.params;
    let [showMessage,setShow]=useState(false)
    function getMessageData(){
        return  dispatch(getMessageList(id))
    }
    useEffect(()=>{
        dispatch(getWork(id))
        getMessageData()
        return ()=>{
            dispatch({
                type:"WORK_RESET"
            });
            dispatch({
                type:"MESSAGE_RESET"
            })
        }
    },[])
    return(<div>
        <Frame
            pullUp={true}
            getData={getMessageData}

        >
            {
                loading?<Skeleton />:(<Main 
                    data={data}
                />)
            }
        </Frame>
        <footer 
            className="miiapv_footer"
            onClick={()=>{
                if(user){
                    setShow(true)
                }else{
                    history.push("/login")
                }
            }}
        >回复本帖</footer>
        <Message 
            show={showMessage}
            setShow={setShow}
            id={id}
        />
    </div>)
}
export default withRouter( connect(state=>({...(state.work),
    user:state.getUser
}))(Work));