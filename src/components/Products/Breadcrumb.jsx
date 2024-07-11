import { Link } from '@/navigation'
import React from 'react'

const Breadcrumb = ({ category, product }) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="/shop">Shop</Link></li>
                    {category && <li className="breadcrumb-item"><Link href={`/shop?category_like=${category}`}>{category}</Link></li>}
                    {product && <li className="breadcrumb-item">{product}</li>}
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb