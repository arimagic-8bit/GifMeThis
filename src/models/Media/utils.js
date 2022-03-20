import Media from "./index";

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export const formatFromApi = (apiModel) =>
  new Media({
    id: apiModel.id,
    type: apiModel.type,
    embedUrl: apiModel.embed_url,
    urlMedium: apiModel.images.downsized_medium.url,
    title: apiModel.title,
    attributes: {
      dimensions: `${apiModel.images.original.width} x ${apiModel.images.original.height}`,
      frames: apiModel.images.original.frames,
      uploadedDate: apiModel.import_datetime,
      size: formatBytes(apiModel.images.original.size),
    },
  });

export const retrieveFromLocalStorage = () => {
  const favourites = window.localStorage.getItem("favouriteList");
  let favMedia = {};

  if (favourites) favMedia = JSON.parse(favourites);

  return favMedia;
};
