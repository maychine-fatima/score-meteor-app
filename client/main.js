import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  let name = 'fati'
  let jsx = (
    {/*i am a comment*/ }
    < div >
    <p>hi {name}</p>
    <p>coucou</p>
    </div >)
ReactDOM.render(jsx, document.getElementById('app'));
});
