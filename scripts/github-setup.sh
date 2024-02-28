#!/bin/sh

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh

sudo apt-get install libtiff5 imagemagick tidy libxml2-utils xmlstarlet
