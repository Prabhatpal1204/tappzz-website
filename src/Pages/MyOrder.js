import "../App.css";
import Table from "../components/table/Table";
// import { tableData } from "./data";
import { Columns } from "../components/Column";
import { useMyOrdersQuery } from "../services/appApi";
import { ColorRing } from "react-loader-spinner";

function MyOrder() {
  const { data, isLoading } = useMyOrdersQuery();
  return (
    <>
      {isLoading ? (
        <ColorRing />
      ) : (
        <div className="my-order-con">
          <Table data={data.orders} columns={Columns} />
        </div>
      )}
    </>
  );
}

export default MyOrder;
