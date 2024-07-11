"use client"
import styled from 'styled-components';

export const FooterSection = styled.section`
background-color: #F0F0F0;
margin-top: 110px;
@media screen and (max-width: 768px) {
    margin-top: 210px;
    padding-top: 135px;
}
`;

export const Logo = styled.h1`
color: #000;
leading-trim: both;
text-edge: cap;
font-family: "Integral CF";
font-size: 33.455px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

export const Text = styled.p`
color: rgba(0, 0, 0, 0.60);
font-family: Satoshi;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
`;

export const FooterMenuTitle = styled.h2`
color: #000;
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 18px;
letter-spacing: 3px;
text-transform: uppercase;
margin-bottom: 26px;
`;

export const FooterMenuText = styled.p`
color: rgba(0, 0, 0, 0.60);
font-family: Satoshi;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px;
`;

export const FooterMenuSection = styled.section`
padding-top: 140px;
padding-bottom: 50px;
border-bottom: 1px solid rgba(0, 0, 0, 0.10);
`;

export const NewsletterSection = styled.section`
padding: 36px 64px;
border-radius: 20px;
background-color: #000;
position: absolute;
top: -100px;
@media screen and (max-width: 768px) {  
    top: -310px;
}
`;

export const NewsletterText = styled.h1`
  color: #FFF;
font-family: "Integral CF Bold";
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 45px;
@media screen and (max-width: 768px) {
    font-size: 32px;
}
`;


export const NewsletterMailIconContainer = styled.div`
position: absolute;
width: 24px;
height: 24px;
  top: 13px;
  left: 10px;
  opacity: 0.4;
`;

export const EnterYourMail = styled.input`
margin-bottom: 16px;
    padding: 12px 16px 12px 40px;
    border-radius: 62px;
    background: #FFF;
    outline: none;
    gap: 12px;
    &:focus {
        border-color: #007bff;
    }
`;

export const SubscribeToNewsletter = styled.button`
padding: 12px 16px;
justify-content: center;
align-items: center;
gap: 12px;
border-radius: 62px;
background: #FFF;
`;

export const FooterCopy = styled.span`
color: rgba(0, 0, 0, 0.60);
font-family: 'Satoshi', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;