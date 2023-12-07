import Link from 'next/link';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import Layout from '../components/layout';

export default function Profile() {
  const orders = useSelector(({ order }) => order);

  const Orders = () => {
    return orders.map((item) => {
      return (
        <div className='order' key={item.id}>
          <h2 className='order__title'>Order #{item.id}</h2>
          <ProductList products={item.order} />
        </div>
      );
    });
  };

  if (orders.length === 0) {
    return (
      <Layout>
        <section className='empty'>
          {/* <img
            className='empty__emoji'
            src='/assets/images/pensive-emoji.svg'
            alt=''
          /> */}
          <h1 className='empty__title'>You are not registered yet</h1>
          <p className='empty__text'>
            Do you want to register?
            <br />
            <br />
            Get discounts for being a SneakerSearch customer.
          </p>
          <Link href='/'>
            <a className='empty__btn btn btn--back'>Back to top</a>
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
            <h1 className='main__title title'>Mis compras</h1>
          </div>
          <Orders />
        </div>
      </section>
    </Layout>
  );
}
