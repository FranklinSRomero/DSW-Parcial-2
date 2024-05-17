export class Pinguino {
  id: number;
  name: string;
  scientific_name: string;
  feeding: string;
  global_distribution: string;
  description: string;
  image: string;

  public constructor(id: number, name: string, scientific_name: string, feeding: string, global_distribution: string, description: string, image: string) {
    this.id = id;
    this.name = name;
    this.scientific_name = scientific_name;
    this.feeding = feeding;
    this.global_distribution = global_distribution;
    this.description = description;
    this.image = image;
  }

}
