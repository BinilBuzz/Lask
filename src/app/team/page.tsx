"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./teamStyles.scss";
import "../globals.scss";
import "../home.scss";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../globals.scss";

import { TeamMember, BannerNext } from "../interfaces/products";
import InnerBanner from "../components/banner";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

function TeamPage() {
  const [home, setHome] = useState<TeamMember | undefined>();
  const [placementType, setPlacementType] = useState<BannerNext[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/home/`)
      .then((res) => {
        setHome(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //console.log(home?.team_member);
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
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="team" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="team-section">
        <div className="chairmain container pt-5">
          <h2 className="header pb-4">What Our Chairman Says</h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-4 col-md-6 col-12 mb-4 d-flex">
              <img
                className="img-fluid mx-auto chairman-image"
                src="https://cdn.asparksys.com/medias/1670832456555.svg"
                alt="chairman"
              />
            </div>
            <div className="col-xl-8 col-md-6 col-12 mt-xl-0 mt-3">
              <p className="saying text-xl-start text-center">
                <img
                  className="quote me-2 comma-1"
                  src="https://cdn.asparksys.com/medias/1684390561359.svg"
                  alt=""
                />
                The only way we can fulfil our dream is by being fearless. What
                we want lies on the other side of fear. We can see the future as
                fierce and fearful, or we can see it as the opening of doors to
                newer opportunities and even more incredible achievements. We
                work for excellence and never change our goal to reach success,
                we change our ways to reach out goals. The only way we can
                fulfil our dream is by being fearless. What we want lies on the
                other side of fear. The only way we can fulfil our dream is by
                being fearless. What we want lies on the other side of fear.
                <img
                  className="quote ms-2 comma-2"
                  src="https://cdn.asparksys.com/medias/1684390585934.svg"
                  alt=""
                />
              </p>
              <div className="name-position d-flex flex-column justify-content-center pt-3 text-xl-start text-center">
                <h5>Dr. Emanuel Macron</h5>
                <p className="designation">Chairman, LASK</p>
              </div>
            </div>
          </div>
        </div>
        <div className="team container pt-5 mt-2">
          <h2 className="header pb-4">Meet Our Talented Team Members</h2>
          <div className="row">
            {home?.team_member?.map((user: any, idx: number) => (
              <div key={idx} className="col-xl-4 col-md-6 col-12 mb-4">
                <div className="position-relative w-100 h-100">
                  <img
                    className="img-fluid w-100"
                    src={user?.image}
                    alt={user?.name}
                  />
                  <div className="position-absolute name-position d-flex flex-column justify-content-center p-2 px-4">
                    <h5 className="m-0">{user?.name}</h5>
                    <p className="team-designation">{user?.designation}</p>
                  </div>
                  <div className="overlay position-absolute" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamPage;
