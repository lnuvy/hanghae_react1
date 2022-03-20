import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);
  console.log(params);
  console.log(bucket_list);
  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
    </div>
  );
};

export default Detail;
