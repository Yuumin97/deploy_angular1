export class Category {
  id: number;
  name: string;
  avatar: string;

  constructor( name: string,avatar: string) {
    this.name = name;
    this.avatar = avatar;
  }
}
