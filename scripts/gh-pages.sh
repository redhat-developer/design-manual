echo "Check submodule status"
scripts/./submodule.sh
sleep 2

echo "Build site"
gulp build
sleep 2
sleep 2

echo "Move _site/ files to docs/"
cp -r _site/** docs/
sleep 2
