"use client"
import styled from 'styled-components';

export const ItemDetailsChild = styled.img`
  height: 7.75rem;
  width: 7.75rem;
  position: relative;
  border-radius: 8.66px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  min-height: 7.75rem;
`;
export const GradientGraphicTShirt = styled.b`
  align-self: stretch;
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const Size = styled.span``;
export const Large = styled.span`
  color: var(--color-gray-700);
`;
export const SizeLarge = styled.div`
  position: relative;
  display: inline-block;
  min-width: 4.188rem;
`;
export const ColorWhite = styled.div`
  position: relative;
  display: inline-block;
  min-width: 4.875rem;
`;
export const SizeLargeParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  font-size: var(--font-size-sm);
`;
export const ItemName = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
export const B = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  min-width: 3.375rem;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
export const ItemNames = styled.div`
  height: 7.375rem;
  width: 14.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 14.188rem;
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;
export const ItemNamesParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 21.438rem;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
    min-width: 100%;
  }
`;
export const ItemDetails = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
export const ItemDetails1 = styled.div`
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  border-top: 1px solid var(--color-gray-600);
  box-sizing: border-box;
`;
export const Heckered = styled.span`
  text-transform: lowercase;
`;
export const CheckeredShirt = styled.b`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const SizeMedium = styled.div`
  position: relative;
  display: inline-block;
  min-width: 5.125rem;
`;
export const ColorRed = styled.div`
  position: relative;
  display: inline-block;
  min-width: 4.125rem;
`;
export const CheckeredShirtParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
export const B1 = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  min-width: 3.5rem;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
export const FrameGroup = styled.div`
  height: 7.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 9.438rem;
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;
export const Image9Icon = styled.img`
  position: absolute;
  width: calc(100% - 22px);
  top: calc(50% - 76px);
  right: 0.688rem;
  left: 0.688rem;
  max-width: 100%;
  overflow: hidden;
  height: 9.563rem;
  object-fit: cover;
`;
export const Image9Wrapper = styled.div`
  height: 7.75rem;
  width: 7.75rem;
  position: relative;
  border-radius: 8.66px;
  background-color: var(--color-whitesmoke-200);
  overflow: hidden;
  flex-shrink: 0;
`;
export const SkinnyFitJeansContainer = styled.b`
  position: relative;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const ColorBlue = styled.div`
  position: relative;
  display: inline-block;
  min-width: 4.313rem;
`;
export const B2 = styled.b`
  width: 3.813rem;
  position: relative;
  font-size: var(--font-size-5xl);
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
export const FrameDiv = styled.div`
  height: 7.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 9.375rem;
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;
export const ItemVariations = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  max-width: 100%;
  @media screen and (max-width: 725px) {
    flex-wrap: wrap;
  }
`;
export const ItemInfo = styled.div`
  flex: 1;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-gray-600);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-4xl);
  gap: var(--gap-4xl-5);
  min-width: 29.063rem;
  max-width: 100%;
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
`;
export const OrderSummary = styled.h3`
  margin: 0;
  position: relative;
  font-size: var(--font-size-5xl);
  font-weight: 700;
  font-family: inherit;
  color: var(--color-black);
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
export const Subtotal = styled.div`
  height: 1.688rem;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 4.5rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const B3 = styled.b`
  width: 3.063rem;
  position: relative;
  display: flex;
  color: var(--color-black);
  text-align: right;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const SubtotalParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
export const Discount = styled.div`
  position: relative;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const B4 = styled.b`
  width: 3rem;
  position: relative;
  display: flex;
  color: var(--color-tomato-100);
  text-align: right;
  align-items: center;
  min-width: 3rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const DeliveryFee = styled.div`
  position: relative;
  display: inline-block;
  min-width: 6.688rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const B5 = styled.b`
  width: 2rem;
  position: relative;
  display: flex;
  color: var(--color-black);
  text-align: right;
  align-items: center;
  min-width: 2rem;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const Total = styled.div`
  height: 1.688rem;
  position: relative;
  display: flex;
  align-items: center;
  min-width: 2.625rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs-5) 0rem 0rem;
`;
export const TotalValue = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  display: inline-block;
  text-align: right;
  min-width: 3.5rem;
  white-space: nowrap;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
  }
`;
export const LineParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
  color: var(--color-black);
`;
export const FrameIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.5rem;
`;
export const AddPromoCode = styled.input`
  width: 7.5rem;
  border: none;
  outline: none;
  font-family: var(--font-satoshi);
  font-size: var(--font-size-base);
  background-color: transparent;
  height: 1.375rem;
  position: relative;
  color: var(--color-gray-500);
  text-align: left;
  display: inline-block;
  padding: 0;
`;
export const PromoCodeInput = styled.div`
  flex: 1;
  border-radius: var(--br-43xl);
  background-color: var(--color-whitesmoke-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-xs);
  min-width: 9rem;
  max-width: 100%;
`;
export const Apply = styled.a`
  text-decoration: none;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-satoshi);
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  min-width: 2.625rem;
`;
export const ApplyWrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-smi) var(--padding-19xl);
  background-color: var(--color-black);
  border-radius: var(--br-43xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  &:hover {
    background-color: var(--color-darkslategray-300);
  }
`;
export const PromoCodeInputParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
export const GoToCheckout = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
  font-family: var(--font-satoshi);
  color: var(--color-white);
  text-align: left;
`;
export const GoToCheckoutWrapper = styled.div`
  width: 7.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
export const ArrowDownBold1Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  min-height: 1.5rem;
`;
export const FrameButton = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-lg) var(--padding-xl);
  background-color: var(--color-black);
  align-self: stretch;
  border-radius: var(--br-43xl);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xs);
`;
export const OrderDetails = styled.div`
  width: 31.563rem;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-gray-600);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) var(--padding-4xl) var(--padding-12xl);
  gap: var(--gap-3xl);
  min-width: 31.563rem;
  max-width: 100%;
  color: var(--color-gray-700);
  @media screen and (max-width: 1025px) {
    flex: 1;
  }
  @media screen and (max-width: 725px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
export const CartItem = styled.div`
  width: 77.5rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-xl);
  max-width: 100%;
  @media screen and (max-width: 1025px) {
    flex-wrap: wrap;
  }
`;
export const CartItemWrapperRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-satoshi);
`;


export const ItemButtonsIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
export const ItemButtons = styled.input`
  margin: 0;
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.25rem;
`;
export const Div = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  min-width: 0.438rem;
`;
export const ItemButtonsIcon1 = styled.img`
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  min-height: 1.25rem;
`;
export const ItemButtons1 = styled.div`
  border-radius: var(--br-43xl);
  background-color: var(--color-whitesmoke-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-xl);
  gap: var(--gap-lgi-5);
`;
export const ItemButtonsParentRoot = styled.div`
  height: 7.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0rem 0rem 0rem var(--padding-80xl);
  box-sizing: border-box;
  min-width: 14.063rem;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-satoshi);
  @media screen and (max-width: 725px) {
    flex: 1;
  }
`;