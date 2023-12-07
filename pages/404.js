import Link from 'next/link';
import Layout from '../components/layout';

export default function NotFound() {
  return (
    <Layout>
      <section className='empty'>
        <img
          className='empty__emoji'
          src='/assets/images/pleading-emoji.svg'
          alt='¡Error 404!'
        />
        <h1 className='empty__title'>¡Error 404!</h1>
        <p className='empty__text'>The requested page was not found</p>
        <Link href='/'>
          <a className='empty__btn btn btn--back'>Back to the main page</a>
        </Link>
      </section>
    </Layout>
  );
}
