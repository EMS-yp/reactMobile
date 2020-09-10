import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tab from '../../common/component/tab';
import Course from './course';
import getWorks from '../../store/action/getworks';
import '../../common/css/index.css';
import Vip from './vip';
import Feature from './feature';
import Works from './works';
import Frame from '../../common/component/frame';
let imgData = [
    require("../../common/image/tab/img1.png"),
    require("../../common/image/tab/img2.png"),
    require("../../common/image/tab/img3.png"),
    require("../../common/image/tab/img4.png")
]
function Index(props) {
    let { dispatch } = props;
    function getWorksData() {
        return dispatch((getWorks()))

    }
    useEffect(() => {
        getWorksData()
    }, [])
    return (
        <Frame
            pullUp={true}
            getData={getWorksData}

        >
            <div>
                <Tab
                    data={imgData}
                    render={(data) => {
                        return <img src={data} />
                    }}
                />
                <section className="index_content">
                    <Course />
                    <Vip />
                    <Feature />
                    <Works {...props} />
                </section>
            </div>
        </Frame>
    )
}
export default connect(props => {
    return ({ ...props.works });
})(Index);