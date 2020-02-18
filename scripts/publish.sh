echo "Checkout Master branch"
git checkout master

echo "Pull latest from master"
git pull --rebase origin master

echo "Build site"
gulp build

echo "Update subtee and push to gh-pages"
git subtree push --prefix _site origin gh-pages
