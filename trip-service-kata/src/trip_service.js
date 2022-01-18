"use strict";

const UserSession = require("./user_session");
const TripDAO = require("./trip_dao");
const UserNotLogInException = require('./user_not_log_in_exception');

class TripService {
  /**
   * @throws UserNotLogInException
   * @returns {Trip[]}
   */
  getTripsByUser(user) {
    let tripList = [];
    let loggedUser = UserSession.getLoggedUser();
    let isFriend = false;
    if (loggedUser != null) {
      let friends = user.getFriends();
      for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        if (friend == loggedUser) {
          isFriend = true;
          break;
        }
      }
      if (isFriend) {
        tripList = TripDAO.findTripsByUser(user);
      }
      return tripList;
    } else {
      throw new UserNotLogInException();
    }
  }
}

module.exports = TripService;
