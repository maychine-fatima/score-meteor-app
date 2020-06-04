import { Meteor } from 'meteor/meteor';
import { add } from './../imports/utils';

console.log(add(1, 6));

Meteor.startup(() => {
  // code to run on server at startup
});
