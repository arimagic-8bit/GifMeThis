# GifMeThis

## Description:

The aim of this project is to help users to search for the best gifs on the web using GiphyAPI. 
It uses React, Redux/Saga and Sass.

## How to use it:

- To run this app you need node v14 at least. If you have nvm use: 
```js
$ nvm use v14
```
- Next install all npm packages with:
```js
$ npm install
```
- Lastly:
```js
$ npm run start
```

### Te user can:

- Check gifs info and save them to favourite.
- Search for gifs.
- Check favourite gifs and delete them.

### Media model:

```js
{ 
  id: string,
  embedUrl: string,
  urlMedium: string,
  type: string,
  title: string,
  attributes: {
    dimensions: string,
    frames: string,
    uploadedDate: string,
    size: string
  }
}
```

### Media methods:

- mapFromApi: parses data from api response.
- save: saves gif to localStorage.
- deleteFavourite: deletes gif from localStorage.

### Endpoints:

- `GET https://api.giphy.com/v1/gifs/trending`: request most rated gifs.
- `GET https://api.giphy.com/v1/gifs/search`: request gifs by query.

## Links:

- Previous designs with Figma: https://www.figma.com/file/0ypjjqLkvHJB10ngruflmN/GifMeThis?node-id=0%3A1

## Backlog: 

- Feeling vibes section: write how are you feeling today to receive a random gif.
- Copy embed url to use it anywhere.
- Request tags for every gif.
- Button to auto scroll up.
- Request more elements than gifs.
