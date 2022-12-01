/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./table.css";
import Lottie from "react-lottie";
import animationData from "../../lottie/no-order-found.json";
const Table = ({ data, columns }) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      {data?.length === 0 ? (
        <div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <div className="table-div">
          <table>
            <thead>
              <tr>
                <th>PRODUCT IMAGE</th>
                <th>PRODUCT NAME</th>
                {columns &&
                  columns.map((head) => (
                    <th>{getCaps(head.Header, head.accessor)}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((row) => (
                  <tr>
                    <td>
                      <img src={row.orderItems[0].image} width={100} />
                    </td>
                    <td>{row.orderItems[0].name}</td>
                    {columns.map((col) => (
                      <td>{row[col.accessor]}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          {data ? null : <p>No Rows to show</p>}
        </div>
      )}
    </>
  );
};

export default Table;
