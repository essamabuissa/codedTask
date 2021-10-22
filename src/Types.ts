export interface CharacterInterface {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  image: string;
  created: string;
  episode: EpisodeInterface[];
}

export interface EpisodeInterface {
  name: string;
}
