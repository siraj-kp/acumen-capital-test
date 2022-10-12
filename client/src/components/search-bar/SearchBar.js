import axios from "axios";
import AsyncSelect from "react-select/async";

const url = "http://localhost:8080";
const SearchBar = (props) => {
  const getSearchData = async (query) => {
    const data = await axios.get(`${url}/search/${query}`);
    console.log("data=--->", data);
    return data.data.data;
  };

  const handleChange = (e) => {
    if (props.onSelect) {
      props.onSelect(e);
    }
  };
  //   const optionComp = ({ innerProps, isDisabled }) => {
  //     console.log(innerProps);
  //     return !isDisabled ? <div {...innerProps}>sdadasd</div> : null;
  //   };
  return (
    <>
      <AsyncSelect
        loadOptions={getSearchData}
        getOptionLabel={(e) => e.name}
        getOptionValue={(e) => e.s_no}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
