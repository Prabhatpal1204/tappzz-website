import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Customers.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from "../../../services/appApi";
import { ColorRing } from "react-loader-spinner";
import { Call } from "@mui/icons-material";
function createData(customerName, customerId, joinedAt, emailId) {
  return { customerName, customerId, joinedAt, emailId };
}

const Customers = () => {
  const { data, isLoading, refetch } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  console.log(data);
  const delteCurrentUser = (id) => {
    deleteUser(id).then(() => refetch());
  };
  useEffect(() => {}, [deleteUser]);
  return (
    <>
      {isLoading ? (
        <ColorRing />
      ) : (
        <div className="Customers">
          <h1 className="Title">CUSTOMERS</h1>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            className="TableContainer"
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer Name</TableCell>
                  <TableCell align="left">Customer ID</TableCell>
                  <TableCell align="left">Date Joined</TableCell>
                  <TableCell align="left">Email ID</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {data?.users.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row._id}</TableCell>
                    <TableCell align="left">{row.createdAt}</TableCell>
                    <TableCell align="left">
                      <span className="status">{row.email}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">
                      <DeleteForeverIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => delteCurrentUser(row._id)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
};

export default Customers;
