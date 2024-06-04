import Script from 'next/script';
import React from 'react'

type AdBannerTypes = {
    pId: string;
}

const AdBanner = ({pId}: AdBannerTypes) => {
    return (
       <ins> 
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-123456789"
      {/* data-ad-slot={dataAdSlot}
      data-ad-format={dataAdFormat}
      data-full-width-responsive={dataFullWidthResponsive.toString()} */}
    </ins>
       
    )
}

export default AdBanner