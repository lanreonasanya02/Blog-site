import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <>
      <div>
        {isLoading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        {data && (
          <div className="blog-details">
            <br />
            <br />
            <h2>{data.title}</h2>
            <br />
            <p>Written by {data.author}</p>
            <br />
            <br />
            <p>{data.body}</p>
            <br />
            <div className="create">
              <button onClick={handleDelete}>Delete blog</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BlogDetails;
