import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./app.css";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isNotJpg, setIsNotJpg] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://random.dog/woof.json");
      const urlType = data.url.split(".");
      if (urlType[urlType.length - 1].toLowerCase() === "jpg") {
        setIsNotJpg(false);
        setData({ ...data, fetchTime: new Date() });
      } else {
        setIsNotJpg(true);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="layout">
      {loading && (
        <div className="loading-background">
          <div className="loading">Loading</div>
        </div>
      )}
      <div className="left-side">
        <Sidebar />
      </div>
      <div className="right-side">
        <Header data={data} />
        <div className="content">
          <div>
            <button className="button" onClick={fetchData}>
              Retry get data
            </button>
            {isNotJpg && (
              <span style={{ color: "red", paddingLeft: "20px" }}>No Data</span>
            )}
          </div>
          {data && (
            <>
              <Card data={data} />
              <img className="image" src={data.url} alt="doggy" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
