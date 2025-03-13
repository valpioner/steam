import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const links = [
  {
    id: 1,
    label: 'Store',
    href: '/',
  },
  {
    id: 2,
    label: 'Community',
    href: '/community',
  },
  {
    id: 3,
    label: '[User]',
    href: '/user/hardcoded-id-123',
  },
  {
    id: 4,
    label: 'Chat',
    href: '/chat',
  },
  {
    id: 5,
    label: 'Support',
    href: '/support',
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='w-[940px] h-[104px] mx-auto flex flex-row'>
        <div className='self-center'>
          <Link href='/'>
            <Image
              loader={() => 'https://store.fastly.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'}
              src='logo_steam.svg'
              width={176}
              height={44}
              alt='Link to the Steam Homepage'
              priority={true}
            />
          </Link>
        </div>
        <nav className='self-center'>
          <ul className='flex flex-row gap-2'>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className='uppercase'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='ml-auto'>Right menu</div>
      </div>
    </header>
  );
};

export default Header;
