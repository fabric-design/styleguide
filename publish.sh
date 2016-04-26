#!/bin/bash
# Script to publish to AWS
echo "Publishing to AWS"
gulp build
mai
aws s3 cp dist/ s3://wholesale-styleguide/ --recursive --exclude ".git/*" --exclude ".DS_Store"
echo "Done"