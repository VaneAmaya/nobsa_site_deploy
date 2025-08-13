export class Food {
  public id: number;
  public name: string;
  public description: string;
  public image: string;
  public imageCard: string;

  constructor(id: number, name: string, description: string, image: string, imageCard: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
    this.imageCard = imageCard;
  }
}
