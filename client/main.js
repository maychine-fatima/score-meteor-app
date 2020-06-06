import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function () {
  let name = 'fati'
  let jsx = (
    <div>
      {/*i am a comment*/}
      <p>hi {name}</p>
      <p>coucou</p>
    </div>);
  ReactDOM.render(jsx, document.getElementById('app'));
});
