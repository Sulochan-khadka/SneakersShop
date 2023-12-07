import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import { convertPrice } from '../utils';
import { addToFavorite, removeFromFavorite } from '../store/actions/favorite';
import { addToCart } from '../store/actions/cart';

export default function ProductCard(item) {
  const { id, title, price, imageUrl, favorited = false } = item;
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(favorited);

  const handleFavorite = (item) => {
    setFavorite(!favorite);
    !favorite
      ? dispatch(addToFavorite(item))
      : dispatch(removeFromFavorite(id));
  };

  return (
    <div className='card'>
      <button
        className={classnames('card__favorite', {
          'card__favorite--active': favorite,
        })}
        onClick={() => handleFavorite(item)}
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.5'
            y='0.5'
            width='31'
            height='31'
            rx='6.5'
            fill='white'
            stroke='#F8F8F8'
          />
          <path
            d='M13.375 10.8125C11.6494 10.8125 10.25 12.2129 10.25 13.9406C10.25 15.3353 10.7969 18.6455 16.18 21.9916C16.2764 22.0509 16.3871 22.0823 16.5 22.0823C16.6129 22.0823 16.7236 22.0509 16.82 21.9916C22.2031 18.6455 22.75 15.3353 22.75 13.9406C22.75 12.2129 21.3506 10.8125 19.625 10.8125C17.8994 10.8125 16.5 12.7083 16.5 12.7083C16.5 12.7083 15.1006 10.8125 13.375 10.8125Z'
            stroke='#ECECEC'
            strokeWidth='1.4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      <img className='card__img' src={imageUrl} alt={title} />
      <h3 className='card__title'>{title}</h3>
      <div className='card__content'>
        <div className='card__price'>
          <span className='card__price-title'>Price:</span>
          <span className='card__price-text'>$ {convertPrice(price)}</span>
        </div>
        <button className='card__add' onClick={() => dispatch(addToCart(item))}>
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              x='0.5'
              y='0.5'
              width='31'
              height='31'
              rx='7.5'
              fill='white'
              stroke='#F2F2F2'
            />
            <path
              d='M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z'
              fill='#D3D3D3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
