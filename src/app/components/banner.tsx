import React, { useEffect, useState } from "react";
import axios from "axios";
// import { BannerNext } from "../interfaces/products";

interface BannerNext {
  id?: number;
  description?: string;
  title?: string;
  link?: string;
  web_image?: string;
  mobile_image?: string;
  placement_type?: string;
}

interface InnerBannerProps {
  placementType: string;
}

function InnerBanner({ placementType }: InnerBannerProps) {
  const [banner, setBanner] = useState<BannerNext | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.API_BASE_URL}/banner/`);
        const { data } = response;
        const filteredBanners = data.results.filter(
          (banner: BannerNext) => banner.placement_type === placementType
        );
        setBanner(filteredBanners[0]);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchData();
  }, [placementType]);

  return (
    <>
      {banner && (
        <div className="common-banner-section__img">
          <img
            src={banner.web_image}
            className="img-fluid"
            alt={banner.title}
          />
          <div className="common-banner-section__overlay" />
          <h3 className="common-banner-section__title">{banner.title}</h3>
        </div>
      )}
    </>
  );
}

export default InnerBanner;
