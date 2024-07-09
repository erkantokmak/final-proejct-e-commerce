
import { Logo, Text, NewsletterSection, NewsletterText, SubscribeToNewsletter, FooterSection, FooterMenuTitle, FooterMenuText, FooterMenuSection, NewsletterMailIconContainer, EnterYourMail } from '@/styles/FooterStyle'
import { Container } from '@/styles/LayoutStyle';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const t = useTranslations();
    return (
        <>

            <FooterSection className=''>
                <Container>
                    <div className="position-relative">
                        <NewsletterSection>
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <NewsletterText>
                                        {t('newsletterText')}
                                    </NewsletterText>
                                </div>
                                <div className="col-12 col-md-4">
                                    <form>
                                        <div className='position-relative'>
                                            <NewsletterMailIconContainer>
                                                <IoMailOutline />
                                            </NewsletterMailIconContainer>
                                            <EnterYourMail type="text" placeholder={t('newsletterPlaceholder')} className='form-control' />
                                        </div>
                                        <SubscribeToNewsletter className='form-control'>
                                            {t('newsletterrButton')}
                                        </SubscribeToNewsletter>
                                    </form>
                                </div>
                            </div>
                        </NewsletterSection>
                    </div>

                    <FooterMenuSection>
                        <div className="row justify-content-between align-items-start">
                            <div className="col-12 col-md-2 mb-3">
                                <Logo>
                                    {t('logo')}
                                </Logo>
                                <Text>
                                    {t('footerText')}
                                </Text>
                                <div className="d-flex gap-2">
                                    <Link href="#">
                                        <FaTwitter />
                                    </Link>
                                    <Link href="#">
                                        <FaFacebookF />
                                    </Link>
                                    <Link href="#">
                                        <FaInstagram />
                                    </Link>
                                    <Link href="#">
                                        <FaGithub />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerCompany')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('about')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('features')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('works')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('career')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerHelp')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('customerSupport')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('deliveryDetails')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('termsAndConditions')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('privacyPolicy')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerFaq')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('account')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('manageDeliveries')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('orders')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('payments')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <FooterMenuTitle>
                                    {t('footerResources')}
                                </FooterMenuTitle>
                                <ul className='list-unstyled'>
                                    <li>
                                        <FooterMenuText>
                                            {t('ebook')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('devTutorial')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('howToBlog')}
                                        </FooterMenuText>
                                    </li>
                                    <li>
                                        <FooterMenuText>
                                            {t('youtubePlaylist')}
                                        </FooterMenuText>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FooterMenuSection>
                </Container>
            </FooterSection>


        </>
    )
}

export default Footer