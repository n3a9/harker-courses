import React, { Component } from 'react';

import Login from './Login';
import ReviewForm from './ReviewForm';
import CourseInfo from './CourseInfo';

// Course page
// Will be opened with a parameter carrying the course ID, from which it will
// pull the corresponding reviews from Firebase.
export default class CoursePage extends Component {
  static propTypes = {
    routeParams: React.PropTypes.element.isRequired,
  };

  constructor(props) {
    super(props);
    this.courseId = props.routeParams.courseId;
  }

  render() {
    return (
      <div>
        <Login />
        <CourseInfo course={this.courseId} />
        <ReviewForm course={this.courseId} />
      </div>
    );
  }
}
