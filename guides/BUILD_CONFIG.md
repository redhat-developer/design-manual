# Build Configuration

### GitHub Actions

The following are the GitHub Actions that are used in this project

- Jekyll CI Build
- [Labeler](https://github.com/marketplace/actions/labeler)
- [Release Drafter](https://github.com/marketplace/actions/release-drafter)
- Site Builder

### Publish a Release
This step is made up of two actions: Creating a release as a draft, and then self-publishing the draft.

**Create a Release**
- Action: [release-drafter](https://github.com/marketplace/actions/release-drafter)
- Repo: [release-drafter/release-drafter](https://github.com/release-drafter/release-drafter)
- Workflow: [release-drafter.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/release-drafter.yml)

### Jekyll Site CI
- Repo: [actions/starter-workflows](https://github.com/actions/starter-workflows/blob/3c3736f59805d1e4f838182263705f44fab9cf68/ci/jekyll.yml)
- Workflow: [jekyll.yml](https://github.com/redhat-developer/design-manual/blob/main/.github/workflows/jekyll.yml)

## Travis-CI
Travis-CI handles the publication of the Design Manual to `github-pages`, where it is then published to [https://redhat-developer.github.io/design-manual](https://redhat-developer.github.io/design-manual).

**Configuration File**
- [`.travis.yml`](https://github.com/redhat-developer/design-manual/blob/main/.travis.yml)