import { GameApiResponse } from '@/types/game';
import axios from 'axios';
import fs from 'fs';

// List of 100 most popular game IDs
const gameIds: number[] = [
  570, 730, 440, 578080, 271590, 1172470, 945360, 252490, 359550, 431960,
  582010, 374320, 346110, 271590, 620, 4000, 240, 10, 80, 550, 220, 500, 400,
  300, 200, 100, 50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290,
  310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 530, 550, 570, 590,
  610, 630, 650, 670, 690, 710, 730, 750, 770, 790, 810, 830, 850, 870, 890,
  910, 930, 950, 970, 990, 1010, 1030, 1050, 1070, 1090, 1110, 1130, 1150, 1170,
  1190, 1210, 1230, 1250, 1270, 1290, 1310, 1330, 1350, 1370, 1390, 1410, 1430,
  1450, 1470, 1490, 1510,
];

// Base URL for the Steam Store API
const baseUrl: string = 'https://store.steampowered.com/api/appdetails';

// Function to get game details
const getGameDetails = async (
  appid: number,
): Promise<GameApiResponse | null> => {
  try {
    const response = await axios.get<GameApiResponse>(
      `${baseUrl}?appids=${appid}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for appid ${appid}:`, error);
    return null;
  }
};

// Retrieve data for 100 games
const fetchGameData = async () => {
  const gameData: GameApiResponse[] = [];

  console.log('Fetching game data...');

  for (const appid of gameIds) {
    const details = await getGameDetails(appid);
    if (details) {
      gameData.push(details);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000)); // To avoid hitting rate limits
  }

  console.log('Game data fetched successfully');

  // Save the retrieved data to a JSON file
  fs.writeFileSync('gamesData.json', JSON.stringify(gameData, null, 2));

  console.log('Game data has been saved to gamesData.json');
};

fetchGameData();
