import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBucket } from "./redux/modules/bucket";

const Detail = () => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <button
        onClick={() => {
          console.log("삭제됨");
          dispatch(deleteBucket(bucket_index));
          navigate(-1);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default Detail;
