import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="First col-md-12">
          <div className="contact-info">
            <div className="left px-5">
              <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" />
              </a>
              <a href="https://zalo.me/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/zalo.png" alt="Zalo" />
              </a>
            </div>
            <div className="right px-5">
              <a href="tel:+84123456789">123 456 789</a>
              <a href="mailto:email@example.com">email@example.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="col-md-2">
              <a className="navbar-brand" href="#">
                <img
                  src="https://s3-alpha-sig.figma.com/img/00e3/a394/6803569c384bda9c4ecfe9ec596fc962?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIKv2MRRsNKa461t1hBw5udvgVXTxxig~ckzXAvvI30finBGeMRxjVNg3Lptfx8CQMfEcSJMvY5-ZCkMmonHMYS9ijU-URzT9meXTN1XxBt4ODdUGtaXV1jr6REe1yE6-5YgSIPCDkA4I7NMA126~i35Kb1~qd1SkQsnwaxMRT6CXVT~-d6loofy4S-mHlf9lINRdfUmskADuE2sgiRF3gF6N1psbDOK2uc3jlTTzoqzgbUSZ-EEh9w2DgHxkrIo12c9Wop4UgPxJ~HpmjumNlieVflRaLV-4N2GI~bnGMpgxYdg5ONhuPdbrl38nYWIvT8Ce9YEVe~EaFBSx~uA5w__"
                  alt="Brand"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
            <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    TRANG CHỦ
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/intro" className="nav-link">
                    GIỚI THIỆU
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    DỊCH VỤ
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/servi" className="dropdown-item">
                        SPA
                      </Link>
                    </li>
                    <li>
                      <Link to="/book" className="dropdown-item">
                        ĐẶT LỊCH
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="dropdown-item">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/servi" className="dropdown-item">
                        BẢNG GIÁ
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/infor" className="nav-link">
                    BÁC SĨ THÚ Y
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    BÀI VIẾT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    LIÊN HỆ
                  </Link>
                </li>
              </ul>
              <div className="sample nine">
                <input type="text" name="search" placeholder="search" />
                <button type="submit" className="btn btn-search">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>

            {/* Login Icon */}
            <div className="col-md-2 d-flex justify-content-end px-3 icon">
              <Link to="/login">
                <img
                  className="circle-image1"
                  src="https://th.bing.com/th/id/OIP.89Uzc2GRFJeLieCfBsLaiwHaHa?rs=1&pid=ImgDetMain"
                  alt="Login/Signup"
                />
              </Link>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
