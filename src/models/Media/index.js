import ModelExpected from "./structure";
import { formatFromApi } from "./utils";

export default class Media {
  static entityName = 'Media';

  constructor(obj = {}) {
    this.ModelExpected = ModelExpected;
    this.ModelExpected.forEach((element) => {
      this[element.key] = obj[element.key] ? obj[element.key] : element.defaultValue;
    });
  }

  mapFromApi = (data) => formatFromApi(data);

  getFavourites = () => {

  }

  saveFavourites = () => {

  }

  deleteFavourite = () => {

  }

}
const SampleMedia = new Media();
export { SampleMedia };