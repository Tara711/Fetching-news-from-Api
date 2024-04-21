import React from "react";

const News = ({ news }) => {
  return (
    <div className="mx-14 ">
      <h2 className="text-2xl text-center m-4">{news.title}</h2>
      <p className="text-center">{news.description}</p>
      <img
        src={news.urlToImage}
        alt=""
        className="h-fit w-fit mx-auto my-4 rounded"
      />
      <button className="text-center text-base cursor-pointer rounded-lg bg-blue-500 text-white p-2 grid place-items-center ">
        See More
      </button>
    </div>
  );
};

export default News;
