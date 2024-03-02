"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.scss";
import "../home.scss";
import "./faqStyles.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

const FaqPage = () => {
  interface Questions {
    id?: number;
    question?: string;
    answer?: string;
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

  const [faq, setFaq] = useState<Questions[]>([]);
  const [openIndex, setOpenIndex] = useState(0); // State to track the open accordion item
  useEffect(() => {
    axios
      .get("https://dev.lask.asparksys.cloud/api/faq/")
      .then((res) => {
        setFaq(res?.data?.results);
        //console.log(res?.data?.results);
      })
      .catch((error) => {
        //console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Delay the opening of the first accordion item for demonstration purposes
    const timeout = setTimeout(() => {
      setOpenIndex(0);
    }, 1000);

    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, []);

  const handleAccordionToggle = (index: any) => {
    setOpenIndex(index);
  };
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
                FAQs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="container">
          <div className="row">
            {/* FA Content */}
            <h2>Frequently Asked Questions</h2>
            <div
              className="accordion col-lg-10 col-md-12 col-sm-12"
              id="accordionExample"
            >
              {faq.map((result, index) => (
                <div className="accordion-item" key={index}>
                  <h3 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={openIndex === index ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                      onClick={() => handleAccordionToggle(index)}
                    >
                      {stripHtmlTags(result?.question)}
                    </button>
                  </h3>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse${
                      openIndex === index ? " show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {stripHtmlTags(result?.answer)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still Questions */}
          <div className="questions">
            <div className="questions__title">Still have questions?</div>
            <p className="questions__text">
              If you cannot find answer to your questions in our FAQ, you can
              always
              <a href="/contact"> contact us.</a> We will answer to you shortly!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
