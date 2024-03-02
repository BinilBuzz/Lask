"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.scss";
import "./commonStyles.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import InnerBanner from "../components/banner";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

const CommonPage = () => {
  interface Common {
    id?: number;
    title?: string;
    description?: string;
    image?: string;
  }

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

  const [info, setInfo] = useState<Common[]>([]);
  const isTerms = true;
  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/info-pages/`)
      .then((res) => {
        setInfo(res?.data?.results);

        console.log(res?.data?.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="container breadcrumb-wrapper">
        <div className="row">
          <nav style={breadcrumbStyle} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="#">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {isTerms ? (
                  <span>{info[0]?.title}</span>
                ) : (
                  <span>{info[1]?.title}</span>
                )}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Common Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="contact" />
          </div>
        </div>
      </div>

      {/* Start of Common Page Section */}
      <div className="container">
        {isTerms ? (
          <div className="row wrapper">
            <h3>{stripHtmlTags(info[0]?.title)}</h3>
            <p>{stripHtmlTags(info[0]?.description)}</p>
          </div>
        ) : (
          <div className="row wrapper">
            <h3>{stripHtmlTags(info[1]?.title)}</h3>
            <p>{stripHtmlTags(info[1]?.description)}</p>
          </div>
        )}
      </div>
      {/* End of Common Page Section */}
    </>
  );
};

export default CommonPage;
