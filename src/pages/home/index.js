import React, {Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeWrapper, HomeLeft, HomeRight} from './style';
import axios from "axios";

class Home extends Component{
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt='' src="//upload-images.jianshu.io/upload_images/15684874-555e8ca6eb17bc68.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        axios.get('/api/home.json').then(() => {

        })
    }
}

export default Home;