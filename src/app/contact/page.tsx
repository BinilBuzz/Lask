"use client";
import "bootstrap/dist/css/bootstrap.css";
import "./contactStyles.scss";
import "../globals.scss";
import "../home.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import InnerBanner from "../components/banner";
import { Banner, BannerPageProps } from "../interfaces/products";

const breadcrumbStyle: any = {
  "--bs-breadcrumb-divider": ">",
};

interface Form {
  id?: number;
  name?: string;
  email?: string;
  phone_number?: number;
  subject?: string;
  message?: string;
}

function ContactPage() {
  const [placementType, setPlacementType] = useState<Banner[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // Form Success Message
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = async (data: any) => {
    console.log(data);
    setIsSubmitted(true);
    setIsLoading(true);
    reset();
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Perform actual form submission logic here
      console.log(data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const payloadForm = {
    name: "name",
    email: "abc@gmail.com",
    phone_number: "phone",
    subject: "subject",
    message: "message",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://dev.lask.asparksys.cloud/api/contact/",
          payloadForm,
          { headers }
        );
        //setValue("name", response.data.name); // Assuming the API returns a "name" field
        // console.log(response.data.name);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [setValue]);

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
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Service Banner Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <InnerBanner placementType="contact" />
          </div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="row">
            {/* About Content */}
            <h2>Let’s stay connected</h2>
            {/* Contact Details */}
            <div className="contact-section">
              <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons">
                          <img
                            src="https://cdn.asparksys.com/medias/1664277582661.png"
                            alt={""}
                          />
                        </span>
                        <span className="details__text">Address</span>
                        <span className="details__address">
                          {organization?.organization?.address}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons">
                          <img
                            src="https://cdn.asparksys.com/medias/1664278409271.png"
                            alt={""}
                          />
                        </span>
                        <span className="details__text">Phone</span>
                        <span className="details__address">
                          <a
                            href={
                              "tel:${organization?.organization?.primary_contact_number}"
                            }
                          >
                            {organization?.organization?.primary_contact_number}
                          </a>
                          ,
                          <a
                            href={
                              "tel:${organization?.organization?.secondary_contact_number}"
                            }
                          >
                            {
                              organization?.organization
                                ?.secondary_contact_number
                            }
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons">
                          <img
                            src="https://cdn.asparksys.com/medias/1664278494701.png"
                            alt={""}
                          />
                        </span>
                        <span className="details__text">Email</span>
                        <span className="details__address">
                          <a
                            href={
                              "mailto:${organization?.organization?.primary_company_email}"
                            }
                          >
                            {organization?.organization?.primary_company_email}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99483.95037070292!2d-9.262174982263346!3d38.812452894217785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2snp!4v1684468014045!5m2!1sen!2snp"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
                {/* Contact Form */}
                <div className="col-lg-5 col-md-6 col-sm-12">
                  <div className="contact-section__form">
                    <form
                      noValidate
                      onSubmit={handleSubmit(onSubmit)}
                      className="form-group"
                    >
                      <h3>Contact Us</h3>
                      {/****** 1st row  ******/}
                      <div className="row">
                        {/* Full Name  */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <label htmlFor="">
                            {" "}
                            Name<span className="red-star">*</span>{" "}
                          </label>
                          <div className="">
                            <input
                              type="text"
                              placeholder="Enter your name"
                              className="form-control"
                              aria-invalid={errors.name ? "true" : "false"}
                              {...register("name", {
                                required: true,
                                maxLength: 30,
                              })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.name && errors.name.type === "required" && (
                              <span role="alert" className="red-star">
                                Name is required
                              </span>
                            )}
                            {errors.name &&
                              errors.name.type === "maxLength" && (
                                <span role="alert" className="red-star">
                                  Max length exceeded
                                </span>
                              )}
                          </div>
                        </div>
                        {/* Email  */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 secRow">
                          <label htmlFor="">
                            {" "}
                            Email<span className="red-star">*</span>{" "}
                          </label>
                          <div className="">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              className="form-control"
                              aria-invalid={errors.email ? "true" : "false"}
                              {...register("email", {
                                required: true,
                                maxLength: 35,
                              })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.email &&
                              errors.email.type === "required" && (
                                <span className="red-star" role="alert">
                                  Email is required
                                </span>
                              )}
                            {errors.email &&
                              errors.email.type === "maxLength" && (
                                <span role="alert" className="red-star">
                                  Max length exceeded
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                      {/****** 2nd Row ******/}
                      <div className="row">
                        {/* Select Options */}
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                          <label htmlFor="">
                            Phone Number<span className="red-star">*</span>
                          </label>
                          <div className="">
                            <input
                              type="number"
                              placeholder="Enter your number"
                              className="form-control"
                              aria-invalid={errors.phone ? "true" : "false"}
                              {...register("phone", {
                                required: true,
                                valueAsNumber: true,
                                maxLength: 12,
                              })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.phone &&
                              errors.phone.type === "required" && (
                                <span className="red-star" role="alert">
                                  Phone number is required
                                </span>
                              )}
                            {errors.phone &&
                              errors.phone.type === "maxLength" && (
                                <span role="alert" className="red-star">
                                  Max length exceeded
                                </span>
                              )}
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 secRow">
                          <label htmlFor="">
                            Purpose<span className="red-star">*</span>
                          </label>
                          <select
                            className="form-select form-select-lg"
                            aria-invalid={errors.subject ? "true" : "false"}
                            {...register("subject", {
                              required: true,
                            })}
                          >
                            <option className="custom-opt" value={1}>
                              I need help to download app
                            </option>
                            <option className="custom-opt" value={2}>
                              I dont have any idea how to use Apps
                            </option>
                            <option className="custom-opt" value={3}>
                              Network did not work
                            </option>
                            <option className="custom-opt" value={4}>
                              I want admin to call me
                            </option>
                            <option className="custom-opt" value={5}>
                              More problem we will update this list later
                            </option>
                          </select>
                          {/* use role="alert" to announce the error message */}
                          {errors.subject &&
                            errors.subject.type === "required" && (
                              <span className="red-star" role="alert">
                                Subject is required
                              </span>
                            )}
                        </div>
                      </div>
                      {/****** 3rd row ******/}
                      <div className="row">
                        {/* Message  */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label htmlFor="">
                            How can we help you?
                            <span className="red-star">*</span>
                          </label>
                          <div className="">
                            <textarea
                              className="form-control"
                              rows={5}
                              placeholder="Enter your message"
                              aria-invalid={errors.message ? "true" : "false"}
                              {...register("message", {
                                required: true,
                              })}
                            />
                            {/* use role="alert" to announce the error message */}
                            {errors.message &&
                              errors.message.type === "required" && (
                                <span role="alert" className="red-star">
                                  Message is required
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                      {/* Lead add 6th row  */}
                      <div>
                        <button
                          type="submit"
                          className="btn btn-blue w-100"
                          disabled={isLoading}
                        >
                          {isLoading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                      <div className="pt-3">
                        {isSubmitted && !isLoading && (
                          <span className="success-message">
                            Form submitted successfully!
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactPage;
