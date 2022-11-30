import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Products.css";
import { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "../../../services/appApi";
import { ColorRing } from "react-loader-spinner";
function createData(image, productName, productId, productPrice, Stock) {
  return { image, productName, productId, productPrice, Stock };
}

const rows = [
  createData(
    "https://i.ibb.co/J7LV3tR/692-6920905-purple-shirt-png.png",
    "T-shirt",
    18908492,
    100,
    24
  ),
  createData(
    "https://i.ibb.co/KGKss3f/667-6677688-kurta-png.png",
    "Kurta",
    1890852,
    98,
    30
  ),
  createData(
    "https://i.ibb.co/R6RChhm/2-21784-skirt-png.png",
    "Skirt",
    18908673,
    65,
    10
  ),
  createData(
    "https://i.ibb.co/T1Z0CG5/612-6122978-shorts-png.png",
    "Shorts",
    18908298,
    72,
    14
  ),
  createData(
    "https://i.ibb.co/d5dgWFg/214-2148629-jacket-png.png",
    "Jacket",
    18908120,
    58,
    29
  ),
];

const Prodcuts = () => {
  const { data, isLoadding } = useGetAllProductsQuery();
  console.log(data);
  const [open, setOpen] = React.useState(false);
  const [proName, setProName] = React.useState();
  const [proPrice, setProPrice] = React.useState();
  const [proStock, setProStock] = React.useState();
  const [proImage, setProImage] = React.useState();
  const handleClickOpen = (index) => {
    setOpen(true);
    setProName(data?.products[index].name);
    setProPrice(data?.products[index].price);
    setProStock(data?.products[index].Stock);
    setProImage(data?.products[index].images[0].url);
  };
  const handleClickOpenNew = () => {
    setOpen(true);
    setProName();
    setProPrice();
    setProStock();
    setProImage();
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isLoadding ? (
        <ColorRing />
      ) : (
        <div className="Products">
          <div className="header-container">
            <h1 className="Title">PRODUCTS</h1>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              size="small"
              className="addNew-btn"
              onClick={() => handleClickOpenNew()}
            >
              Add New
            </Button>
          </div>
          <div className="tabel-container">
            <TableContainer
              component={Paper}
              style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
              className="TableContainer"
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell align="left">Product Name</TableCell>
                    <TableCell align="left">Product ID</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Stock</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: "white" }}>
                  {data?.products.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={row.images[0].url}
                          alt={row.name}
                          width="40px"
                          height="50px"
                        />
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row._id}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">
                        <span className="status">{row.Stock}</span>
                      </TableCell>
                      <TableCell align="left" className="Details">
                        <EditIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => handleClickOpen(index)}
                        />
                      </TableCell>
                      <TableCell align="left" className="Details">
                        <DeleteForeverIcon style={{ cursor: "pointer" }} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { width: "100%", borderRadius: "20px" } }}
          >
            <DialogTitle>ENTER PRODUCT DETAILS</DialogTitle>
            <DialogContent sx={{ display: "flex", flexWrap: "wrap" }}>
              <TextField
                margin="dense"
                id="name"
                label="Product Name"
                type="search-field"
                fullWidth
                variant="standard"
                value={proName}
              />
              <img src={proImage} alt="" className="dialog-img" />
              <div className="dialog-flex">
                <TextField
                  margin="dense"
                  id="name"
                  label="Product Price"
                  type="search-field"
                  fullWidth
                  variant="standard"
                  value={proPrice}
                />
                <TextField
                  margin="dense"
                  id="name"
                  label="Product Stock"
                  type="number"
                  fullWidth
                  variant="standard"
                  value={proStock}
                />
                <TextField
                  margin="dense"
                  id="name"
                  label=""
                  type="file"
                  fullWidth
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>CANCEL</Button>
              <Button onClick={handleClose}>SUBMIT</Button>
            </DialogActions>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default Prodcuts;
