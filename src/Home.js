import React from "react";
import BlogLists from "./BlogLists";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="content">
      <h1>Welcome to our blogsite!</h1>
      <br />
      <br />
      {error && <p>{error}</p>}
      {isLoading && <p>Loading....</p>}
      {data && <BlogLists blogs={data} />}
    </div>
  );
};

export default Home;
