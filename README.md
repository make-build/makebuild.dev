# `MAKE/BUILD` website
> Website for Spring 2019 hackathon at FSU

### :rocket: Getting Started
We use [Parcel](https://parceljs.org) to bundle the website. It doesn't use React, but this lets us seamlessly import SCSS stylesheets, and use `posthtml` to have `<include>` tags.


```sh
# install dependencies
npm i

# start dev server
npm run dev
```

You can build the site to deploy with `npm run build`. This will put the bundled site in `dist/`. You can open `dist/index.html` in your browser, or use a simple server like [`serve`](https://npmjs.org/package/serve) to run `serve dist/`.

Deploy with [`now`](https://zeit.co/now).


### :hammer: Contributing
Be sure to ESLint and Prettier. Format your code, or the maintainers will come after you.

`// TODO: setup autoformatting on precommit`.
