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
  longitude: number,
  latittude: number,
  images: Array<{
    imId: number,
    url:string,
  }>
};
