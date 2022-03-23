// widgets.js

// Actions
const MAIN = "MAIN";
const UPDATE = "UPDATE";

const random = Array.from({ length: 7 }, (val) =>
  Math.floor(Math.random() * 6)
);

console.log("처음 redux에 담긴 난수 배열: ", random);

const initialState = {
  week: ["일", "월", "화", "수", "목", "금", "토"],
  random,
};

// Action Creators
export function showMain(week) {
  return { type: MAIN, week };
}

export function updateStar(star, index) {
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
      console.log("수정된 난수 배열: ", updateArr);
      return { ...state, random: updateArr };
    }
    default:
      return state;
  }
}
