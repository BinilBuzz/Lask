"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.scss";
import "../home.scss";
import "./aboutStyles.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import InnerBanner from "../components/banner";
import { About, Banner } from "../interfaces/products";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

function AboutPage() {
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

  const [about, setAbout] = useState<About | null>(null);

  useEffect(() => {
    // Fetch about data
    axios
      .get(`${process.env.API_BASE_URL}/about-us/`)
      .then((res) => {
        setAbout(res?.data?.about_us);
        //console.log(res?.data?.about_us);
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
                {about?.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="about" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container">
        <div className="row wrapper">
          <h2>{about?.title}</h2>
          <p>{stripHtmlTags(about?.content)}</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
