# Projen Silvermine

Project generator for Silvermine projects built on the [Projen][url-projen] configuration
management framework.

## Usage

Create a directory, and initialize a new Projen project targeting this library
as the source:

```bash
mkdir dir-name && cd dir-name
npx projen new --from projen-silvermine
```

[url-projen]: https://projen.io/

## Publishing New Versions

```bash
npx projen bump
```

```bash
npx projen release
```

```bash
npm publish dist/js/projen-silvermine@version.number
```
