"use client"
import { EnterYourMail, NewsletterMailIconContainer, SubscribeToNewsletter } from '@/styles/FooterStyle'
import { useTranslations } from 'next-intl'
import React from 'react'
import { IoMailOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'

const NewsletterForm = () => {
    const t = useTranslations();
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success(t('newslettersuccess'))
    }
    return (
        <form className='needs-validation' novalidate onSubmit={(e)=> {handleSubmit(e)}}>
            <div className='position-relative'>
                <NewsletterMailIconContainer>
                    <IoMailOutline />
                </NewsletterMailIconContainer>
                <EnterYourMail type="text" placeholder={t('newsletterPlaceholder')} className='form-control' required />
            </div>
            <SubscribeToNewsletter className='form-control' type='submit'>
                {t('newsletterrButton')}
            </SubscribeToNewsletter>
        </form>
    )
}

export default NewsletterForm