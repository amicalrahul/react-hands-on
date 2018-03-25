﻿import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import axios from 'axios';
import CommentBox from './components/CommentBox';
import store from './stores/configureStore';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }
    componentDidMount() {

        store.subscribe(() => {
            this.setState({});
        });
        axios.get('/comments')
            .then((resp) => {
                store.dispatch({ type: "RECEIVE_COMMENTS", data: resp.data })
            })
            .catch();
    }
    render() {
        return (
            <div>
                <CommentBox authData={store.getState().data} url="/comments" submitUrl="/comments/new" pollInterval={5000} />
            </div>
        )
    }
}


render(<AppComponent />, document.getElementById('root'));
