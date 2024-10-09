import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "../Components/loader.gif";
import Mylogo from "../Components/Mylogo.png";
function News() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=c9165c72651c48f687d9ed5f85e5f4a7";
  useEffect(() => {
    // Fetch data when the component is mounted
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the response
        setData(response.data.articles);
        console.log("response", response.data.data.articles);
      })
      .catch((error) => {
        // Handle error
        setError(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="bg-white">
      <div className=" my-3 bg-white" >
         <div className="row">
         {data.map((item) => (
          <div className=" col-md-3" key={item.id}>
              <div className="card">
                <img
                  src={item.urlToImage ? item.urlToImage : Mylogo}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title ? item.title.slice(0, 50) : "."}...
                    <span className="badge text-bg-success">
                      {item.source.name}
                    </span>
                  </h5>
                  <p className="card-text">{item.description ? item.description.slice(0, 100):"."}.</p>
                  <p className="card-text">
                    <small className="text-muted">
                      By:-{item.author ? item.author : "GymaloverDeepak"} . On
                      :- {new Date(item.publishedAt).toGMTString()}{" "}
                    </small>
                  </p>
                  <a
                    href={item.url}
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-sm btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            
          </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default News;
