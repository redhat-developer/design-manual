if [ -z "$(ls -A developers.redhat.com)" ]; then
  echo "Submodule is empty/missing"
  sleep 2
  echo "Initialize Git Submodule"
  git submodule init
  sleep 2

  git submodule update --remote developers.redhat.com
  sleep 2

  echo "Change to Submodule Directory"
  cd developers.redhat.com
  sleep 2

  echo "Update Submodule"
  git submodule update
  sleep 2

  echo "Install Submodule Dependencies"
  cd _docker/drupal/drupal-filesystem/web/themes/custom/rhdp2/rhd-frontend/
  sleep 2
  npm install
  sleep 2

  echo "Return to HEAD"
  cd ../../../../../../../../../

else
  echo "Submodule exists: Updating"
  sleep 2

  echo "Change to Submodule Directory"
  cd developers.redhat.com
  sleep 2

  echo "Update Submodule"
  git submodule update
  sleep 2

  echo "Install Submodule Dependencies"
  cd _docker/drupal/drupal-filesystem/web/themes/custom/rhdp2/rhd-frontend/
  sleep 2
  npm install
  sleep 2

  echo "Return to HEAD"
  cd ../../../../../../../../../
fi
