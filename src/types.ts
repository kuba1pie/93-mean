export interface Message {
  title: string;
  message: string;
  recipient: string;
  timestamp: Date;
  checkbox: boolean;
}

export interface Origin {
  name: string;
  url: string;
}

export interface Location {
  name: string;
  url: string;
}

export interface Character {
  find(arg0: (character: { id: string }) => boolean): Character;
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: any;
}

export interface Response {
  info: Info;
  results: Character[] | any;
}
