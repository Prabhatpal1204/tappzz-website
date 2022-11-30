import React from "react";
import "./Cards.css";
// import { cardsData } from "../../Data/Data";
import { UilClipboardAlt, UilUser } from "@iconscout/react-unicons";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

import {
  useGetAllUsersQuery,
  useGetAllProductsQuery,
  useGetAllOrdersQuery,
} from "../../../services/appApi";

import Card from "../Card/Card";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

const Cards = () => {
  const { data } = useGetAllUsersQuery();
  const { data: data2 } = useGetAllProductsQuery();
  const { data: data3 } = useGetAllOrdersQuery();
  const price = data2?.products.reduce((acc, item) => acc + item.price, 0);
  // console.log(price);
  const cardsData = [
    {
      title: "Users",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: data?.users.length,
      value: data?.users.length,
      png: UilUser,
      series: [
        {
          name: "Sales",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
    },
    {
      title: "Products",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: data2?.products.length,
      value: formatter.format(price),
      png: UilMoneyWithdrawal,
      series: [
        {
          name: "Products",
          data: [10, 100, 50, 70, 80, 30, 40],
        },
      ],
    },
    {
      title: "Revenue",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: data3?.orders.length,
      value: formatter.format(data3?.totalAmount),
      png: UilClipboardAlt,
      series: [
        {
          name: "Orders",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
