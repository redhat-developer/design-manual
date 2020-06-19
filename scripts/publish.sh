echo "Checkout Main branch"
git checkout main

echo "Pull latest from main"
git pull --rebase origin main

echo "Build site"
gulp build

echo "Update subtee and push to gh-pages"
git subtree push --prefix _site origin gh-pages
