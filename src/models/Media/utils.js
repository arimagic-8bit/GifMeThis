import Media from './index';

export const formatFromApi = (apiModel) => new Media(
  {
    id: apiModel.id,
    type: apiModel.type,
    embedUrl: apiModel.embed_url,
    urlMedium: apiModel.images.downsized_medium.url,
    title: apiModel.title,
    dimensions: `${apiModel.images.original.width} x ${apiModel.images.original.height}`,
    frames: apiModel.images.original.frames,
    uploadedDate: apiModel.import_datetime
  }
);