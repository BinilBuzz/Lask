import React, { useEffect, useState } from "react";
import axios from "axios";
import "../globals.scss";
import { Service, ServiceBlockProps } from "../interfaces/products";

function ServiceBlock({ unlimited, filteredList }: ServiceBlockProps) {
  const getData = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setOptions);
      }, 10000);
    });
  // console.log(filteredList);

  const stripHtmlTags = (htmlString: any) => {
    if (!htmlString || typeof htmlString !== "string") {
      return ""; // Return an empty string if the input is not valid
    }

    // Remove HTML tags
    const regexTags = /(<([^>]+)>)/gi;
    const strippedString = htmlString.replace(regexTags, "");

    // Remove &nbsp; tags
    const regexNbsp = /&nbsp;/g;
    const cleanedString = strippedString.replace(regexNbsp, "");

    return cleanedString;
  };

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.API_BASE_URL}/service/`)
      .then((res) => {
        setOptions(res?.data?.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  let displayedOptions = options;
  if (!unlimited) {
    displayedOptions = options?.slice(0, 8);
  }
  const [placementType, setPlacementType] = useState<string>("tariff");
  return (
    <>
      {isLoading && (
        <div className="col-lg-3 col-md-4 col-sm-6 Loader shimmer">
          <div className="serviceBlock value">
            <img src="loader-image.png" alt="Loading" />
            <div className="serviceBlock__body">
              <p className="serviceBlock__text line-clamp-3 value"></p>
            </div>
          </div>
        </div>
      )}

      {!isLoading &&
        (filteredList
          ? filteredList?.map((item: Service) => (
              <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="serviceBlock value">
                  <img src={item.image} alt={item.name} />
                  <div className="serviceBlock__body">
                    <p className="serviceBlock__text line-clamp-3 value">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))
          : displayedOptions?.map((service: Service) => (
              <div key={service.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="serviceBlock value">
                  <img src={service.image} alt={service.name} />
                  <div className="serviceBlock__body">
                    <p className="serviceBlock__text line-clamp-3 value">
                      {stripHtmlTags(service.description)}
                    </p>
                  </div>
                </div>
              </div>
            )))}
    </>
  );
}

export default ServiceBlock;
