'use client'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
  .landingPage {
  background-image: url("/assets/banners/banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 103px 0;
  background-color: #f2f0f1;
  @media screen and (max-width: 768px) {
    background-image: none;
    padding: 0;
  }
}
`;

export const SDiscountFirst = styled.div`
    width: 100%;
    padding: 5px 0;
    background-color: #000;
    color: #fff;
    text-align:center;
`;

export const SDiscountButton = styled.button`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
`;


export const HeaderContainer = styled.div`
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

`;

export const HeaderIcon = styled.div`
    color: ${(props) => props.theme.zcolor};
`;

export const SearchBarContainer = styled.div`
position: relative;
`;

export const SearchBarIconContainer = styled.div`
position: absolute;
  top: 13px;
  left: 10px;
  opacity: 0.4;
`;


export const IconsWrapper = styled.div`
  > *:first-child {
    display: none;
  }
  @media (max-width: 991px) {
    > *:first-child {
      display: block;
    }
  }
`;


export const SSearchBar = styled.input`
    padding: 12px 16px 12px 40px;
    background-color: #F0F0F0;
    border: 1px solid #F0F0F0;
    border-radius: 62px;
    outline: none;
    gap: 12px;
    &:focus {
        border-color: #007bff;
    }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
color: #000;
text-align: center;
font-family: "Integral CF Bold";
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: normal;
@media screen and (max-width: 768px) {
    font-size: 32px;
}
`;

