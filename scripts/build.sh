
#!/bin/bash

reset=0;
clean=0;

# parse params
while [[ "$#" > 0 ]];
  do case $1 in
    -r|--reset) reset=1; shift;;
    -c|--clean) clean=1; shift;;
    *) echo "Unknown parameter passed: $1"; exit 1 ;;
  esac
  shift
done

# fetch environment variables from secrets manager
export AIRTABLE_API_KEY=$(
  aws secretsmanager get-secret-value --secret-id airtable-api-key --region us-west-1 |\
  jq  -r .SecretString | jq -r .AIRTABLE_API_KEY\
)

if [ "$reset" == "1" ]; then
  pnpm i;
  gatsby clean;
  rm -r src/assets/zip
fi

if [ "$clean" == "1" ]; then 
  gatsby clean
fi

if [ -e src/assets/zip ]; then
  echo "Zip files already created"
  echo ""
else
  sh ./scripts/build_library_zip_files.sh
fi


gatsby build;



