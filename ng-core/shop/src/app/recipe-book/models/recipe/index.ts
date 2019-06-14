export interface IRecipe {
  name: string;
  descr: string;
  imgPath: string;
}

export class Recipe implements IRecipe {
  constructor(public name: string, public descr: string, public imgPath: string) { }
}
