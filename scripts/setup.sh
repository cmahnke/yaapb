#!/bin/sh

# You need `xmllint`, `tidy` and `xmlstarlet` installed

# Convert to xml
#tidy -i -asxhtml -utf8 "Source Files/pages/cameras.html" -output "Source Files/pages/cameras.xhtml"
# Validate
#xmllint cameras.xhtml
# Extract body
#xmlstarlet

# Favicons
# See https://gist.github.com/pfig/1808188
convert "Source Files/Logo/logo.jpg" -resize 256x256 -transparent white static/images/favicon-256.png
convert static/images/favicon-256.png -resize 16x16 static/images/favicon-16.png
convert static/images/favicon-256.png -resize 32x32 static/images/favicon-32.png
convert static/images/favicon-256.png -resize 64x64 static/images/favicon-64.png
convert static/images/favicon-256.png -resize 128x128 static/images/favicon-128.png
convert static/images/favicon-16.png static/images/favicon-32.png static/images/favicon-64.png static/images/favicon-128.png static/images/favicon-256.png -colors 256 static/images/favicon.ico

# NPM dependencies
yarn install
