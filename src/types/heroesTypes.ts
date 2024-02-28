export type Images = {
  lg: string;
  md: string;
  sm: string;
  xs: string;
};
export interface IHero {
  id: string;
  name: string;
  images: Images;
  isFavorite: boolean;
}
