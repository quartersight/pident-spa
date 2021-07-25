#!/bin/bash

cd ~/pident-spa

git reset --hard HEAD
git pull

wait

cd ~/pident-spa/public/east-audio

git reset --hard HEAD
git pull

wait

cd ../

rm -r -f audio

wait

cp -R east-audio audio

chmod a+x ~/pident-spa/pidentGo.sh

chmod a+x ~/pident-spa/update.sh

chmod a+x ~/pident-spa/reloadController.sh

killall chrome

killall streamdeck

gnome-terminal -- streamdeck

cd ~/pident-spa

npm -i -g serve

npm run build

wait

gnome-terminal -- node server.js

gnome-terminal -- serve -s build

gnome-terminal -- google-chrome-stable --start-fullscreen --incognito --disable-component-update --app=http://localhost:5000