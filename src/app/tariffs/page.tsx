"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.scss";
import "../home.scss";
import "./tariffs-styles.scss";
import Link from "next/link";
import TariffsBlock from "../components/tariffs";
import InnerBanner from "../components/banner";
import { Service, Banner } from "../interfaces/products";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": " >",
};

// function TariffsPage() {
function TariffsPage() {
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
                Tariffs
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="tariff" />
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="container">
        <div className="row">
          {/* Tariffs Section */}
          <div className="container">
            <div className="row">
              {/* Title & Searchbar */}
              <div className="page-header">
                <div>
                  <h2>All Tariffs We Offer</h2>
                </div>
              </div>
              {/* Tariffs List */}
              <section className="tariffs inner-tariffs">
                <div className="container">
                  <div className="row">
                    <TariffsBlock />
                  </div>
                  <div className="note">
                    <p className="red">*</p>
                    Note: The tariff rate is subject to change any time without
                    prior notice so make sure before making the call by reading
                    on the screen.
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TariffsPage;
