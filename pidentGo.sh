#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -- node server.js

gnome-terminal -- npm start

sleep 10

killall chrome

sleep 1

gnome-terminal -- google-chrome --kiosk http://localhost:3000