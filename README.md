## applura/deploy

This repository contains a GitHub action that deploys a front-end directory to a project hosted on the [Applura platform][applura].

Use it to automatically deploy changes via a [GitHub workflow][gh-workflow].

### Usage

#### Generate a deploy key

First, navigate to your Applura project and generate a deploy key. Deploy keys can be found via the Applura web interface by navigating to _Application > Deploy keys_.

#### Set up a repository secret

Once you have copied your new deploy key. Add it to you GitHub repository via the GitHub web interface by navigating to _Settings > Secrets and variables > Actions > New repository secret_.

Name the secret `APPLURA_DEPLOY_KEY`.

#### Configure the action

Finally, add the following step to your workflow using this snippet:

```yml
- name: Set release note
    run: echo "release_note=Git commit $(git rev-parse --short $GITHUB_SHA)" >> $GITHUB_ENV
- name: Deploy to Applura
  uses: applura/deploy@1.0.1
  with:
    key: ${{ secrets.APPLURA_DEPLOY_KEY }}
    note: ${{ env.release_note }}
    directory: ./dist
```

Where:

- `key` is the generated deploy key
- `note` is the release note associated with release (in this example it contains commit has which triggered action)
- `directory` is the fully built and compiled directory of front-end files to be deployed

[applura]: https://www.applura.com
[gh-workflow]: https://docs.github.com/en/actions/using-workflows/about-workflows
