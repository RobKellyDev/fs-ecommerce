import React from 'react'
import { Link } from 'react-router-dom'
import styles from './single.module.css'
import { FadeInDiv } from '../../../../components/animations/FadeInDiv'

const ProductSingle = ({ product: { id, image, price, title } }) => {
  let singleProduct = (
    <FadeInDiv>
      <div className={`${styles.latestSingle} col mb-5 mb-sm-0`}>
        {title && (
          <div className="card h-100">
            <img
              style={{
                aspectRatio: '1049/1500',
                objectFit: 'scale-down',
                width: '100%',
                maxWidth: '677px',
                height: '250px',
                padding: '3rem',
              }}
              width={677}
              height={969}
              data-src={image}
              data-sizes={'auto'}
              data-srcset={image}
              className={'card-img-top lazyload'}
              alt={title}
            />
            <div className="card-body">
              <h5 className="card-title">
                {title.substring(0, 12)}...
              </h5>
              <p className="card-text fs-5 text-danger"> £{price}</p>
              <p className="latest-buy-now">
                <Link
                  to={`/products/${id}`}
                  className="btn btn-outline-dark w-100"
                >
                  Buy Now
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </FadeInDiv>
  )

  return singleProduct
}

export default ProductSingle
