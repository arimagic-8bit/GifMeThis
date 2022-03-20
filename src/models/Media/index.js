import { saveFavourites } from "../../services/redux/gifs/actions";
import ModelExpected from "./structure";
import { formatFromApi, retrieveFromLocalStorage } from "./utils";

export default class Media {
  static entityName = "Media";

  constructor(obj = {}) {
    this.ModelExpected = ModelExpected;
    this.ModelExpected.forEach((element) => {
      this[element.key] = obj[element.key]
        ? obj[element.key]
        : element.defaultValue;
    });
  }

  mapFromApi = (data) => formatFromApi(data);

  save = () => {
    const favMedia = retrieveFromLocalStorage();
    favMedia[this.id] = this;
    saveFavourites(favMedia);
    window.localStorage.setItem("favouriteList", JSON.stringify(favMedia));
  };

  deleteFavourite = () => {
    const favMedia = retrieveFromLocalStorage();
    delete favMedia[this.id];
    saveFavourites(favMedia);
    window.localStorage.setItem("favouriteList", JSON.stringify(favMedia));
  };
}
const SampleMedia = new Media();
export { SampleMedia };
