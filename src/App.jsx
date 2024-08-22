import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Header() {

  // js phần ảnh bài viết
  const Card = ({ dataImage, children }) => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const cardRef = useRef(null);
  
    useEffect(() => {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }, []);
  
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      setMouseX(e.pageX - rect.left - width / 2);
      setMouseY(e.pageY - rect.top - height / 2);
    };
  
    const handleMouseLeave = () => {
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000);
    };
  
    const mousePX = mouseX / width;
    const mousePY = mouseY / height;
  
    const cardStyle = {
      transform: `rotateY(${mousePX * 2}deg) rotateX(${mousePY * 2}deg)`,
    };
  
    const cardBgTransform = {
      transform: `translateX(${mousePX * 10}px) translateY(${mousePY * 10}px)`,
    };
  
    const cardBgImage = {
      backgroundImage: `url(${dataImage})`,
    };
  
    return (
      <div
        className="card-wrap"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={cardRef}
      >
        <div className="card" style={cardStyle}>
          <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
          <div className="card-info">{children}</div>
        </div>
      </div>
    );
  };
  
  // js phần login
  const [favState, setFavState] = useState({ isActive: false, isLoading: false });
  const [thumbState, setThumbState] = useState({ isActive: false, isLoading: false });

  function openForm() {
    document.getElementById('loginSignupForm').style.display = 'block';
  }

  function closeForm() {
    document.getElementById('loginSignupForm').style.display = 'none';
  }

  function switchForm(element) {
    const switchers = document.querySelectorAll('.switcher');
    switchers.forEach(item => item.parentElement.classList.remove('is-active'));
    element.parentElement.classList.add('is-active');
  }

  function handleFavClick() {
    if (favState.isActive) {
      setFavState({ isActive: false, isLoading: false });
    } else {
      setFavState({ isLoading: true, isActive: false });
      setTimeout(() => {
        setFavState({ isActive: true, isLoading: false });
      }, 500);
    }
  }

  function handleThumbClick() {
    if (thumbState.isActive) {
      setThumbState({ isActive: false, isLoading: false });
    } else {
      setThumbState({ isLoading: true, isActive: false });
      setTimeout(() => {
        setThumbState({ isActive: true, isLoading: false });
      }, 500);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="First col-md-12">
            <div className="contact-info">
              <div className="left px-5">
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://zalo.me/yourprofile" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/zalo.png"
                    alt="Zalo"
                  />
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
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <div className="col-md-2">
                <a className="navbar-brand" href="#">
                  <img src="https://s3-alpha-sig.figma.com/img/00e3/a394/6803569c384bda9c4ecfe9ec596fc962?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bIKv2MRRsNKa461t1hBw5udvgVXTxxig~ckzXAvvI30finBGeMRxjVNg3Lptfx8CQMfEcSJMvY5-ZCkMmonHMYS9ijU-URzT9meXTN1XxBt4ODdUGtaXV1jr6REe1yE6-5YgSIPCDkA4I7NMA126~i35Kb1~qd1SkQsnwaxMRT6CXVT~-d6loofy4S-mHlf9lINRdfUmskADuE2sgiRF3gF6N1psbDOK2uc3jlTTzoqzgbUSZ-EEh9w2DgHxkrIo12c9Wop4UgPxJ~HpmjumNlieVflRaLV-4N2GI~bnGMpgxYdg5ONhuPdbrl38nYWIvT8Ce9YEVe~EaFBSx~uA5w__" alt="" />
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
              <div
                className="collapse navbar-collapse col-md-8"
                id="navbarSupportedContent"
              >
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
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      DỊCH VỤ
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/servi" className="dropdown-item underline">
                          SPA
                        </Link>
                      </li>
                      <li>
                        <Link to="/servi" className="dropdown-item underline">
                          ĐẶT LỊCH
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link to="/servi" className="dropdown-item underline">
                          BẢNG GIÁ
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/infor" className="nav-link disabled" aria-disabled="true">
                      BÁC SĨ THÚ Y
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog" className="nav-link disabled" aria-disabled="true">
                      BÀI VIẾT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link disabled" aria-disabled="true">
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

              {/* Icon đăng nhập/đăng ký */}
              <div className="col-md-2 d-flex justify-content-end px-3 icon" id="loginSignupIcon" onClick={openForm}>
                <img className="circle-image1" src="https://th.bing.com/th/id/OIP.89Uzc2GRFJeLieCfBsLaiwHaHa?rs=1&pid=ImgDetMain" alt="Login/Signup" />
              </div>
              {/* Form đăng nhập/đăng ký */}
              <div
                id="loginSignupForm"
                className="form-container"
                style={{ display: "none" }}
              >
                <div className="forms">
                  <div className="form-wrapper is-active">
                    <button
                      type="button"
                      className="switcher switcher-login"
                      onClick={() => switchForm(document.querySelector('.switcher-login'))}
                    >
                      <h3>Login</h3>
                      <span className="underline" />
                    </button>
                    <form className="form form-login bg1">
                      <fieldset>
                        <div className="input-block">
                          <label htmlFor="login-email">E-mail</label>
                          <input id="login-email" type="email" required />
                        </div>
                        <div className="input-block">
                          <label htmlFor="login-password">Password</label>
                          <input id="login-password" type="password" required />
                        </div>
                        <div className="forgot">Forgot Password?</div>
                      </fieldset>
                      <button type="submit" className="btn-login">
                        Login
                      </button>
                      <button type="submit" className="btn-login1" onClick={closeForm}>
                        Close
                      </button>
                    </form>
                  </div>
                  <div className="form-wrapper">
                    <button
                      type="button"
                      className="switcher switcher-signup"
                      onClick={() => switchForm(document.querySelector('.switcher-signup'))}
                    >
                      <h3>Sign Up</h3>
                      <span className="underline" />
                    </button>
                    <form className="form form-signup bg1">
                      <fieldset>
                        <div className="input-block">
                          <label htmlFor="signup-email">E-mail</label>
                          <input id="signup-email" type="email" required />
                        </div>
                        <div className="input-block">
                          <label htmlFor="signup-password">Password</label>
                          <input id="signup-password" type="password" required />
                        </div>
                        <div className="input-block">
                          <label htmlFor="signup-password-confirm">Confirm password</label>
                          <input id="signup-password-confirm" type="password" required />
                        </div>
                      </fieldset>
                      <button type="submit" className="btn-signup">
                        Continue
                      </button>
                      <button type="submit" className="btn-signup1" onClick={closeForm}>
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </nav>
        </div>
        <div className="row  pt-4">
          <div className="col-md-12">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://mcdn.coolmate.me/uploads/November2021/spa-thu-cung-la-gi-26.jpg" className="d-block w-100 min-img" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://th.bing.com/th/id/OIP.vxJ4xyQ5OXSHzR7_Kbrx2gHaDs?rs=1&pid=ImgDetMain" className="d-block w-100 min-img" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://file.hstatic.net/1000292100/article/hinh_mau_1024x1024.jpg" className="d-block w-100 min-img" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row background3 pt-5">

        <div className="col-md-6">
          <b className="text-color px-5 fs-1 tracking-in-expand-fwd">PETCARE SPA</b>
          <p className="px-5">
            PetCare Spa là một điểm đến lý tưởng dành cho các thú cưng, nơi mang đến
            dịch vụ chăm sóc và làm đẹp chuyên nghiệp, giúp thú cưng của bạn luôn
            cảm thấy thoải mái và tươi mới. Tại PetCare Spa, chúng tôi cam kết cung
            cấp một môi trường thư giãn và chăm sóc tận tâm, với đội ngũ nhân viên
            giàu kinh nghiệm và tình yêu thương đối với thú cưng.
          </p>
          <div >
            <button
              className={`button fav rounded ${favState.isActive ? 'is-active' : ''} ${favState.isLoading ? 'is-loading' : ''}`}
              onClick={handleFavClick}
            >
              <i className="fa fa-star" />
            </button>
            <button
              className={`button thumb rounded ${thumbState.isActive ? 'is-active' : ''} ${thumbState.isLoading ? 'is-loading' : ''}`}
              onClick={handleThumbClick}
            >
              <i className="fa fa-thumbs-up" />
            </button>
          </div>

        </div>



          <div className="col-md-3 image-container">
            <Card dataImage="https://s3-alpha-sig.figma.com/img/a117/aad9/fdd21e035b0191f117f0633e4ada2e9f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCSBpa8nwiyIi4jLb8Bf-BD6TMuoA4P-YScmijxEfDRn2C~pStf2NY8RU6UyBrk1j1X5wFsrT3etkSFGkSVc4lJ2TdneMmaZuJCnEjhv-NfdMrng1dhl7H6xa3RPhCewZY48tY1OI-gn0uqmBhRgFt48mTVQT-yPPt8PLKoa8Q8qE-ZPJ31Hg3CH6g9c9HKckbDQDcTsMXdiJzxbUCQqp41xEI5U0nVpmoYD8CoFgDkhzx8Lmb4rHMJWFw866-dvSbnrcyYC~iR1f9MXLTdUGYp6xy-iehvvbYpi3UOpzgwOi5I-PTb3ykWLeB06po1Ea3rzANO720zTzAQDNyjOfA__">
            </Card>
            <Card dataImage="https://s3-alpha-sig.figma.com/img/e6da/34fb/e7b3058f56fa47514fc6e7a1e85d82b9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcc2MI5zMRDvsjaULEdnw1Wae1Rt1PvMnbA2WLyISU3r2~dKCcq1lao2yNODBIpFIDUe6GCRyx1Y-0SRaZLZj4o~-7ob8Mva1HYnWpEC~qiXB~rl8xcT9eAQSVG9F~wgQ9eTobq9l20CxnVmqmtLEEx2B0dfwbMybDJH7neZS8QIfm649AfS6Oj-v5anvqFahG~-mQpVj5KzI6b5tqJtAFVGw8kswQETyqiOQ67lOsbHpPNZs05jQSqSlqCNCnPl0Vt0gpYvZ7Jwi71B7g-aPTroYYhVdsmfs28KYK7Z0lUqN7cLtX3ted8-TRijJEClORmHd1PM-o9Wnd-VAyj6LA__">
            </Card>
      
            {/* <img className='radius-image1 puff-in-center' src="https://s3-alpha-sig.figma.com/img/a117/aad9/fdd21e035b0191f117f0633e4ada2e9f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCSBpa8nwiyIi4jLb8Bf-BD6TMuoA4P-YScmijxEfDRn2C~pStf2NY8RU6UyBrk1j1X5wFsrT3etkSFGkSVc4lJ2TdneMmaZuJCnEjhv-NfdMrng1dhl7H6xa3RPhCewZY48tY1OI-gn0uqmBhRgFt48mTVQT-yPPt8PLKoa8Q8qE-ZPJ31Hg3CH6g9c9HKckbDQDcTsMXdiJzxbUCQqp41xEI5U0nVpmoYD8CoFgDkhzx8Lmb4rHMJWFw866-dvSbnrcyYC~iR1f9MXLTdUGYp6xy-iehvvbYpi3UOpzgwOi5I-PTb3ykWLeB06po1Ea3rzANO720zTzAQDNyjOfA__" alt="" />
            <img className='radius-image1 puff-in-center' src="https://s3-alpha-sig.figma.com/img/e6da/34fb/e7b3058f56fa47514fc6e7a1e85d82b9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcc2MI5zMRDvsjaULEdnw1Wae1Rt1PvMnbA2WLyISU3r2~dKCcq1lao2yNODBIpFIDUe6GCRyx1Y-0SRaZLZj4o~-7ob8Mva1HYnWpEC~qiXB~rl8xcT9eAQSVG9F~wgQ9eTobq9l20CxnVmqmtLEEx2B0dfwbMybDJH7neZS8QIfm649AfS6Oj-v5anvqFahG~-mQpVj5KzI6b5tqJtAFVGw8kswQETyqiOQ67lOsbHpPNZs05jQSqSlqCNCnPl0Vt0gpYvZ7Jwi71B7g-aPTroYYhVdsmfs28KYK7Z0lUqN7cLtX3ted8-TRijJEClORmHd1PM-o9Wnd-VAyj6LA__" alt="" /> */}
          </div>
          <div className="col-md-3 image-container">
            <Card dataImage="https://s3-alpha-sig.figma.com/img/f0e7/b3c2/86cc14695a3159d24ef841f0963d5be2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUNwS1P2gtv6pAN5aq9rZopn1RxjW5KACg4oI6v5v3ALajvZoEEt7hgmMhVzNHr1WATm4wi7R47I9UpQV9Vd0VxAzBSGNOteVVYqczHxv9sZ4llrvE~3GNQCn~Clmr8QQIo3A8fN3ihiBfECDDyzNLPH34T7BRWNFQfUVYJc--gdXtlqd1t2xQ0bePsPbdScQxzokS~oLbyn4ZLqORskC0wTzJwlOLCfucSK~cy84GMz-zF1rbCjp4KUE9KMKzl1ZQhbWZo4PdpWVTR1VqfyDY1oynXmOT8NA1BZyj4Txfh0J3UU~MJKDWEQbfbtdRXF4hH9rGOuqein~sFKLcS4VA__">
            </Card>
            <Card dataImage="https://s3-alpha-sig.figma.com/img/ff60/eacc/b9397e4ac7e65f0a480301c414dac199?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vud-x0hO7wzu1HvEyClMxSA5GdaaNvQClI70dmkH0Uu9O0NC1~Mo6SZJngthcVhokX41SzHH~W9mahEHSveIU8BvBQ8esjBfD8uNntxPlJOQjxn18JlYsaLVovh3VlYmp4~x3lQDtxKPo7pgtBuU06D4F3SfuWB9zWe9glNDGjeLI~WKKqGmkawwTcljipijVj1DfkFN1fgUBlMvQDzKfwR2b4usWQDj-7F4~xHOeWbToWySf4n5d2RK6oYifDw4gbWw6JY07bZUp7cdMd~ESi24uf4Ql0zvtKGlKbI-2-6p8QcdUH7C4QAUQXpZ0lFbDbEkTSwocHLFhXz-1uIdhQ__">
            </Card>
            {/* <img className='radius-image1 puff-in-center' src="https://s3-alpha-sig.figma.com/img/f0e7/b3c2/86cc14695a3159d24ef841f0963d5be2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUNwS1P2gtv6pAN5aq9rZopn1RxjW5KACg4oI6v5v3ALajvZoEEt7hgmMhVzNHr1WATm4wi7R47I9UpQV9Vd0VxAzBSGNOteVVYqczHxv9sZ4llrvE~3GNQCn~Clmr8QQIo3A8fN3ihiBfECDDyzNLPH34T7BRWNFQfUVYJc--gdXtlqd1t2xQ0bePsPbdScQxzokS~oLbyn4ZLqORskC0wTzJwlOLCfucSK~cy84GMz-zF1rbCjp4KUE9KMKzl1ZQhbWZo4PdpWVTR1VqfyDY1oynXmOT8NA1BZyj4Txfh0J3UU~MJKDWEQbfbtdRXF4hH9rGOuqein~sFKLcS4VA__" alt="" />
            <img className='radius-image1 puff-in-center' src="https://s3-alpha-sig.figma.com/img/ff60/eacc/b9397e4ac7e65f0a480301c414dac199?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vud-x0hO7wzu1HvEyClMxSA5GdaaNvQClI70dmkH0Uu9O0NC1~Mo6SZJngthcVhokX41SzHH~W9mahEHSveIU8BvBQ8esjBfD8uNntxPlJOQjxn18JlYsaLVovh3VlYmp4~x3lQDtxKPo7pgtBuU06D4F3SfuWB9zWe9glNDGjeLI~WKKqGmkawwTcljipijVj1DfkFN1fgUBlMvQDzKfwR2b4usWQDj-7F4~xHOeWbToWySf4n5d2RK6oYifDw4gbWw6JY07bZUp7cdMd~ESi24uf4Ql0zvtKGlKbI-2-6p8QcdUH7C4QAUQXpZ0lFbDbEkTSwocHLFhXz-1uIdhQ__" alt="" /> */}
          </div>
        </div>



        <div className="row background1 pt-5 pb-5">
          <div className="col-md-4 ">
            <b className="px-5 text-color fs-1">DỊCH VỤ</b>
          </div>
          <div className="col-md-8 ">
            <button type="button" className="box1">
              TẤT CẢ DỊCH VỤ
            </button>
          </div>
          <div className="col-md-4 pt-4">
            <div className="box2 mt-4 mt-4">
              <h5 className="text-color">CẮT, TỈA LÔNG</h5>
              <p>
                Với đội ngũ nhân viên chuyên nghiệp và giàu kinh nghiệm, chúng tôi sử
                dụng các kỹ thuật cắt tỉa hiện đại và an ...
              </p>
            </div>
            <div className="box2 mt-4 mt-4">
              <h5 className="text-color">TẠO KIỂU</h5>
              <p>
                Dịch vụ tạo kiểu thú cưng của chúng tôi mang đến những kiểu dáng độc
                đáo và thời trang, giúp thú cưng của bạn luôn nổi bật và đáng yêu ...
              </p>
            </div>
            <div className="box2 mt-4 mb-4">
              <h5 className="text-color">MASSAGE THƯ GIÃN</h5>
              <p>
                Dịch vụ massage thú cưng của chúng tôi mang đến trải nghiệm thư giãn
                và phục hồi sức khỏe...
              </p>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="content">
              <img
                src="https://s3-alpha-sig.figma.com/img/f5dd/526c/c4cd4e2c062244ab2c0ff7e698b377e1?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGum231xacGTk9IAGuibaqAto1CvjIBo2YgArNiOICtvTQjZ9oYZ8b~1sM67FAAdltTfafI2dPjcfceeKoYQNwFi1EatFt31gu107rj3abkDCU4mYukEoc6JwkWWg4kr7Zw9Koj7XsDtzVxDs4iZEhIKR4QLtdxNT8Vez4N6nDBbfh~4Otkq5rNF2xhW3DGmMZkOud5r4ThztKb9vFApCG9GITjzP7zWwQDyh8zQus7H5vv-XVf-T4tOTwrrWemhKA0UPCI-w39Ig65AqAmChVxFHVCB9q8mCiTuwCGLfczJSKf6j9tsWVCltymebr-M975efDu-HvKmIfymab6kFw__"
                alt="Background Image"
                className=" img-radius img-fluid"
              />
              <div className="content__container">
                <p className="content__container__text ">Cam kết: </p>
                <ul className="content__container__list">
                  <li className="content__container__list__item"></li>
                  <li className="content__container__list__item">Ngon !</li>
                  <li className="content__container__list__item">Bổ !</li> 
                  <li className="content__container__list__item">Rẻ !</li>
                </ul>
              </div>
              <div className='content__container1 '>
                <ul className="content__container__list">
                  <li className="content__container__list__item1">Chăm sóc </li>
                  <li className="content__container__list__item1">Yêu thương </li>
                </ul>
              </div>
              <div className='content__container2 '>
                <ul className="content__container__list">
                  <li className="content__container__list__item1">Tận tình </li>
                  <li className="content__container__list__item1">Hết mình</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 pt-4">
            <div className="box2 mt-4 mt-4">
              <h5 className="text-color">VỆ SINH TAI</h5>
              <p>
                Dịch vụ vệ sinh tai thú cưng của chúng tôi đảm bảo tai của thú cưng
                luôn sạch sẽ và khỏe mạnh, ngăn ngừa các bệnh về tai ...
              </p>
            </div>
            <div className="box2 mt-4 mt-4">
              <h5 className="text-color">TẮM TRỊ LIỆU KHỬ MÙI</h5>
              <p>
                Dịch vụ cắt mài móng thú cưng của chúng tôi đảm bảo móng của thú cưng
                luôn được duy trì ở độ dài lý tưởng ...
              </p>
            </div>
            <div className="box2 mt-4 mt-4">
            <h5 className="text-color">CẮT,TỈA MÓNG</h5>
              <p>
                Dịch vụ cắt mài móng thú cưng của chúng tôi giúp duy trì móng của thú
                cưng ở độ dài lí tưởng...
              </p>
            </div>
          </div>
        </div>
        <div className="row background3 pt-5">
          <div className="col-md-4">
            <b className="px-5 text-color fs-1">BÀI VIẾT</b>
          </div>
          <div className="col-md-8">
            <button type="button" className="box1">
              TẤT CẢ BÀI VIẾT
            </button>
          </div>


          <div className="col-md-12 pt-5 ">
            <div id="app" className="container1">
              <Card dataImage="https://s3-alpha-sig.figma.com/img/a117/aad9/fdd21e035b0191f117f0633e4ada2e9f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KCSBpa8nwiyIi4jLb8Bf-BD6TMuoA4P-YScmijxEfDRn2C~pStf2NY8RU6UyBrk1j1X5wFsrT3etkSFGkSVc4lJ2TdneMmaZuJCnEjhv-NfdMrng1dhl7H6xa3RPhCewZY48tY1OI-gn0uqmBhRgFt48mTVQT-yPPt8PLKoa8Q8qE-ZPJ31Hg3CH6g9c9HKckbDQDcTsMXdiJzxbUCQqp41xEI5U0nVpmoYD8CoFgDkhzx8Lmb4rHMJWFw866-dvSbnrcyYC~iR1f9MXLTdUGYp6xy-iehvvbYpi3UOpzgwOi5I-PTb3ykWLeB06po1Ea3rzANO720zTzAQDNyjOfA__">
                <h1 slot="header">CÁCH CHĂM SÓC THÚ CỨNG TẠI NHÀ</h1>
                <p slot="content">Chăm sóc thú cưng không chỉ là trách nhiệm mà còn là một phần của tình yêu thương mà bạn dành cho người bạn bốn chân của ...</p>
              </Card>
              <Card dataImage="https://s3-alpha-sig.figma.com/img/e6da/34fb/e7b3058f56fa47514fc6e7a1e85d82b9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qcc2MI5zMRDvsjaULEdnw1Wae1Rt1PvMnbA2WLyISU3r2~dKCcq1lao2yNODBIpFIDUe6GCRyx1Y-0SRaZLZj4o~-7ob8Mva1HYnWpEC~qiXB~rl8xcT9eAQSVG9F~wgQ9eTobq9l20CxnVmqmtLEEx2B0dfwbMybDJH7neZS8QIfm649AfS6Oj-v5anvqFahG~-mQpVj5KzI6b5tqJtAFVGw8kswQETyqiOQ67lOsbHpPNZs05jQSqSlqCNCnPl0Vt0gpYvZ7Jwi71B7g-aPTroYYhVdsmfs28KYK7Z0lUqN7cLtX3ted8-TRijJEClORmHd1PM-o9Wnd-VAyj6LA__">
                <h1 slot="header">TẠI SAO BẠN MUỐN NUÔI THÚ CƯNG?</h1>
                <p slot="content">Nuôi thú cưng không chỉ đơn thuần là việc sở hữu một con vật, mà là một quyết định sâu sắc liên quan đến việc chia sẻ cuộc sống của bạn với một người bạn bốn chân đáng yêu...</p>
              </Card>
              <Card dataImage="https://s3-alpha-sig.figma.com/img/f0e7/b3c2/86cc14695a3159d24ef841f0963d5be2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TUNwS1P2gtv6pAN5aq9rZopn1RxjW5KACg4oI6v5v3ALajvZoEEt7hgmMhVzNHr1WATm4wi7R47I9UpQV9Vd0VxAzBSGNOteVVYqczHxv9sZ4llrvE~3GNQCn~Clmr8QQIo3A8fN3ihiBfECDDyzNLPH34T7BRWNFQfUVYJc--gdXtlqd1t2xQ0bePsPbdScQxzokS~oLbyn4ZLqORskC0wTzJwlOLCfucSK~cy84GMz-zF1rbCjp4KUE9KMKzl1ZQhbWZo4PdpWVTR1VqfyDY1oynXmOT8NA1BZyj4Txfh0J3UU~MJKDWEQbfbtdRXF4hH9rGOuqein~sFKLcS4VA__">
                <h1 slot="header">XU HƯỚNG NUÔI THÚ CƯNG 2024</h1>
                <p slot="content">Trong những năm gần đây, xu hướng nuôi thú cưng đã chứng kiến sự thay đổi đáng kể, phản ánh sự phát triển của xã hội và nhu cầu ngày càng cao của các gia đình..</p>
              </Card>
            </div>
          </div>
         

        </div>
        <div className="row background1">
          <div className="col-md-12 pt-3 pb-5">
            <b className="px-5 text-color fs-1">PHẢN HỒI TỪ KHÁCH HÀNG</b>
          </div>
          <div className="col-md-4">
            <div className="card1 p-4" style={{ width: "18rem" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/83cb/ae87/d61ea59a0b9184695e9876c3ca3d6d4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJEdCPfk5yO5IS6mL5lOUV5CKUHvs3U~3ItESNVE8VjhhnsCHTyhBoLtdz9ZfUooVBXoBBcxpWZm3KwE3K~ZUGucglfyM8zQcDcVIL-T0WuddWzHE5YWJLxDffieCH0GE0U1mKT9s8Fuvxoniq0p2diMqr0XzCGH1UJbg9I1upSwXUaPKpnRWRVtSmIwlQKrd4--vemOsTVs4HwirpglrVrfLC-8fq3HFEw8ShfrpiP~k44VZId1ycmYOQ-lQMANmo-g1gIqXMg8UeZN1gPVYEUHtNlfc50EeoUWYPKZYDRDyqN9SSSArWGKyC8TDP9nruBrrX85D-N1Djp-t7nnZw__"
                className="card-img-top circle-image"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  “Dịch vụ cắt tỉa lông tại đây thật tuyệt vời! Thú cưng của tôi luôn
                  được chăm sóc tỉ mỉ và ra ngoài trông thật đáng yêu. Tôi rất hài
                  lòng với sự chuyên nghiệp và tận tâm của đội ngũ nhân viên.”
                </p>
                <h5 className="card-title">Nguyễn Anh Thư</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-5">
            <div className="card1 p-4" style={{ width: "18rem" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/2032/3594/842a6398823054a5d4c2644aa1f13da2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LGYWuMt27nE~3kTfieUhdSwfHceIE6Xmb8vyLs6aMNkrg0IOFXTenP0NGvmxnpFMyCTufZPGdE7p5QlLco5rAadp97TrCo0ySFADLcLMtbAS8vwuOAo6GgVdBRBaPx-LsDUzQA0w0B7bnsnsuWZlemEe7SQB--tV3aCkOZHq28poDY33OjzVRCKo~UJdlAqHXb~eg9~8ReyBCIT8FJZ-FpKQBIiMNyHzB2Col3iGmf9Oqq8zNEo2RITqmp8YBT9RYsjcqkxnpGiroBLY9uhgFJbz5ayFxfuQiIJBm-dRfbA42flcKrCXNfsly7tBUowAy4ONGW0~EIVNBGUG5U3ftA__"
                className="card-img-top circle-image"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  “Tôi rất ấn tượng với dịch vụ vệ sinh tai của các bạn. Quá trình
                  diễn ra rất nhẹ nhàng và hiệu quả, khiến cho chú chó của tôi cảm
                  thấy thoải mái hơn hẳn. Đây là nơi tôi tin tưởng nhất khi cần chăm
                  sóc thú cưng của mình.”
                </p>
                <h5 className="card-title">Trần Ngọc Ánh</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-4">
            <div className="card1 p-4" style={{ width: "18rem" }}>
              <img
                src="https://s3-alpha-sig.figma.com/img/2bb1/13cf/e3e3ed78a16c99b40230b20f3f608f64?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=auQkUVrLlro28nY3y3pG3P6BiowrgkeDFDWgV2rMmRSd3YCOcq0PqyrUi1mnwWKXWMT-tf~rLNyKUlviGA997xR0tpz6aNt2GC20~7WjT7oX21SqHJUAellRmz0Rs7uRA0z8W0nwGvAMxGpdGfzFiv6LACOocP68NR5hqNF1Q2qx5CP~8~EU9OGPGel4zw6YR-XiBWqsYIqTVcXGV~uvsV1z87V5F1l~0WCf8Zy76X51yvl8EGp75KAuorFugahs2KlibqBGL~gt0AUde1CBdMzew0NkERJNPjm9FPoEuvkaXfXhXgWButI4ZwFm7dral9H4DjHJlHK-~4Aa7B2d9A__"
                className="card-img-top circle-image"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                “Dịch vụ massage thú cưng ở đây là một trải nghiệm tuyệt vời! Mèo
                  của tôi đã thư giãn hoàn toàn và rất thích thú sau mỗi buổi massage.
                  Tôi cảm nhận rõ sự khác biệt trong sức khỏe và tâm trạng của nó.”
                </p>
                <h5 className="card-title">Phạm Hương</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row background2 mt-5 mb-5">
          <div className="col-md-3 pt-5">
            <a className="navbar-brand" href="#">
              <img src="https://s3-alpha-sig.figma.com/img/1838/6278/b894b8735ebdeeeba32f4a6299d46003?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMZia6oTUQBQbR72wICyBA6OE4KiqutnWimrUzggslwFwD2k96ZfQFwtCjT4jRJKOyxw24Z4znPFllK4DuiGQkUKNmodCQ5endVyxuVYzLf-UdQ5TkA3p1R-QXKYcaO9tdlm060e5L5X~F-prZ7Eyr4Med7xhDxdmUWYPUomCEI-YIDsy75kXKS77Nj0jVtSN9zSwD-ArZ1tIE3KYdHD-M3Q7F4vUYZM4swXr129bFsJ2xvG9GJYiaGV1jhXEOjJpIrE4y783iMlv9cb1KGGpAx2Mql7pay1u83s4VHQz-giSZeeeb04~YJgNGoHpgxEGDGq2P8~uuNlVLbV5KIudA__" alt="" />
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
          <div className="col-md-3 pt-4 pb-5">
            <h3 className="text-color pb-3">ĐỊA CHỈ</h3>
            <p className="text-color gap1">Hoàng Mai, Hà Nội</p>
          </div>
          <div className="col-md-3 pt-4 pb-5">
            <h3 className="text-color pb-3">LIÊN HỆ</h3>
            <p className="text-color gap1">petcare@gmail.com</p>
            <p className="text-color gap1">123-456-7890</p>
          </div>
          <div className="col-md-3 pt-4 pb-5">
            <h3 className="text-color pb-3">MẠNG XÃ HỘI</h3>
            <div className="d-flex gap-1">
              <a
                rel="nofollow noreferrer"
                href="https://www.facebook.com/tiki.vn/"
                title="Facebook"
              >
                <img
                  className="img1"
                  src="https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png"
                  alt="Facebook"
                />
              </a>
              <a
                rel="nofollow noreferrer"
                href="https://www.youtube.com/"
                title="Youtube"
              >
                <img
                  className="img1"
                  src="https://img.icons8.com/?size=512&id=QyYjooyvYGgV&format=png"
                  alt="Youtube"
                />
              </a>
              <a
                rel="nofollow noreferrer"
                href="http://zalo.me/589673439383195103"
                title="Zalo"
              >
                <img
                  className="img1"
                  src="https://img.icons8.com/?size=512&id=0m71tmRjlxEe&format=png"
                  alt="Zalo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
