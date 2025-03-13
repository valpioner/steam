import Hero from '@/components/Hero';
import localFont from 'next/font/local';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { Game } from '@/types/game';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games');
        const data: Game[] = await response.json();
        setGames(data);
        // console.log(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <main className={styles.main}>
        <Hero />
        {console.log(games)}
        {games.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {games.map((game) => (
              <li key={game.steam_appid}>{game.name}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
