export type roomsType = {
  id: number,
  name: string,
  description: string,
  location: string,
  details: {
    guests: string,
    bedrooms: string,
    bathrooms: string,
    price: string,
  },
  latitude: number,
  longitude: number,
  images: Array<{
    imId: number,
    url:string,
  }>
};

export interface imagesType {
  imId: number,
  url:string,
}
