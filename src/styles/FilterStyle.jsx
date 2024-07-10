"use client"
import styled from 'styled-components';
import RangeSlider from "react-range-slider-input";


export const FilterContainer = styled.div`
border-radius: 20px;
border: 1px solid rgba(0, 0, 0, 0.10);
padding: 20px 24px;
`;

export const FilterHeader = styled.span`
color: #000;
font-family: 'Satoshi';
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const StyledIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
`;

export const FilterButton = styled.button`
background-color: ${props => props.selected ? '#000' : '#fff'};
border: none;
`;


export const StyledRangeSlider = styled(RangeSlider)`
  margin: 60px auto 0;
  [data-vertical] {
    height: 300px;
  }
 color:#000;
[data-active] {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const ColorOption = styled.button`
width:37px;
height: 37px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    background-color: ${(props) => (props.color ? props.color : '')};
    border-color: rgba(0, 0, 0, 0.20);
    border-width: 1px;
    border-style: solid;
    color: ${(props) => (props.color ? (props.color == 'white' ? 'black' : 'white') : '')};
    `;

export const ProductSize = styled.button`
    padding: 10px 20px;
    border-radius: 62px;
    border: none;
    background-color: ${(props) => (props.size === props.selectedsize ? 'black ;' : '#F0F0F0')};
    color: ${(props) => (props.size === props.selectedsize ? 'white' : 'rgba(0, 0, 0, 0.6)')};
    cursor: pointer;
    `;

export const ApplyFilterButton = styled.button`
border-radius: 62px;
border:none;
background: #000;
padding: 16px 54px;
width: 100%;
color: #FFF;
font-family: 'Satoshi';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const FilterInlineText = styled.span`
color: rgba(0, 0, 0, 0.60);
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;