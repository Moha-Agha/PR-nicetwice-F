import React from "react";

import HeaderInfo from "./HeaderInfo"
import BannerPromotional from "./BannerPromotional"

const HeaderOfSection = ({ sectionInfo }) => {

  const {
    title,
    description
  } = sectionInfo;

  return (
    <div className="header-of-section">
      <HeaderInfo title={title} description={description} />
      <BannerPromotional TextTitle={'Suchst du Profis?'} TextBody={'Ich helfe dir mit meiner groß Erfahrung in ' + title + ' Bereich'} />
    </div>
  );

};

export default HeaderOfSection;
