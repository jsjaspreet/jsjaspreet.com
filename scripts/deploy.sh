#!/bin/bash

npm run build:client:prod
node scripts/dropGzExt.js

# separate images from js/html files
rm -rf images
mkdir images

# jpg
mkdir images/jpg
mv dist/*.jpg images/jpg
jpegoptim --size=100 images/jpg/*

# remove old files
aws s3 rm --recursive s3://jsjaspreet.com

# upload js/html with gzip tag
aws s3 cp --recursive --content-encoding gzip dist s3://jsjaspreet.com

# upload jpg
aws s3 cp --recursive images/jpg s3://jsjaspreet.com
