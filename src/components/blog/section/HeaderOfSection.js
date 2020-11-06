import React, { useEffect, useState } from "react";

import { sectionsData } from './SectionData'

import Preloader from "../../layout/Preloader"

import HeaderInfo from "./HeaderInfo"
import WhatsappPromotional from "./WhatsappPromotional"

const HeaderOfSection = () => {

  const [sectionInfo, setSectionInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSectionInfo(sectionsData);
    setLoading(false)
  }, [])


  if (loading) {
    return <Preloader />;
  } else {
    return (
      <div className="header-of-section">
        <HeaderInfo title={sectionInfo.title} description={sectionInfo.description} />
        <WhatsappPromotional />
      </div>
    );
  }
};

export default HeaderOfSection;
