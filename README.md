# ANS Documentation

All documentation is published at <https://www.ans.co.uk/docs/>.

If you would like to contribute a guide or amendment to an existing one, please fork the repository and submit a pull request.

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. All content is written in Markdown.

## Local Development

### Using yarn

```bash
yarn
yarn start
```

This starts a local development server and opens a browser window. Most changes are reflected live without needing a restart.

### Using Docker

```bash
docker build -t ans-docs .
docker run --rm -p 8080:80 ans-docs
```

Then browse to `http://localhost:8080/docs`.

## Build

```bash
yarn build
```

This generates static content into the `build` directory.

## Contributing

### Naming and Path

Please ensure pages and folders are easy to read and sensibly structured. Keep URLs lowercase and use hyphens instead of spaces, e.g.

- `/docs/ecloud/example-page/`

### Page Heading

The page `h1` heading should give the reader a strong sense of what they are going to read. There should only be one `h1` on a page and it should be the first element.

### Images

Where relevant, add screenshots as `.png` files. Blur out any sensitive information such as account names or IP addresses.

Given the following structure:

```
.
├── document.md
├── files
│   ├── image.png
```

Include `image.png` in `document.md` like this:

```markdown
![alt text](files/image.png)
```

### Hyperlinks

For internal links:

```markdown
[link text](/docs/ecloud/example-page/)
```

For external links:

```markdown
[Go to the ANS Portal](https://portal.ans.co.uk)
```

Avoid using words like "link", "click here" or "here" as the link text. The text should give a clear indication of where the link leads.

### Linting

You can lint Markdown content with:

```bash
docker run \
  -v "$PWD:/app" \
  -w /app \
  --rm \
  markdownlint/markdownlint docs
```
