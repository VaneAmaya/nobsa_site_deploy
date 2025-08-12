
import { Lodging } from "./lodging";
import { Review } from "./review";

export class Destination {
  public id: number;
  public name: string;
  public description: string;
  public location: string[];
  public lodging: Array<Lodging>;
  public review: Array<Review>;
  public tips:string[];
  public url: string;
  public image: string;
  public imageCard: string;


  constructor(
    id: number,
    name: string,
    description: string,
    location: string[],
    lodging: Array<Lodging>,
    review: Array<Review>,
    tips: string[],
    url: string,
    image: string,
    imageCard: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.lodging = lodging
    this.review = review;
    this.tips = tips;
    this.url = url;
    this.image = image;
    this.imageCard = imageCard;
  }
}
