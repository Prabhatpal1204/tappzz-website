import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
const Container = styled.div`
  flex: 0 24%;
  margin: 6px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #f1f1f2;
  margin-bottm: 20px;
`;
const Button = styled.button`
  border: none;

  padding: 10px;
  background-color: #f1f1f2;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    background-color: #bcbabe;
    transform: scale(1.1);
  }
`;
const CategoryItem = ({ item }) => {
  const navigate = useNavigate();
  const handelNavigate = (item) => {
    const cate = item.split(" ")[0].toLowerCase();
    navigate(`/category/${cate}`);
  };
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => handelNavigate(item.title)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
