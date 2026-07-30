# FPAI-HPC '26 workshop website

Website for the 3rd Workshop on Federated and Privacy-Preserving AI for
High-Performance Computing at IEEE Cluster 2026.

The production site is published at
[https://hpcfl.github.io/Cluster26/](https://hpcfl.github.io/Cluster26/).

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm test
```

The test command builds the site with its production `/Cluster26/` base path
and verifies the exported workshop page and assets.

## GitHub Pages deployment

Every push to `main` runs the GitHub Actions workflow in
`.github/workflows/deploy-pages.yml`. The workflow builds a static export using
the repository's GitHub Pages URL and deploys it.

In the repository's **Settings → Pages**, the publishing source must be set to
**GitHub Actions**.
