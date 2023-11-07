#!/bin/bash

echo "Convert UTF8 Types"
cd src/assets
convmv -r -f utf8 -t utf8 --nfd --notest . || exit 1

echo "Build Library Zip File"
cd documents/
mkdir ../zip
zip -r ../zip/EOC\ Development\ Tool.zip *;

echo "Build Spanish Library Zip File"
cd ../All\ Spanish/
zip -r ../zip/EOC\ Development\ Tool\ Spanish.zip *;

echo "Build French Library Zip File"
cd ../All\ French/
zip -r ../zip/EOC\ Development\ Tool\ French.zip *;

echo "Build Russian Library Zip File"
cd ../All\ Russian/
zip -r ../zip/EOC\ Development\ Tool\ Russian.zip *;

echo "Build Guides Zip Files"
cd ../guides_EN/
zip -r ../zip/EOC\ Development\ Tool\ Guidance.zip *;

echo "Build Subdirectory Zip Files"
cd ../documents/EOC\ Development\ Tool;
for i in */; do zip -r "../../zip/${i%/}.zip" "$i"; done


