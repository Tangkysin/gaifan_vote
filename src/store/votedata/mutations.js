export function update_vote_data(state, data) {
  state.vote_data[data.key] = data.value;
}
