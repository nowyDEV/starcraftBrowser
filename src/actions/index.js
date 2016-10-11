import axios from 'axios';

// from http://aligulac.com/about/api/
// To facilitate easier searching by name (aliases, etc.)
// we have a different URL endpoint: /search/json/?q=query
// in order to get all the info about player we need 2 requests (first by name, second by id

const API_KEY='ZZh2G5WHN7U59vGxgwFK';
const GET_ID_ROOT_URL = 'http://aligulac.com/search/json/?q=';
const GET_DETAILS_ROOT_URL = `http://aligulac.com/api/v1/player/?format=json&apikey=${API_KEY}&id=`;

export const FETCH_PLAYER = 'FETCH_PLAYER';

export function fetchPlayer(player_name) {
  const player_url = `${GET_ID_ROOT_URL}${player_name}`;
  const player_details = axios.get(player_url).then(response => {
    const details_url = `${GET_DETAILS_ROOT_URL}${response.data.players[0].id}`;
    return axios.get(details_url);
  });

  return {
    type: FETCH_PLAYER,
    payload: player_details
  };
}
