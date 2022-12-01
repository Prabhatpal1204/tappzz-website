import React from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState, useEffect } from "react";
import { sliderItems } from "../data";
import { useNavigate } from "react-router";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #a1d6e2;
  position: relative;
  overflow: hidden;
`;
const SliderArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #f1f1f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  const pageRedirect = () => {
    navigate("/product-querry-result");
  };
  return (
    <Container>
      <SliderArrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </SliderArrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={pageRedirect}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <SliderArrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </SliderArrow>
    </Container>
  );
};

export default Slider;
