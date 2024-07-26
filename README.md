Deploy action
---

## Overview

This repository contains deploy GitHub action for the Applura platform.

Use it to setup automatic deployment process via GitHub workflows.

## Usage

Create the deploy key on drupal instance under `Administration -> Application -> Deploy keys` 

To add a deploy key generated via the web interface to GutHub navigate to `/settings/secrets/actions` and create new repository secret

To add action in your workflow use next snippet:

```yml
- name: set commit hash
    run: echo "commit_hash=Commit hash $(git rev-parse --short $GITHUB_SHA)" >> $GITHUB_ENV
- name: Deploy to Applura
  uses: applura/deploy@1.0.1
  with:
    key: ${{ secrets.APPLURA_DEPLOY_KEY }}
    note: ${{ env.commit_hash }}
    directory: ./build
```

Where `key` is the generated deploy key, `note` is the release note associated with release (in this example it contains commit has which triggered action) and `directory` is the application root directory we want to deploy.