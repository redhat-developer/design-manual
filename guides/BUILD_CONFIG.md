# Build Configuration

### GitHub Actions

The following are the GitHub Actions that are used in this project

- Jekyll CI Build
- [Labeler](https://github.com/marketplace/actions/labeler)
- [Release Drafter](https://github.com/marketplace/actions/release-drafter)
- Site Builder

### Publish a Release
This step is made up of two actions: Updating the Changelog and Creating a release based off of an existing tag.

**Update Changelog**
- Action: [generate-changelog-action](https://github.com/marketplace/actions/generate-changelog-action)
- Repo: [ScottBrenner/generate-changelog-action](https://github.com/ScottBrenner/generate-changelog-action)
- Workflow: [github-tag-actions.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/github-tag-actions.yml)

**Create a Release**
- Action: [Create a Release](https://github.com/marketplace/actions/create-a-release)
- Repo: [actions/create-release](https://github.com/actions/create-release)
- Workflow: [github-tag-actions.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/github-tag-actions.yml)

### Automatically Merge a PR
- Action: [Merge pull requests](https://github.com/marketplace/actions/merge-pull-requests)
- Repo: [pascalgn/automerge-action](https://github.com/pascalgn/automerge-action)
- Workflow: [automerge.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/automerge.yml)

### Jekyll Site CI
- Repo: [actions/starter-workflows](https://github.com/actions/starter-workflows/blob/3c3736f59805d1e4f838182263705f44fab9cf68/ci/jekyll.yml)
- Workflow: [jekyll.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/jekyll.yml)

## Travis-CI
Travis-CI handles the publication of the Design Manual to `github-pages`, where it is then published to [https://redhat-developer.github.io/design-manual](https://redhat-developer.github.io/design-manual).

**Configuration File**
- [`.travis.yml`](https://github.com/redhat-developer/design-manual/blob/main/.travis.yml)