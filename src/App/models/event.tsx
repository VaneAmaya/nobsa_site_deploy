export class Event {
  public id: number;
  public name: string;
  public description: string;
  public dateStart: Date;
  public dateEnd: Date;
  public location: string[];
  public url: string;
  public image: string;
  public imageCard: string;
  public poster: string;
  
  constructor(
    id: number,
    name: string,
    description: string,
    dateStart: Date,
    dateEnd: Date,
    location: string[],
    url: string,
    image: string,
    imageCard: string,
    poster: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.location = location;
    this.url = url;
    this.image = image;
    this.imageCard = imageCard; 
    this.poster = poster;
  }
}
