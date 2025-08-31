export interface InstagramImage {
  imgUrl: string;
  postUrl: string;
  caption: string;
}

export interface InstagramData {
  images: InstagramImage[];
}
