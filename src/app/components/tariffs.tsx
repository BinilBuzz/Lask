import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface Calls {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  image?: string;
}

interface TariffBlockProps {
  unlimited?: boolean;
}

function TariffsBlock({ unlimited = true }: TariffBlockProps) {
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
  const [calls, setCalls] = useState<Calls[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/call/tariff/`)
      .then((res) => {
        setCalls(res?.data?.results);
      })
      .catch((error) => {
        //console.error("Error fetching data:", error);
      });
  }, []);

  let displayedCalls = calls;
  if (!unlimited) {
    displayedCalls = calls.slice(0, 4);
  }

  return (
    <>
      {displayedCalls.map((user, idx: number) => (
        <div
          key={idx}
          className="col-xl-3 col-lg-4 col-md-6 col-sm-6 tariffs__block "
        >
          <div className="tariffs__block__card">
            <img src={user?.image} className="card-img-top" alt={user?.name} />

            <div className="tag-green">Popular</div>
            <div className="tariffs__block__card-body text-center">
              <h5 className="card-title line-clamp-2">
                {stripHtmlTags(user?.name)}
              </h5>
              <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
                <div className="rate">Plan Rate</div>
                <div className="price-pound">€ {user.price}</div>
              </div>
              {/* <a href="#" className="btn btn-blue w-100 mt-3">
                Touch to Call
              </a> */}
              <button
                type="button"
                className="btn btn-blue w-100 mt-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Touch to Call
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TariffsBlock;
