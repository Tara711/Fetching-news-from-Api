import React, { useState, useEffect, useRef } from "react";
import News from "./News";

const NewsApp = () => {
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("ronaldo");
  const queryInputRef = useRef(null);
  const apiKey = `5bdebfd73b8a4ab6843d83c954217fcf`;
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2024-03-21&sortBy=publishedAt&apiKey=${apiKey}`;

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (e) {
      console.log("The error is :", e);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  };

  return (
    <>
      <div className="my-14 text-3xl font-bold flex justify-center items-center">
        News for Everyone in One place
      </div>
      <div className="flex justify-around items-center font-bold">
        <a
          href={`https://newsapi.org/v2/everything?q=real-madrid&from=2023-02-28&sortBy=publishedAt&apiKey=${apiKey}`}
        >
          Real Madrid
        </a>
        <a
          href={`https://newsapi.org/v2/everything?q=nepal&from=2024-03-20&sortBy=publishedAt&apiKey=${apiKey}`}
        >
          Nepal
        </a>
        <a
          href={`https://newsapi.org/v2/everything?q=fifa&from=2024-03-20&sortBy=publishedAt&apiKey=${apiKey}`}
        >
          FIFA
        </a>
        <a
          href={`https://newsapi.org/v2/everything?q=finland&from=2024-03-20&sortBy=publishedAt&apiKey=${apiKey}`}
        >
          Finland
        </a>
        <a
          href={`https://newsapi.org/v2/everything?q=ronaldo&from=2024-03-20&sortBy=publishedAt&apiKey=${apiKey}`}
        >
          Ronaldo
        </a>
      </div>

      <form
        action=""
        className="flex justify-center items-center my-36"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Here"
          className="border rounded-lg p-2 w-96"
          ref={queryInputRef}
        />
        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-lg mx-4"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-3 justify-between  gap-y-12 gap-x-12 ">
        {newsList.map((news) => (
          <News key={news.url} news={news} />
        ))}
      </div>
    </>
  );
};

export default NewsApp;
