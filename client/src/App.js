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
      <SearchBar onSelect={handleSelect} />
      <ViewStock data={selectedData} />
    </div>
  );
}

export default App;
