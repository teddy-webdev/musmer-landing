import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

import "../slider-style.css";

function Slider({ exchangeRateData }) {
  const usdPrice = exchangeRateData[0]?.selling_price;
  const eurPrice = exchangeRateData[1]?.selling_price;
  const gbpPrice = exchangeRateData[2]?.selling_price;
  const audPrice = exchangeRateData[3]?.selling_price;

  const usdChange = exchangeRateData[0]?.percentage_change;
  const eurChange = exchangeRateData[1]?.percentage_change;
  const gbpChange = exchangeRateData[2]?.percentage_change;
  const audChange = exchangeRateData[3]?.percentage_change;

  const usdChangeFloat = parseFloat(usdChange);
  const percentageChangeStyleUSD = {
    color: usdChangeFloat < 0 ? "#B30000" : "green",
  };
  const eurChangeFloat = parseFloat(eurChange);
  const percentageChangeStyleEUR = {
    color: eurChangeFloat < 0 ? "#B30000" : "green",
  };
  const gbpChangeFloat = parseFloat(gbpChange);
  const percentageChangeStyleGBP = {
    color: gbpChangeFloat < 0 ? "#B30000" : "green",
  };
  const audChangeFloat = parseFloat(audChange);
  const percentageChangeStyleAUD = {
    color: audChangeFloat < 0 ? "#B30000" : "green",
  };
  return (
    <div className="slider fixed top-0 md:mt-[0]">
      <div className="slide-track">
        <SliderItem
          picItem={"https://flagcdn.com/48x36/us.png"}
          percentageChangeStyle={percentageChangeStyleUSD}
          nameItem={"USD"}
          priceItem={usdPrice}
          arrowItem={
            usdChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={usdChange}
          alt={"US Dollar"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/fr.png"}
          percentageChangeStyle={percentageChangeStyleEUR}
          nameItem={"EUR"}
          priceItem={eurPrice}
          arrowItem={
            eurChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={eurChange}
          alt={"Euros"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/gb.png"}
          percentageChangeStyle={percentageChangeStyleGBP}
          nameItem={"GBP"}
          priceItem={gbpPrice}
          arrowItem={
            gbpChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={gbpChange}
          alt={"Pound Sterling"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/au.png"}
          percentageChangeStyle={percentageChangeStyleAUD}
          nameItem={"AUD"}
          priceItem={audPrice}
          arrowItem={
            audChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={audChange}
          alt={"Australian Dollar"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/us.png"}
          percentageChangeStyle={percentageChangeStyleUSD}
          nameItem={"USD"}
          priceItem={usdPrice}
          arrowItem={
            usdChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={usdChange}
          alt={"US Dollar"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/fr.png"}
          percentageChangeStyle={percentageChangeStyleEUR}
          nameItem={"EUR"}
          priceItem={eurPrice}
          arrowItem={
            eurChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={eurChange}
          alt={"Euros"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/gb.png"}
          percentageChangeStyle={percentageChangeStyleGBP}
          nameItem={"GBP"}
          priceItem={gbpPrice}
          arrowItem={
            gbpChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={gbpChange}
          alt={"Pound Sterling"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/au.png"}
          percentageChangeStyle={percentageChangeStyleAUD}
          nameItem={"AUD"}
          priceItem={audPrice}
          arrowItem={
            audChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={audChange}
          alt={"Australian Dollar"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/us.png"}
          percentageChangeStyle={percentageChangeStyleUSD}
          nameItem={"USD"}
          priceItem={usdPrice}
          arrowItem={
            usdChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={usdChange}
          alt={"US Dollar"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/fr.png"}
          percentageChangeStyle={percentageChangeStyleEUR}
          nameItem={"EUR"}
          priceItem={eurPrice}
          arrowItem={
            eurChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={eurChange}
          alt={"Euros"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/gb.png"}
          percentageChangeStyle={percentageChangeStyleGBP}
          nameItem={"GBP"}
          priceItem={gbpPrice}
          arrowItem={
            gbpChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={gbpChange}
          alt={"Pound Sterling"}
        />
        <SliderItem
          picItem={"https://flagcdn.com/48x36/au.png"}
          percentageChangeStyle={percentageChangeStyleAUD}
          nameItem={"AUD"}
          priceItem={audPrice}
          arrowItem={
            audChangeFloat < 0 ? <AiFillCaretDown /> : <AiFillCaretUp />
          }
          changeItem={audChange}
          alt={"Australian Dollar"}
        />
      </div>
    </div>
  );
}

export default Slider;

const SliderItem = ({
  picItem,
  percentageChangeStyle,
  nameItem,
  priceItem,
  arrowItem,
  changeItem,
  alt,
}) => (
  <div className="slide">
    <img src={picItem} alt={alt} className="w-[1.2rem] h-[1rem]" />
    <div
      className="w-fit flex flex-row items-center justify-center"
      style={percentageChangeStyle}
    >
      {priceItem !== undefined && priceItem !== null ? (
        <>
          <h1>
            {nameItem} {priceItem}
          </h1>
          <div className="w-fit flex flex-row items-center justify-center">
            {arrowItem}
            {changeItem} %
          </div>
        </>
      ) : (
        <div className="spinner">
          <div className="spinner-animation"></div>
        </div>
      )}
    </div>
  </div>
);
