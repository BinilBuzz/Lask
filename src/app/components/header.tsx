"use client";
import Link from "next/link";

function Header() {
  return (
    <>
      {/* Start of Register As Client Modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog position-relative">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 text-center modal-body__left">
                  <h2>Register as Client</h2>
                  <p>Download our app, register and enjoy our services</p>
                  <img
                    src="https://cdn.asparksys.com/medias/1684397344997.svg"
                    alt={""}
                  />
                  <p>Download “LASK Client App” at Google Play and App Store</p>
                  <div className="d-flex gap-3 align-items-center justify-content-center mt-3">
                    <div>
                      <img
                        src="https://cdn.asparksys.com/medias/1684397528147.svg"
                        alt={""}
                      />
                    </div>
                    <div>
                      <img
                        src="https://cdn.asparksys.com/medias/1684397631908.svg"
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 modal-body__right">
                  <img
                    className="img-fluid h-100 w-100 borderR"
                    src="https://cdn.asparksys.com/medias/1684996529686.png"
                    alt={""}
                  />
                  <div className="content">
                    <h3>Register as Lawyer</h3>
                    <button className="btn btn-transparent">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Register As Client Modal */}
      {/* Start of Register As Layer Modal */}
      <div
        className="modal fade"
        id="exampleModal-1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog position-relative">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 modal-body__right">
                  <img
                    className="img-fluid h-100 w-100"
                    src="https://cdn.asparksys.com/medias/1684996438131.png"
                    alt={""}
                  />
                  <div className="content">
                    <h3>Register as Client</h3>
                    <button className="btn btn-transparent">Register</button>
                  </div>
                </div>
                <div className="col-lg-6 text-center modal-body__left">
                  <h2>Register as Lawyer</h2>
                  <p>Download our app, register and enjoy our services</p>
                  <img
                    className="img-fluid"
                    src="https://cdn.asparksys.com/medias/1684403209851.svg"
                    alt={""}
                  />
                  <p>Download “LASK Client App” at Google Play and App Store</p>
                  <div className="d-flex gap-3 align-items-center justify-content-center mt-3">
                    <div>
                      <img
                        src="https://cdn.asparksys.com/medias/1684397528147.svg"
                        alt={""}
                      />
                    </div>
                    <div>
                      <img
                        src="https://cdn.asparksys.com/medias/1684397631908.svg"
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Register As Layer Modal */}
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
              <Link href="/">
                <img
                  className="img-fluid h-100 logo"
                  src="https://cdn.asparksys.com/medias/1683783930668.svg"
                  alt={"Logo"}
                />
              </Link>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 header">
              <div className="header__top">
                <ul className="d-flex">
                  <li>
                    <img
                      className="px-2"
                      src="https://cdn.asparksys.com/medias/1683805510019.svg"
                      alt={""}
                    />
                    {/* Start of Sign in / Register btn */}
                    <button
                      className="btn btn-transparent dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign in / Register
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        {/* Button trigger modal */}
                        <button
                          type="button"
                          className="btn btn-primary dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          <img
                            src="https://cdn.asparksys.com/medias/1684409496749.svg"
                            alt={""}
                          />
                          Login / Register as Client
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="btn btn-primary dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal-1"
                        >
                          <img
                            src="https://cdn.asparksys.com/medias/1684409496749.svg"
                            alt={""}
                          />
                          Login / Register as Lawyer
                        </button>
                      </li>
                    </ul>
                    {/* End of Sign in / Register btn */}
                  </li>
                  <li>
                    <img
                      className="px-2"
                      src="https://cdn.asparksys.com/medias/1683805475570.svg"
                      alt={""}
                    />
                    <select
                      className="form-select border-0"
                      aria-label="Default select example"
                    >
                      <option selected>Eng</option>
                      <option value={1}>Polish</option>
                    </select>
                    {/* End of Language btn */}
                  </li>
                </ul>
              </div>
              <div className="header__menu">
                <ul className="d-flex">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li>
                    <Link href="/tariffs">Tariffs</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>

                {/* Mobile Menu */}
                <div className="mobile-menu">
                  <a
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    <img
                      src="https://cdn.asparksys.com/medias/1684484245067.svg"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body mobile">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/services">Our Services</Link>
                    </li>
                    <li>
                      <Link href="/tariffs">Tariffs</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/faqs">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      {/* Start of Sign in / Register btn */}
                      <button
                        className="btn btn-transparent dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sign in / Register
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          {/* Button trigger modal */}
                          <button
                            type="button"
                            className="btn btn-primary dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <img
                              src="https://cdn.asparksys.com/medias/1684409496749.svg"
                              alt={""}
                            />
                            Login / Register as Client
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="btn btn-primary dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal-1"
                          >
                            <img
                              src="https://cdn.asparksys.com/medias/1684409496749.svg"
                              alt={""}
                            />
                            Login / Register as Lawyer
                          </button>
                        </li>
                      </ul>
                      {/* End of Sign in / Register btn */}
                    </li>
                  </ul>
                  <div className="mobile__language">
                    <select
                      className="form-select border-0"
                      aria-label="Default select example"
                    >
                      <option selected>Eng</option>
                      <option value={1}>Polish</option>
                    </select>
                  </div>
                  <div className="col-lg-2 mt-3">
                    <button className="btn btn-secondary w-100">
                      <a href="#">Download App</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 download-app">
              <ul>
                <li>
                  {/* Start of Sign in / Register btn */}
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Download App
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn btn-primary dropdown-item"
                      >
                        <img
                          src="https://cdn.asparksys.com/medias/1684916640300.svg"
                          alt={""}
                        />
                        <a href="#">Download Client App</a>
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="btn btn-primary dropdown-item"
                      >
                        <img
                          src="https://cdn.asparksys.com/medias/1684916640300.svg"
                          alt={""}
                        />
                        <a href="#">Download Lawyer App</a>
                      </button>
                    </li>
                  </ul>
                  {/* End of Sign in / Register btn */}
                </li>
              </ul>
              {/* <button class="btn btn-secondary"><a href="#">Download App</a></button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
