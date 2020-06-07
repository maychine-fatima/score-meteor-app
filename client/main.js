import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players'

Tracker.autorun(function () {
  console.log('list', Players.find().fetch())
})
// setTimeout(function () {
//   console.log('list', Players.find().fetch())
// }, 1000);



// {[<p key={1} >1</p>, <p key={2}>2</p>, <p key={3}>3</p>]}
const renderPlayers = (players) => {
  let numbers = [{ value: 1 }, { value: 4 }, { value: 5 }]

  return newnum = players.map((n) => {
    return <p key={n.id}>{n.name} has {n.score} point(s)</p>;
  })


  //return [<p key={1} >1</p>, <p key={2}>2</p>, <p key={3}>3</p>];

}

Meteor.startup(() => {
  let name = 'fati'
  let jsx = (
    <div>
      lol
      {renderPlayers(players)}
    </div>);
  ReactDOM.render(jsx, document.getElementById('app'));
});
