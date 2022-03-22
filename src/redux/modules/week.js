// widgets.js

// Actions
const MAIN = "MAIN";
const UPDATE = "UPDATE";

const random = [];
for (let i = 0; i < 7; i++) {
  random.push(Math.floor(Math.random() * 6));
}

const initialState = {
  week: ["일", "월", "화", "수", "목", "금", "토"],
  random,
};

// Action Creators
export function showMain(week) {
  return { type: MAIN, week };
}

export function updateStar(star, index) {
  console.log(star, index);
  return { type: UPDATE, star, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "MAIN": {
      return state;
    }
    case "UPDATE": {
      const updateArr = state.random.map((el, i) => {
        if (i === parseInt(action.index)) {
          return action.star;
        } else return el;
      });
      return { ...state, random: updateArr };
    }
    default:
      return state;
  }
}
