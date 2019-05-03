import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Experience extends Component {
    render() {
        return (
          <div>
            <h3>Work Experience</h3>
              <Row>
                    <h5>FULL-STACK SOFTWARE ENGINEER, CONTRACT</h5>
                    JourneyTellr | March 2019 - Present <br />
                    -Collaborated with five other developers, including the
            company CTO, to bring the app to proof-of-concept. <br />
                    -Implemented more features and fixed bugs within the app.{" "}
                    <br />
            -Wrote unit tests for built features.
              </Row>
              <Row>
                    <h5>FULL-STACK SOFTWARE DEVELOPMENT STUDENT</h5>
                    Prime Digital Academy | October 2018 - March 2019 <br />
                    -Acquired foundational software engineering skills.
            <br />
                    -Worked with other developers and instructors to manage and
            execute tasks. <br />
                    <br />
              </Row>
              <Row>
                  <Col span={12}>
                        <b>Solo Project: </b> ​<i>Learn Russian</i> <br />
                        ● There are many ways to learn languages. Learn Russian
            incorporates flashcards and audio. <br /> ● Users create a
                        profile and are able to select from pre-made thematic decks
                        or create their own. Users can create, store, and review
                        flashcards with image upload. This allows users to reduce
                        their reliance on physical flashcards or vocabulary lists,
                        review their stats, and easily build their language skills.
            <br /> ● Incorporates JavaScript’s React framework, Redux,
            Sagas, Heroku, PostgreSQL, and Node.js. <br />
                        <br />
                  </Col>
                  <Col span={12}>
                        <b>Group Project: </b> <i>JourneyTellr</i> <br />● The startup JourneyTellr approached my team
                to write an application that allows users to create
                continual and authentic content produced by and for
            employees within large companies. <br />● JourneyTellr is a
                        full-stack, mobile friendly web application for
                        enterprise-use and supports the creation and collaboration
                        of stories about employees and their company for eventual
            use in marketing and recruitment. <br />● Technologies used:
                        React.js, Redux.js, Node.js, Express,, Heroku, PostgreSQL,
                        Amazon s3 buckets, and Ant Design.
                  </Col>
              </Row>
            
           
        
          </div>
        );
    }
}

export default Experience