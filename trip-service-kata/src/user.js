'use strict';

export default class User {
  constructor (name) {
    this.name= name;
    this.trips = [];
    this.friends = [];
  }

  addFriend(friend){
    this.friends.push(friend)
  }

  getFriends (){
    return this.friends;
  }

  addTrip (trip) {
    this.trips.push(trip)
  }

  getTrips(){
    return this.trips;
  }
};
