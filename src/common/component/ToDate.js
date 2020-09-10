import React from 'react';


function ToDate(props) {
    let {time}=props;
    let nowTime=Date.now();
    let newTime=new Date(time).getTime();
    let disTime=nowTime-newTime;
  //  console.log(time)
    if(disTime<60000){
        return "刚刚";
    }else if(disTime<3600000){
        return parseInt(disTime/60000)+"分钟之前";
    }else if(disTime<86400000){
        return parseInt(disTime/3600000)+"小时之前";
    }else if(disTime<604800000){
        return parseInt(disTime/86400000)+"天之前";
    }else {
        return time;
    }
    
}

export default ToDate;