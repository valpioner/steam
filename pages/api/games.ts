// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import steamGames from '../../data/steamGames.json';
import { Game, GameApiResponse } from '@/types/game';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>,
) {
  const games: GameApiResponse[] = steamGames as unknown as GameApiResponse[];

  res.status(200).json(
    games.map((game) => {
      const key = Object.keys(game)[0];
      return game[key].data!;
    }),
  );
}
