
import { Players } from './../imports/api/players';

Meteor.startup(function () {
  // Players.insert({
  //   name: 'khadija',
  //   scor: 34
  // })

  console.log(Players.find().fetch())
})