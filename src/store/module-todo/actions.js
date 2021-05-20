export function addList ({ commit, state }, val) {
  let newList = [...state.lists]
  newList.push({...val, todos: []})

  commit('SET_LISTS', newList)
}
