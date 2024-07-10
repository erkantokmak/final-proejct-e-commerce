"use client"
import styled from 'styled-components';

export const CartContainer = styled.div`
border-radius: 20px;
border: 1px solid rgba(0, 0, 0, 0.10);
`;

export const ProductCartImageWrapper = styled.div`
position: relative;
width: 125px;
height: 187px;
@media screen and (max-width: 768px) {
    width: 99px;
    height: 99px;
}
`;

export const ProductCartVariableTitle = styled.span`
color: #000;
font-family: 'Satoshi';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const ProductCartVariable = styled.span`
color: rgba(0, 0, 0, 0.60);
font-family: 'Satoshi';
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;