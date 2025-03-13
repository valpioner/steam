export interface GameApiResponse {
  [key: string]: {
    success: boolean;
    data?: Game;
  };
}

export interface Game {
  type: string;
  name: string;
  steam_appid: number;
  required_age: number;
  is_free: boolean;
  detailed_description: string;
  about_the_game: string;
  short_description: string;
  supported_languages: string;
  header_image: string;
  website: string;
  pc_requirements: any;
  mac_requirements: any;
  linux_requirements: any;
  developers: string[];
  publishers: string[];
  price_overview: any;
  packages: any[];
  package_groups: any[];
  platforms: {
    windows: boolean;
    mac: boolean;
    linux: boolean;
  };
  metacritic: any;
  categories: any[];
  genres: any[];
  screenshots: any[];
  movies: any[];
  recommendations: any;
  achievements: any;
  release_date: any;
  support_info: any;
  background: string;
}
