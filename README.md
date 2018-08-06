# Interactive Fortnite Map

A performant approach for creating a map application displaying Fortnite BR challenges, using next.js and Mapbox GL JS.

### Prerequisites

You need to run your own tile server. I recommend using [TileServer GL](https://github.com/klokantech/tileserver-gl) by downloading the .mbtiles from [here](https://drive.google.com/file/d/1Dvo833erO_pnGmjUm4EzLhHk_0stfCF6/view?usp=sharing) and running the following command inside of the directory with the downloaded mbtiles
```
docker run --rm -it -v $(pwd):/data -p 8080:80 klokantech/tileserver-gl
```

### Installing

Clone the repo and install dependencies via

```
npm install
```

Run a development build and start a dev server at http://localhost:3000 via

```
npm run dev
```

Before running a production build, you might need to update env.js accordingly, e.g.
```
const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.TILESERVER_URL': prod ? 'http://localhost:8080/data/season5/{z}/{x}/{y}.png' : 'http://localhost:8080/data/season5/{z}/{x}/{y}.png',
  'process.env.SPRITE_URL': prod ? 'http://localhost:3000/static/sprites/sprites' : 'http://localhost:3000/static/sprites/sprites',
}
```

Create a production build and start a server at http://localhost:3000 via

```
npm run build
npm start
```

Export static HTML/CSS/JS page via

```
npm run export
```


Upon adding new .svg sprites to the project in /sprites, you should run the following command to create the necessary sprite files

```
npm run sprites
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) - Map client
* [Next.js](https://github.com/zeit/next.js) - SSR for React

## Contributing

Please feel free to add pull requests


## Authors

* **Timothy Krechel** - *Initial work* - [timothy.de](https://www.timothy.de)

See also the list of [contributors]

## License

This project is licensed under the MIT License.

## Special Thanks

* [u/DarkLordCZ](https://www.reddit.com/user/DarkLordCZ) - For posting the Season 5 map in high res
* [u/MarkN22](https://www.reddit.com/r/FortNiteBR/comments/88ktnr/i_calculated_how_big_the_map_was_in_fortnite/) - For providing calculations for Georeferencing the map
