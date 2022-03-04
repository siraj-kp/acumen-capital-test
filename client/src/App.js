import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dropzone from "./components/dropzone/Dropzone";
import ImageView from "./components/ImageViewer/ImageView";

function App() {
  const [data, setData] = useState([]);

  const uploadFiles = (validFiles, clearFiles) => {
    for (let i = 0; i < validFiles.length; i++) {
      const data = new FormData();
      data.append("file", validFiles[i]);
      axios({
        method: "post",
        url: "http://localhost:8080/upload",
        data,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          clearFiles();
          loadData();
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };

  const loadData = () => {
    axios.get("http://localhost:8080/files", {}).then(function (response) {
      setData(response.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="">
      <Dropzone onClick={uploadFiles} />
      <ImageView data={data} />
    </div>
  );
}

export default App;
