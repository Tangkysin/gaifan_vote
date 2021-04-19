export function get_vote_data(state) {
  return key => {
    return state.vote_data[key];
  };
}
