import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course}/>
            <Total parts={course} />
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            { props.course.name }
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts.parts[0].name} ex={props.parts.parts[0].exercises} />
            <Part name={props.parts.parts[1].name} ex={props.parts.parts[1].exercises} />
            <Part name={props.parts.parts[2].name} ex={props.parts.parts[2].exercises} />
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            { props.parts.parts[0].exercises + props.parts.parts[1].exercises + props.parts.parts[2].exercises }
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.name} {props.ex}
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))