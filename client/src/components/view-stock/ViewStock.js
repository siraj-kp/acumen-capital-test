const ViewStock = ({ data }) => {
  if (!data) return <>No data selected</>;
  return <>{JSON.stringify(data)}</>;
};

export default ViewStock;
