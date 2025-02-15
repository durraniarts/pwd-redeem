import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="site-header mo-left header style-1">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar !border-b !border-black/10 after:block after:content-[''] after:clear-both">
          <div className="container-fluid after:block after:content-[''] after:clear-both lg:flex block">
            {/* Website Logo */}
            <div className="logo-header logo-dark md:mr-12">
              <Link href="/">
                <a>
                  <Image src="/assets/images/logo.svg" alt="logo" width={100} height={50} />
                </a>
              </Link>
            </div>

            {/* Nav Toggle Button */}
            <button className="navbar-toggler collapsed navicon justify-end" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Main Navigation */}
            <div className="header-nav w3menu navbar-collapse justify-start w3menu" id="navbarNavDropdown">
              <div className="logo-header logo-dark">
                <Link href="/">
                  <a>
                    <Image src="/assets/images/logo.svg" alt="logo" width={100} height={50} />
                  </a>
                </Link>
              </div>
              <ul className="nav navbar-nav">
                {/* Home Menu */}
                <li className="has-mega-menu sub-menu-down auto-width menu-left">
                  <a href="javascript:void(0);">
                    <span>Home</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu">
                    <ul className="demo-menu mb-0">
                      <li>
                        <Link href="/index">
                          <a>
                            <Image src="/assets/images/demo/demo-1.png" alt="Home Page 1" width={200} height={100} />
                            <span className="menu-title">01 Home Page</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-2">
                          <a>
                            <Image src="/assets/images/demo/demo-2.png" alt="Home Page 2" width={200} height={100} />
                            <span className="menu-title">02 Home Page</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/index-3">
                          <a>
                            <Image src="/assets/images/demo/demo-3.png" alt="Home Page 3" width={200} height={100} />
                            <span className="menu-title">03 Home Page</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Shop Menu */}
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Shop</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu shop-menu">
                    <ul>
                      <li className="side-left">
                        <ul>
                          <li>
                            <a href="javascript:void(0);" className="menu-title">Shop Structure</a>
                            <ul>
                              <li><Link href="/shop-standard"><a>Shop Standard</a></Link></li>
                              <li><Link href="/shop-list"><a>Shop List</a></Link></li>
                              <li><Link href="/shop-with-category"><a>Shop With Category</a></Link></li>
                              {/* Add more shop links here */}
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="side-right">
                        <div className="adv-media">
                          <Image src="/assets/images/adv-1.png" alt="Advertisement" width={300} height={200} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Blog Menu */}
                <li className="has-mega-menu sub-menu-down auto-width">
                  <a href="javascript:void(0);">
                    <span>Blog</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" className="menu-title">Blog Dark Style</a>
                        <ul>
                          <li><Link href="/blog-dark-2-column"><a>Blog 2 Column</a></Link></li>
                          <li><Link href="/blog-dark-2-column-sidebar"><a>Blog 2 Column Sidebar</a></Link></li>
                          {/* Add more blog links here */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Portfolio Menu */}
                <li className="has-mega-menu sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>Portfolio</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu portfolio-menu">
                    <ul>
                      <li className="side-left">
                        <ul className="portfolio-nav-link">
                          <li>
                            <Link href="/portfolio-tiles">
                              <a>
                                <Image src="/assets/images/portfolio/icons/portfolio-tiles.svg" alt="Portfolio Tiles" width={30} height={30} />
                                <span>Portfolio Tiles</span>
                              </a>
                            </Link>
                          </li>
                          {/* Add more portfolio links here */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* Pages Menu */}
                <li className="has-mega-menu sub-menu-down wide-width">
                  <a href="javascript:void(0);">
                    <span>Pages</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <div className="mega-menu">
                    <ul>
                      <li>
                        <a href="javascript:void(0);" className="menu-title">Pages</a>
                        <ul>
                          <li><Link href="/about-us"><a>About Us</a></Link></li>
                          <li><Link href="/about-me"><a>About Me</a></Link></li>
                          {/* Add more page links here */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                {/* My Account Menu */}
                <li className="sub-menu-down">
                  <a href="javascript:void(0);">
                    <span>My Account</span>
                    <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><Link href="/account-dashboard"><a>Dashboard</a></Link></li>
                    <li><Link href="/account-orders"><a>Orders</a></Link></li>
                    {/* Add more account links here */}
                  </ul>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="dz-social-icon">
                <ul>
                  <li>
                    <a className="fab fa-facebook-f" target="_blank" href="https://www.facebook.com/dexignzone"></a>
                  </li>
                  <li>
                    <a className="fab fa-twitter" target="_blank" href="https://twitter.com/dexignzones"></a>
                  </li>
                  <li>
                    <a className="fab fa-linkedin-in" target="_blank" href="https://www.linkedin.com/showcase/3686700/admin/"></a>
                  </li>
                  <li>
                    <a className="fab fa-instagram" target="_blank" href="https://www.instagram.com/dexignzone/"></a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Extra Navigation (Login, Search, Cart, etc.) */}
            <div className="extra-nav" x-data="{ tab: 'shoppingcart' }">
              <div className="extra-cell">
                <ul className="header-right">
                  <li className="nav-item login-link">
                    <Link href="/shop-my-account">
                      <a className="nav-link border-b border-[#0000005c]">Login / Register</a>
                    </Link>
                  </li>
                  <li>
                    <a href="javascript:void(0);" className="offcanvas-btn" data-target="offcanvasTop">
                      <i className="iconly-Light-Search"></i>
                    </a>
                  </li>
                  <li>
                    <a className="offcanvas-btn" href="javascript:void(0);" data-target="offcanvasRight">
                      <i className="iconly-Light-Heart2"></i>
                    </a>
                  </li>
                  <li>
                    <a className="offcanvas-btn" href="javascript:void(0);" data-target="offcanvasRight">
                      <i className="iconly-Broken-Buy"></i>
                      <span className="absolute -top-1 right-0.5 text-[11px] flex items-center justify-center min-h-4.5 min-w-4.5 font-bold rounded-full bg-primary text-white">5</span>
                    </a>
                  </li>
                  <li className="filte-link">
                    <a href="javascript:void(0);" className="filte-btn offcanvas-btn" data-target="offcanvasLeft">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 13" fill="none">
                        <rect y="11" width="30" height="2" fill="black"></rect>
                        <rect width="30" height="2" fill="black"></rect>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;