"use client";
import styled from 'styled-components';

export const StyledIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;

export const StyledBox = styled.div`
padding: 16px 20px;
height: 48px;
border-radius: 62px;
background: #F0F0F0;
display: flex;
justify-content: center;
align-items: center;
`;

export const AllReviewText = styled.p`
color: #000;
font-family: 'Satoshi';
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const AllReviewCount = styled.span`
color: rgba(0, 0, 0, 0.60);
leading-trim: both;
text-edge: cap;
font-family: 'Satoshi';
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 22px;
margin-left: 8px;
`;

export const LatestText = styled.span`
color: #000;
font-family: 'Satoshi';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const ReviewButton = styled.button`
display: flex;
height: 48px;
padding: 16px 20px;
justify-content: center;
align-items: center;
padding: 16px 20px;
border-radius: 62px;
border: none;
background: #000;
color: #fff;
color: #FFF;
font-family: 'Satoshi';
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;