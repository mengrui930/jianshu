
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}