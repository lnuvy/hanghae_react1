// widgets.js

// Actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: ["영화관 가기크크루삥뽕", "매일 책읽기", "수영 배우기", "코딩때리기"],
};

// Action Creators

export function createBucket(bucket) {
  return { type: CREATE, bucket };
}

export function deleteBucket(bucket_index) {
  console.log(`버킷 인데스 ${bucket_index}`);
  return { type: DELETE, bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const new_bucket = state.list.filter((l, i) => {
        return parseInt(action.bucket_index) !== i;
      });
      console.log(new_bucket);
      return { list: new_bucket };
    }
    default:
      return state;
  }
}
