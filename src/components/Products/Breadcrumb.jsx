import { Link } from '@/navigation'
import { StyledLink } from '@/styles/ComponentStyle'
import React from 'react'

const Breadcrumb = ({ category, product }) => {
    return (
        <>
            <nav style="--bs-breadcrumb-divider: '>';"  aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><StyledLink href="/">Home</StyledLink></li>
                    <li className="breadcrumb-item"><StyledLink href="/shop">Shop</StyledLink></li>
                    {category && <li className="breadcrumb-item"><StyledLink href={`/shop?category_like=${category}`}>{category}</StyledLink></li>}
                    {product && <li className="breadcrumb-item">{product}</li>}
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb