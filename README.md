# `MAKE/BUILD` website
> Website for Spring 2019 hackathon at FSU

### :rocket: Getting Started
We use [Parcel](https://parceljs.org) to bundle the website. We use React Stateless Components as a way to keep the code DRY. SCSS is imported in the HTML, handled by Parcel.


```sh
# install dependencies
npm i

# start dev server
npm run dev
```

You can build the site to deploy with `npm run build`. This will put the bundled site in `dist/`. You can open `dist/index.html` in your browser, or use a simple server like [`serve`](https://npmjs.org/package/serve) to run `serve dist/`.

Deploy with [`now`](https://zeit.co/now).


### :hammer: Contributing
VSCode is the official IDE for this project. Install the extensions listed in `.vscode/extensions.json`, this will enable automatic linting and formatting.

`// TODO: setup autoformatting on precommit`.
