const initialState = [];

function getGenreStats(state = initialState, action) {
  
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [
        ...state,
        action.payload
      ];
    }
    default: {
      return state;
    }
  }
}

module.exports = { reducer };