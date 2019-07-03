import { IIngredient } from 'src/app/shopping-list/models/ingredient';

export interface IRecipe {
  id: number;
  name: string;
  descr: string;
  imgPath: string;
  ingredients: IIngredient[];
}

export class Recipe implements IRecipe {
  constructor(
    public id: number,
    public name: string,
    public descr: string,
    public imgPath: string,
    public ingredients: IIngredient[]
  ) {}
}
