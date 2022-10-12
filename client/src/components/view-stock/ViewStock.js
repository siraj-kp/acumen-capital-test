const ViewStock = ({ data }) => {
  console.log("data=--->", data);
  if (!data) return null;
  return (
    <div className="bg-white p-4 mt-5 borderR12">
      <h3>{data?.name}</h3>
      <div className="bg-light p-3 borderR12">
        <div className="row ">
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">Market Cap </p>
              <p className="text-danger mb-0">
                <b>{data?.market_cap}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between bg-color p-2 borderR12">
              <p className="mb-0">Current Price </p>
              <p className="text-danger mb-0">
                <b>{data?.current_market_price}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">Stock P/E </p>
              <p className="text-danger mb-0">
                <b>{data?.stock_pe}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between bg-color p-2 borderR12">
              <p className="mb-0">Debt</p>
              <p className="text-danger mb-0">
                <b>{data?.debt}</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">Divident Yield </p>
              <p className="text-danger mb-0">
                <b>{data?.dividend_yield}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between bg-color p-2 borderR12">
              <p className="mb-0">ROCE </p>
              <p className="text-danger mb-0">
                <b>{data?.roce}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">ROE </p>
              <p className="text-danger mb-0">
                <b>{data?.roe_previous}</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">Debt Equuity </p>
              <p className="text-danger mb-0">
                <b>{data?.debt_to_equity}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between bg-color p-2 borderR12">
              <p className="mb-0">Eps </p>
              <p className="text-danger mb-0">
                <b>{data?.eps}</b>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between p-2 borderR12">
              <p className="mb-0">Reserves </p>
              <p className="text-danger mb-0">
                <b>{data?.reserves}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStock;
