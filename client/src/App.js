import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/SearchBar";
import "./App.css";
import Header from "./components/header/Header";
import ViewStock from "./components/view-stock/ViewStock";

function App() {
  const [selectedData, setSelectedData] = useState(null);
  // const uploadFiles = (validFiles, clearFiles) => {
  //   for (let i = 0; i < validFiles.length; i++) {
  //     const data = new FormData();
  //     data.append("file", validFiles[i]);
  //     axios({
  //       method: "post",
  //       url: "http://localhost:8080/upload",
  //       data,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     })
  //       .then(function (response) {
  //         //handle success
  //         clearFiles();
  //         loadData();
  //       })
  //       .catch(function (response) {
  //         //handle error
  //         console.log(response);
  //       });
  //   }
  // };

  // const loadData = () => {
  //   axios.get("http://localhost:8080/files", {}).then(function (response) {
  //     setData(response.data);
  //   });
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const handleSelect = (e) => {
    setSelectedData(e);
  };
  return (
    <div className="">
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 className="text-center">
            The easiest way to buy and sell stocks
          </h1>
          <p className="text-center">
            <b>Stock analysis and screening tool for investors in India</b>
          </p>
          <SearchBar onSelect={handleSelect} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <ViewStock data={selectedData} />
        </div>
      </div>
    </div>
  );
}

export default App;
