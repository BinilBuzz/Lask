"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.css";
import "./home.scss";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TariffsBlock from "./components/tariffs";
import ServiceBlock from "./components/services";
import axios from "axios";
import { Home, HomePage } from "./interfaces/products";
import Link from "next/link";

export default function Home() {
  var banner = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var clientSlider = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [home, setHome] = useState<HomePage | undefined>();
  const [placementType, setPlacementType] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/home/`)
      .then((res) => {
        setHome(res?.data);
        //console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:");
      });
  }, []);

  return (
    <>
      <div className="banner-wrapper">
        <div className="banner-slider">
          <Slider {...banner}>
            {home?.banner?.map((slider, idx: number) => (
              <div key={idx} className="block">
                <img src={slider?.web_image} alt={slider?.title} />
                <div className="container">
                  <div className="row">
                    <div className="banner-caption-wrapper">
                      <h1 className="line-clamp-3">{slider?.description}</h1>
                      <div className="d-flex gap-3 mt-4">
                        <button type="button" className="btn btn-blue">
                          <Link href={"{slider?.link}"}>
                            <i className="fa-solid fa-phone px-1" /> Call Lawyer
                          </Link>
                        </button>
                      </div>
                      {/* Layer Online Status */}
                      <div className="banner-lawyer-online">
                        <div>
                          <ul className="d-flex justify-content-around">
                            <li>
                              <img
                                src="https://cdn.asparksys.com/medias/1684735721518.svg"
                                alt={""}
                              />
                            </li>
                            <li>
                              <img
                                src="https://cdn.asparksys.com/medias/1684917967089.svg"
                                alt={""}
                              />
                            </li>
                            <li>
                              <img
                                src="https://cdn.asparksys.com/medias/1684917986649.svg"
                                alt={""}
                              />
                            </li>
                          </ul>
                        </div>
                        <div>+144 Lawyer Online</div>
                        <div className="green-status" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="title">
            <h5 className="d-block">OUR SERVICES</h5>
            <h2>Services We Offer</h2>
          </div>
          <div className="row">
            <ServiceBlock unlimited={false} />
          </div>
          <div className="d-flex align-items center justify-content-center">
            <Link href="/services">
              <div className="view-all">
                View All <i className="fa-solid fa-chevron-right" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Get Consultation Section */}
      <section className="consultation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex consultation__wrapper justify-content-around">
                <div className="consultation__wrapper__left">
                  <div className="heading">
                    Get Consultation from the best lawyers online
                  </div>
                  <div className="d-flex gap-3">
                    <div>
                      <img
                        className="img-fluid"
                        src="https://cdn.asparksys.com/medias/1683882045098.svg"
                        alt={""}
                      />
                    </div>
                    <div>
                      <p className="line-clamp-3">
                        LASK has gained your trust and is providing its clients
                        with best services in the market. LASK has gained your
                        trust and is providing its clients with best services in
                        the market.
                      </p>
                    </div>
                  </div>
                  <div className="quick-info">
                    <div className="quick-info__block">
                      <span>49000+</span>Total Clients
                    </div>
                    <div className="quick-info__block">
                      <span>510+</span>Total Lawyers
                    </div>
                    <div className="quick-info__block">
                      <span>4.5</span>Average User Rating on Play Store
                    </div>
                  </div>
                </div>
                <div className="consultation__wrapper__right">
                  <img
                    src="https://cdn.asparksys.com/medias/1683883676754.svg"
                    className="img-fluid w-100"
                    alt={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial position-relative">
        <div className="container">
          <div className="row">
            <div className="title">
              <h5 className="d-block">Testimonals</h5>
              <h2>What People Think About Us</h2>
            </div>
          </div>
        </div>
        <div className="half-bleed">
          <div className="row">
            <div className="testimonial__wrapper">
              <div className="testimonial__wrapper__title">
                Client Testimonials
                <img
                  className="quote-icon"
                  src="https://cdn.asparksys.com/medias/1684821184304.jpg"
                  alt={""}
                />
              </div>

              <div className="testimonial-slider">
                <Slider {...clientSlider}>
                  {home?.testimonial?.map((clientslider, idx: number) => (
                    <div key={idx} className="testimonial-wrapper__block">
                      <div className="d-flex gap-3 mb-4">
                        <div>
                          <img
                            src={clientslider?.image}
                            alt={clientslider?.name}
                          />
                        </div>
                        <div className="d-flex justify-content-center flex-column">
                          <h4 className="line-clamp-1">{clientslider?.name}</h4>
                          <p className="text-grey line-clamp-1">
                            Lead Intranet Technician
                          </p>
                        </div>
                      </div>
                      <p className="line-clamp-4">
                        {clientslider?.description}
                      </p>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section className="tariffs">
        <div className="container">
          <div className="title">
            <h5 className="d-block">Tariffs</h5>
            <h2>Tariff Rates We Offer</h2>
          </div>
          <div className="row">
            <TariffsBlock unlimited={false} />
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="downloadApp">
        <div className="container">
          <div className="background-container">
            <div className="row align-items-lg-center g-0">
              <div
                className="col-xl-6 col-sm-12 col-md-6 col-lg-6 download-app-text"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration={1200}
              >
                <div className="text-white">
                  <h3>Download Our App</h3>
                  <p className="subheader">
                    We are ready to serve you through our mobile app.
                    <br />
                    Click below to download the app.
                  </p>
                  <div className="btns">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.asparksys.com/medias/1665394258349.png"
                        alt={""}
                      />
                    </a>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="https://cdn.asparksys.com/medias/1665394281451.png"
                        alt={""}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-sm-12 col-md-6 col-lg-6 mobile-block"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration={1200}
              >
                <img
                  className="img-fluid"
                  src="https://cdn.asparksys.com/medias/1684122345385.svg"
                  alt={""}
                  width={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team */}
      <section className="ourTeam">
        <div className="container">
          <div className="title">
            <h5>Our Team</h5>
            <h2>Meet Our Team Members</h2>
          </div>
          <div className="row">
            {home?.team_member?.map((user: any, idx: number) => (
              <div
                key={idx}
                className="col-lg-3 col-md-6 col-sm-6 ourTeam__block"
              >
                <div className="ourTeam__img-block">
                  <img
                    src={user?.image}
                    className="card-img-top"
                    alt={user?.name}
                  />
                </div>
                <div className="ourTeam__description">
                  <h5 className="line-clamp-1">{user?.name}</h5>
                  <p className="card-text line-clamp-2">{user?.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex align-items center justify-content-center">
            <Link href="/team">
              <div className="view-all">
                View All <i className="fa-solid fa-chevron-right" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
