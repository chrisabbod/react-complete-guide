import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    //Runs all the time because it combines componentDidMount() and componentDidUpdate()
    useEffect(() => {
        console.log('[Cockpit.js] useEfect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
    }, []); 
    //To control when the statement shows add a second argument in useEffect
    //This array points to all the data used in the effect and reruns useEffect when one of those dependencies changes
    //[] an empty array tells useEffect to rerun when a dependency changes. If there are none then it only runs once.

    //You can have as many use effects as you want for different situations

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;