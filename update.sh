#!/bin/bash

cd ~/pident-spa

git reset --hard HEAD
git pull

wait

cd ~/pident-spa/public/

git clone https://github.com/quartersight/east-audio

wait

rm -r audio

wait

mv east-audio audio

chmod a+x ~/pident-spa/pidentGo.sh

chmod a+x ~/pident-spa/reloadController.sh

killall chrome

killall streamdeck

gnome-terminal -- streamdeck

cd ~/pident-spa

gnome-terminal -- node server.js

gnome-terminal -- npm start

wait

gnome-terminal -- google-chrome --kiosk http://localhost:3000