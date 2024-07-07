// import { useTranslations } from 'next-intl';
// import Link from 'next/link';
// import React from 'react'

// const Navbar = () => {
//     const t = useTranslations();
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg">
//                 <Link className="navbar-brand fw-bold" href="#">SHOP.CO</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#shopcoNavbar" aria-controls="shopcoNavbar" aria-expanded="false" aria-label="Toggle navigation">
//                 </button>
//                 <div className="collapse navbar-collapse" id="shopcoNavbar">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item dropdown">
//                             <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             {t('shop')}
//                             </Link>
//                             <ul className="dropdown-menu">
//                                 <li><Link className="dropdown-item" href="#">{t('tshirts')}</Link></li>
//                                 <li><Link className="dropdown-item" href="#">{t('shirts')}</Link></li>
//                                 <li><Link className="dropdown-item" href="#">{t('jeans')}</Link></li>
//                                 <li><Link className="dropdown-item" href="#">{t('shorts')}</Link></li>
//                                 <li><Link className="dropdown-item" href="#">{t('hoodie')}</Link></li>
//                             </ul>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" aria-current="page" href="#">{t('onsale')}</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" href="#">  {t('newArrivals')}</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" href="#">  {t('brands')}</Link>
//                         </li>
//                     </ul>

//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar

import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import IconBox from "./IconBox";
import Searchbar from './Searchbar'
import { useTranslations } from "next-intl";
import { Container } from "@/styles/LayoutStyle";

const Navbar = () => {
    const t = useTranslations();
    return (
        <Container>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="d-flex gap-1">
                    <div className="d-flex gap-3 flex-wrap">
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNav"
                            aria-controls="mainNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" href="/">
                            <h1 className="fs-2">{t('logo')}</h1>
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse gap-3" id="mainNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link d-flex gap-1"
                                    aria-current="page"
                                    href="#"
                                >
                                    {t('shop')}
                                    <span>
                                        <FaChevronDown size={14} />
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    {t('onsale')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    {t('newArrivals')}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">
                                    {t('brands')}
                                </Link>
                            </li>
                        </ul>
                        <Searchbar />
                    </div>
                    <IconBox />
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
