﻿import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            course: {title: ''}
        }
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    onTitleChange(e){
        const course = this.state.course;
        course.title  = e.target.value;
        this.setState({course: course});
    }
    render() {
        return (
            <div >
            <h1>Course</h1>
            <h2>Add Course</h2>
            <input type="text" onChange={this.onTitleChange}
                value={this.state.course.title} />
            <input type="submit"
                value="Submit"
                onClick={this.onClickSave} />
        </div >
        )
    }
}
export default connect((state, props) => {
    return {
        data: state.data
    }
})(CoursesPage);