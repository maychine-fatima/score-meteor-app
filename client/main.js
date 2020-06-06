import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
  {
    id: 1,
    name: 'fatima',
    score: 34
  },
  {
    id: 2,
    name: 'mohamed',
    score: 0
  },
  {
    id: 3,
    name: 'khadija',
    score: -12
  }
];

// {[<p key={1} >1</p>, <p key={2}>2</p>, <p key={3}>3</p>]}
const renderPlayers = (players) => {
  let numbers = [{ value: 1 }, { value: 4 }, { value: 5 }]

  return newnum = players.map((n) => {
    return <p key={n.id}>{n.name} : {n.score}</p>;
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
