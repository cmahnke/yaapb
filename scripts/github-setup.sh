#!/bin/sh

CTX_PATH="$(dirname $(realpath $0))"

$CTX_PATH/../themes/projektemacher-base/scripts/github/setup-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/python-dependencies.sh
$CTX_PATH/../themes/projektemacher-base/scripts/github/dart-sass.sh

if [ "$( . /etc/lsb-release; echo $DISTRIB_RELEASE)" = "22.04" ] ; then
  sudo apt-get install libtiff5 imagemagick tidy libxml2-utils xmlstarlet
fi
if [ "$( . /etc/lsb-release; echo $DISTRIB_RELEASE)" = "24.04" ] ; then
  sudo apt-get install libtiff6 imagemagick tidy libxml2-utils xmlstarlet
fi
