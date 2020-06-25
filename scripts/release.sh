if [ "`git status -s`" ]
then
  echo "You have unstaged commits. Please commit any pending changes."
  exit 1;
fi

echo "Checkout Main branch"
git checkout main

echo "Pull latest from main"
git pull --rebase origin main

echo "Update NPM Version"
VERSION=${1?Error: delineate major, minor, patch or prerelease}
npm version "$VERSION"

echo "Push to Main"
git push origin main

echo "Set Git Tag"
GIT_TAG=$VERSION