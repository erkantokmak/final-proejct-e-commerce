'use client'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;

export const SDiscountFirst = styled.div`
    width: 100%;
    padding: 5px 0;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    padding: 24px 0px;
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
    width: 577px;
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