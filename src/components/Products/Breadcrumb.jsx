import React from 'react'

const Breadcrumb = ({category,product}) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Shop</a></li>
                    <li className="breadcrumb-item">{category}</li>
                    <li className="breadcrumb-item active" aria-current="page">{product}</li>
                </ol>
            </nav>
        </>
    )
}

export default Breadcrumb