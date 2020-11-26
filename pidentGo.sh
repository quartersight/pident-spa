#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -- node server.js

gnome-terminal -- npm start

wait

gnome-terminal -- google-chrome --kiosk http://localhost:3000