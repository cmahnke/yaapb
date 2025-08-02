#!/bin/sh

# You need `xmllint`, `tidy` and `xmlstarlet` installed

## Convert to xml
#tidy -i -asxhtml -utf8 --drop-empty-elements no "Source Files/pages/cameras.html" > static/xml/cameras.xhtml
## Validate
#xmllint --noout static/xml/cameras.xhtml
#[ $? -eq 0 ] || exit $?;
## Extract body
#xmlstarlet sel -N "xhtml=http://www.w3.org/1999/xhtml" -t -c "/xhtml:html/xhtml:body/*" static/xml/cameras.xhtml |sed -E 's/ xmlns="[^"]*"//g' | sed -E 's/<([[:alnum:]]+) ([^<]*)\/>/<\1 \2><\/\1>/g' > content/cameras/cameras.html

$PWD/themes/projektemacher-base/scripts/init/i18n.sh

# Favicons
# See https://gist.github.com/pfig/1808188
convert "Source Files/Logo/logo.jpg" -resize 256x256 -transparent white static/images/favicon-256.png
convert static/images/favicon-256.png -resize 16x16 static/images/favicon-16.png
convert static/images/favicon-256.png -resize 32x32 static/images/favicon-32.png
convert static/images/favicon-256.png -resize 64x64 static/images/favicon-64.png
convert static/images/favicon-256.png -resize 128x128 static/images/favicon-128.png
convert static/images/favicon-16.png static/images/favicon-32.png static/images/favicon-64.png static/images/favicon-128.png static/images/favicon-256.png -colors 256 static/images/favicon.ico

./scripts/update_cameras.py -i content/cameras/cameras.html -o content/cameras/cameras.html

# NPM dependencies
yarn install
yarn run modernizr
