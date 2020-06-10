if [ "`git status -s`" ]
then
  echo "You have unstaged commits. Please commit any pending changes."
  exit 1;
fi

echo "Checkout Master branch"
git checkout master

echo "Pull latest from master"
git pull --rebase origin master

echo "Update NPM Version"
VERSION=${1?Error: delineate major, minor, patch or prerelease}
npm version "$VERSION"

echo "Update Changelog"
gren release --data-source=commits && gren changelog --override

echo "Commit Changelog and push to master"
git add --all && git commit -m "Update Changelog"

echo "Push to Master"
git push origin master
