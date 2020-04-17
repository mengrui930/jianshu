import React, {PureComponent} from "react";
import {WriterWrapper, WriterItem, WriterInfo} from "../style";
import {connect} from 'react-redux';


class Writer extends PureComponent{
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                {
                    list.map((item) => {
                        return(
                            <WriterItem key={item.get('id')}>
                                <img alt='' className='writer-pic' src={item.get('imgUrl')} />
                                <WriterInfo>
                                    <p className='name'>{item.get('name')}</p>
                                    <p className='word-length'>{item.get('wordLength')}</p>
                                </WriterInfo>
                            </WriterItem>
                        );
                    })
                 }
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
});

export default connect(mapState, null)(Writer);