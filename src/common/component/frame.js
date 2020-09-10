import '../css/common.css';
import '../css/reset.css';
import React,{useState,useEffect,useRef} from 'react';
import BScroll from 'better-scroll';
import {useInnerHeigth} from '../hook/index';
import Header from './header';
import Menu from './menu';
function Frame(props){
    const [showMenu,setShowMenu]=useState(false);
    const innerH=useInnerHeigth();
    let{pullUp,getData}=props;
    let wrap=useRef(null);
    function changeShow(){
        setShowMenu(!showMenu)
    }
    function menuHide(){
        setShowMenu(false)
    }
    useEffect(()=>{
     window.pageScroll=new BScroll(wrap.current,{
            preventDefaultException:{
                tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
                className:/(^|\s)work_a(\s|$)/
            },
            pullUpLoad:pullUp?{threshold:200}:false
        });
        window.pageScroll.on("pullingUp",()=>{
            getData().then(res=>{
                if(res){
                   window.pageScroll.finishPullUp();
                   window.pageScroll.refresh()
                }else{
                    window.pageScroll.closePullUp()
                }
            })
        })
        return ()=>{
            window.pageScroll=null;
        }
    },[])

    return(<div>
        <Header 
            changeShow={changeShow}
         />
         <Menu 
             menuHide={menuHide}
         />
        <div id="main" 
             style={{
                transform:`translateX(${showMenu?4.5:0}rem)`,
                height:innerH
            }}
            onTouchStart={menuHide}
        >
        <div 
        className="pageWrap"
        ref={wrap}
        >
        <div>
        {props.children}
        </div>
        </div>
        </div>
    </div>)
}

export default Frame;