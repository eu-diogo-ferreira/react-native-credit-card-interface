import React from "react";

import IconElo from "../../assets/icon-elo.svg";
import IconMasterCard from "../../assets/icon-mastercard.svg";
import IconVisa from "../../assets/icon-visa.svg";
import IconHiperCard from "../../assets/icon-hiper-card.svg";

interface propsBrand {
  [key: string]: any
}

const cardBrand: propsBrand = {
  '63': {
    icon: <IconElo width={'30%'} height={'30%'}/>
  },
  '55': {
    icon: <IconMasterCard width={'30%'} height={'30%'}/>
  },
  '41': {
    icon: <IconVisa width={'30%'} height={'30%'}/>
  },
  '60': {
    icon: <IconHiperCard width={'30%'} height={'30%'}/>
  }
}

export const getBrand = (number: string) => {
  if (number && number.length >= 2) {
    const prefix = number.substring(0, 2);
    return cardBrand.hasOwnProperty(prefix)
      ? cardBrand[prefix]
      : false;
  }

  return cardBrand['undefined'];
}