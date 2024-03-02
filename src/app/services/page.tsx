"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import "../globals.scss";
import "../home.scss";
import Link from "next/link";
import ServiceBlock from "../components/services";

import React, { useState, useEffect } from "react";
import "../components/services";
import axios from "axios";
import { Service } from "../interfaces/products";
import "../components/banner";
import InnerBanner from "../components/banner";
import { About, Banner } from "../interfaces/products";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

function ServicePage() {
  const [options, setOptions] = useState<Service[]>([]);
  const [filteredList, setFilteredList] = useState<any>();

  useEffect(() => {
    axios.get(`${process.env.API_BASE_URL}/service/`).then((res) => {
      setOptions(res.data.results);
      // console.log(res.data.results);
    });
  }, []);

  const services = options?.map((service: any) => ({
    name: service?.name,
    image: service?.image,
  }));

  const filterBySearch = (event: any) => {
    const query = event.target.value.toLowerCase();
    const updatedList = options.filter((item: any) =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredList(
      updatedList.map((item: any) => ({ name: item.name, image: item.image }))
    );
  };
  // console.log(filteredList);
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
                Our Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="service" />
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container">
        <div className="row">
          {/* Title & Searchbar */}
          <div className="page-header">
            <div>
              <h2>Services We Offer</h2>
            </div>
            <div>
              <form className="d-flex">
                <div className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </div>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for our services"
                  aria-label="Search"
                  onChange={filterBySearch}
                />

                <button className="btn btn-search" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          {/* Service List */}
          <section className="services">
            <div className="container">
              <div className="row">
                <ServiceBlock unlimited={true} filteredList={filteredList} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
export default ServicePage;
