import Link from 'next/link';
import { useSelector } from 'react-redux';
import Layout from '../components/layout';
import ProductList from '../components/ProductList';

export default function Favorites() {
  const favorites = useSelector(({ favorite }) => favorite);

  if (favorites.length === 0) {
    return (
      <Layout>
        <section className='empty'>
          <img
            className='empty__emoji'
            src='/assets/images/pleading-emoji.svg'
            alt='Aun no tienes favoritos :('
          />
          <h1 className='empty__title'>You don't have favorites yet :(</h1>
          <p className='empty__text'>
            Add your favorite sneakers to your list!
          </p>
          <Link href='/'>
            <a className='empty__btn btn btn--back'>Add to Favorites</a>
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className='main__inner'>
        <div className='wrapper'>
          <div className='main__heading'>
            <Link href='/'>
              <a className='main__btn'>
                <svg
                  width='35'
                  height='35'
                  viewBox='0 0 35 35'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='0.5'
                    y='0.5'
                    width='34'
                    height='34'
                    rx='7.5'
                    fill='white'
                    stroke='#F2F2F2'
                  />
                  <path
                    d='M19 22L14 17L19 12'
                    stroke='#C8C8C8'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </a>
            </Link>
            <h1 className='main__title title'>My favourites</h1>
          </div>
          <ProductList products={favorites} />
        </div>
      </section>
    </Layout>
  );
}
