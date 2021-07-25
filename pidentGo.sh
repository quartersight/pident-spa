#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -- node server.js

gnome-terminal -- serve -s build

wait

gnome-terminal -- google-chrome --kiosk --disable-component-update --app=http://localhost:5000