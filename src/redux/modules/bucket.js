// widgets.js

// Actions
const CREATE = "bucket/CREATE";

const initialState = {
  list: ["영화관 가기크크루삥뽕", "매일 책읽기", "수영 배우기", "코딩때리기"],
};

// Action Creators

export function createBucket(bucket) {
  console.log("액션 생성");
  return { type: CREATE, bucket };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log("값 바꿈");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
