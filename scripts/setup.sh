# ==========================================================================
# Setup script for installing project dependencies.
# NOTE: Run this script while in the project root directory.
#       It will not run correctly when run from another directory.
#       DO NOT RUN INSIDE OF THE SCRIPTS DIRECTORY
# ==========================================================================

# exit script on errors
set -e

# Set node directory for use in scripts
init(){
  NODE_DIR=node_modules

  echo 'Node directory set.' $NODE_DIR
  sleep 2
}

# Clean any existing project dependencies.
clean() {
  # Remove the node directory if it exists
  # and install dependencies from the package.json file.
  if [ -d $NODE_DIR ]; then
    echo 'Removing any existing project dependencies...'
    rm -rf $NODE_DIR
  fi
  echo 'All pre-existing project dependencies have been removed!'
  sleep 2
}

# Install project dependencies from the package.json file.
install(){
  echo 'Now installing project dependencies...one moment please'
  bundle install
  npm install
  sleep 2
}

# Build the project
build() {
  echo 'Running the build scripts now...'
  gulp deploy
  echo 'Build complete. Run gulp development or npm run development to start a local server.'
  sleep 2
}

init
clean
install
build
