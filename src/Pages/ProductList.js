import React, { useEffect } from "react";
import MainContent from "../components/MainContent";
// import Filter from "../components/Filter.js";
import { Slider } from "@mui/material";
import "./ProductList.css";
import Pagination from "react-js-pagination";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetProductListQuery,
  useGetProductsQuery,
  useLazyGetProductCategoryQuery,
  useGetProductBycategoryQuery,
  useGetCategoryMutation,
} from "../services/appApi";
import { ColorRing } from "react-loader-spinner";
import { useParams } from "react-router";
const categories = [
  "Casual",
  "Kids",
  "Sports",
  "Western",
  "Ethnic",
  "ActiveWear",
];

const ProductList = () => {
  const { data: ealry, isLoading } = useGetProductsQuery();
  // const [getProductCategory] = useGetProductCategoryMutation();
  // const [getCategory] = useGetCategoryMutation();
  const [getCat, { refetch }] = useLazyGetProductCategoryQuery();
  const { resultPerPage, productsCount, filteredProductsCount } = useSelector(
    (state) => state.products
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [product, setProduct] = useState(ealry);

  let { keyword, cate } = useParams() || " ";
  if (!keyword) {
    keyword = " ";
  }
  const { data: byCate } = useGetProductBycategoryQuery(cate);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  let count = filteredProductsCount;
  const { data, isSuccess } = useGetProductListQuery({
    keyword,
    currentPage,
    price,
  });

  const getCatFiltered = async (e) => {
    console.log(category);
    if (e.target.checked) {
      try {
        const res = await getCat(category.toLowerCase());
        // const cat = category.toLowerCase();
        // const result = await getCategory({ cat });
        setProduct(res.data);
        // console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      setProduct(ealry);
    }
  };
  useEffect(() => {
    if (data) setProduct(data);
    if (cate && byCate) setProduct(byCate);
  }, [data, byCate, cate]);
  console.log(product);
  return isLoading ? (
    <ColorRing />
  ) : (
    <>
      <div className="productlist-container">
        <div className="wrapper">
          <header>
            <h2>Filters</h2>
          </header>

          <div className="categories">
            <p>Categories</p>
            {categories.map((item, index) => {
              return (
                <div key={index}>
                  <span>{item}</span>
                  <input
                    type="checkbox"
                    id={item}
                    className="form-check-input"
                    style={{ backgroundColor: "none" }}
                    value={item}
                    onChange={(e) => setCategory(e.target.value)}
                    onClick={getCatFiltered}
                  />
                </div>
              );
            })}
          </div>
          <div className="price-container">
            <p>Price</p>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
          </div>
        </div>
        {isSuccess && <MainContent productItem={product} />}
      </div>
      {resultPerPage < count && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )}
    </>
  );
};

export default ProductList;
