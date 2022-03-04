import "./style.css";

const ImageView = (props) => {
  return (
    <div className="image-container">
      {props.data?.map((item, index) => (
        <div key={item.name} className="image-card">
          <img
            style={{ width: "100px", height: "100px" }}
            src={"http://localhost:8080/" + item?.url}
            alt="sahgsaggs"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageView;
