
const SET_FRIENDS = 'SET_FRIENDS';
export const setFriendsAction = friends => ({ type: SET_FRIENDS, data: friends });

const CLEAR_FRIENDS = 'CLEAR_FRIENDS';
export const clearFriendsAction = () => ({ type: CLEAR_FRIENDS });

const DELETE_FRIEND = 'DELETE_FRIEND';
export const deleteFriendAction = id => ({ type: DELETE_FRIEND, data: id });

const ADD_FRIEND = 'ADD_FRIEND';
export const addFriendAction = location => ({ type: ADD_FRIEND, data: location });
