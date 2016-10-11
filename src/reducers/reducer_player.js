import { FETCH_PLAYER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PLAYER:
      return [ action.payload.data, ...state ];
  }
  return state;
}