echo "Convert UTF8 Types"
cd src/assets
convmv -r -f utf8 -t utf8 --nfd --notest .;

echo "Build Library Zip File"
cd documents/
mkdir ../zip
zip -r ../zip/EOC\ Development\ Tool.zip *;

echo "Build Spanish Library Zip File"
cd ../documents-spanish/
zip -r ../zip/EOC\ Development\ Tool\ Spanish.zip *;


echo "Build Guides Zip Files"
cd ../guides/
zip -r ../zip/EOC\ Development\ Tool\ Guidance.zip *;

echo "Build Subdirectory Zip Files"
cd ../documents/EOC\ Development\ Tool;
for i in */; do zip -r "../../zip/${i%/}.zip" "$i"; done


