export class Review {
  public id: number;
  public userName: string;
  public title: string;
  public description: string;
  public rating: number;
  public writingDate: Date;
  public visitDate: Date;

  constructor(
    id: number,
    userName: string,
    title: string,
    description: string,
    rating: number,
    writingDate: Date,
    visitDate: Date
  ) {
    this.id = id;
    this.userName = userName;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.writingDate = writingDate;
    this.visitDate = visitDate;
  }
}
