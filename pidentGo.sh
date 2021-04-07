#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -- node server.js

gnome-terminal -- serve -s build

wait

gnome-terminal -- google-chrome --kiosk --check-for-update-interval=2592000 --app=http://localhost:5000