
if [ -z $1 ]
then
    echo "No parameter passed"
else
    echo "Parameter passed = $1"
    appName=$1
    yarn create react-app "${appName}"
fi

