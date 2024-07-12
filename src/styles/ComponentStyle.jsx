'use client'
import { Link } from '@/navigation';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: 'Satoshi', sans-serif;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs{
    border-color: none;
    border: ${(props) => props.theme.border};
    border-type: solid;
    border-bottom: 1px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: ${(props) => props.theme.deactiveBorder};
  }
  .nav-link.active{
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    border-color: ${(props) => props.theme.border + ' !important'};	
    border-bottom: 2px;
    border-style: solid;
  }
  .nav-tabs{
    border:none;
  }
  .nav-link{
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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const SDiscountFirst = styled.div`
    width: 100%;
    padding: 5px 0;
    background-color: #000;
    color: #fff;
    text-align:center;
`;

export const SDiscountButton = styled.button`
    background: transparent;
    color: white;
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
    background-color:${(props) => props.theme.gray};
    border: 1px solid #F0F0F0;
    border-radius: 62px;
    outline: none;
    gap: 12px;
    &:focus {
        border-color: #007bff;
    }
    &::placeholder {
      color: ${(props) => props.theme.color};
    }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border: none;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h2`
color: ${(props) => props.theme.color};
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

