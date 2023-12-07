import Link from 'next/link';
import classnames from 'classnames';

export default function Slide({ title, imageUrl, link, isActive }) {
  return (
    <div
      className={classnames('slide', { 'slide--active': isActive })}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='slide__content'>
        <p className='slide__title'>
          <span className='slide__title-span'>{title}</span>, Forever!
        </p>
        <Link href={link}>
          <a className='slide__btn'>See more!</a>
        </Link>
      </div>
    </div>
  );
}
