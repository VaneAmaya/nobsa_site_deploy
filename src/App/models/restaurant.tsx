import { Review } from "./review";

export class Restaurant {
  public id: number;
  public name: string;
  public description: string;
  public location: string[];
  public timeOpen: Date;
  public timeCloses: Date;
  public review: Array<Review>
  public url: string;
  public image: string;
  public imageCard: string;
  constructor(
    id: number,
    name: string,
    description: string,
    location: string[],
    timeOpen: Date,
    timeCloses: Date,
    review: Array<Review>,
    url:string,
    image: string,
    imageCard: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.timeOpen = timeOpen;
    this.timeCloses = timeCloses;
    this.review = review;
    this.url = url;
    this.image = image;
    this.imageCard = imageCard;   
  }
}
