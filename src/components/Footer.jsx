import React from 'react';


const Footer = () => {
    return (
       <div className='container'>
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
    )
}


export default Footer;