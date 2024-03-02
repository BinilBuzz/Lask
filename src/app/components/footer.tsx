"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const currentYear = new Date().getFullYear();

  interface Organization {
    id?: number;
    name?: string;
    logo?: string;
    price?: number;
    description?: string;
    primary_contact_number?: string;
    secondary_contact_number?: string;
    primary_company_email?: string;
    secondary_company_email?: string;
    address?: string;
  }

  interface Organizations {
    organization?: Organization;
  }

  const [organization, setOrganizations] = useState<Organizations | null>(null);
  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/organization/`)
      .then((res) => {
        setOrganizations(res?.data);
        //const teamMembers = res.data;
        // console.log(teamMembers);
        // console.log(home);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // console.log(organization);
  // console.log(organization?.organization?.name);

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="common-wrapper">
              <div className="common-item">
                <Link href="/">
                  <img
                    src={organization?.organization?.logo}
                    alt={organization?.organization?.name}
                    className="img-fluid mb-3 footerLogo"
                  />
                </Link>
                <p className="line-clamp-4">
                  {organization?.organization?.description}
                </p>
                <Link href="/about">- Read More -</Link>
              </div>
              <div className="common-item">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/tariffs">Tariffs</Link>
                  </li>
                  <li>
                    <Link href="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div className="common-item">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link href="#">Login as Client</Link>
                  </li>
                  <li>
                    <Link href="#">Login as Lawyer</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>

                  <li>
                    <Link href="/common?id=2">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/common?id=1">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="common-item address-info">
                <ul>
                  <li>
                    <span className="ficon">
                      <img
                        src="https://cdn.asparksys.com/medias/1661762738220.svg"
                        alt={""}
                      />
                    </span>
                    Address: {organization?.organization?.address}
                  </li>
                  <li>
                    <span className="ficon">
                      <img
                        src="https://cdn.asparksys.com/medias/1661762790565.svg"
                        alt={""}
                      />
                    </span>
                    Phone:
                    <a
                      href={`tel:${organization?.organization?.primary_contact_number}`}
                    >
                      &nbsp;
                      {organization?.organization?.primary_contact_number}
                    </a>
                    ,&nbsp;
                    <a
                      href={`tel:${organization?.organization?.secondary_contact_number}`}
                    >
                      {organization?.organization?.secondary_contact_number}
                    </a>
                  </li>
                  <li>
                    <span className="ficon">
                      <img
                        className="img-fluid"
                        src="https://cdn.asparksys.com/medias/1661762837183.svg"
                        alt={""}
                      />
                    </span>
                    Email:
                    <a
                      href={`mailto:${organization?.organization?.primary_company_email}`}
                    >
                      &nbsp;{organization?.organization?.primary_company_email}
                    </a>
                  </li>
                </ul>
                <div className="btns d-flex justify-content-between gap-3">
                  <Link href="#">
                    <img
                      className="img-fluid"
                      src="https://cdn.asparksys.com/medias/1665394258349.png"
                      alt={""}
                    />
                  </Link>
                  <Link href="#">
                    <img
                      className="img-fluid"
                      src="https://cdn.asparksys.com/medias/1665394281451.png"
                      alt={""}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="common-wrapper">
              <div className="common-item">
                <span className="copyright">
                  &copy; {currentYear} LASK. All Rights Reserved |
                </span>
                <span className="powered">
                  Powered by
                  <Link href="https://asparksys.com/" target="_blank">
                    <img
                      src="https://cdn.asparksys.com/medias/1661762881495.svg"
                      alt={""}
                    />
                  </Link>
                </span>
              </div>
              <div className="common-item d-flex">
                <ul>
                  <li>
                    <Link href="#">
                      <svg height="1.25rem" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg height="1.25rem" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <svg height="1.25rem" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
