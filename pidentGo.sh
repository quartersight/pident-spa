#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -e "node server.js"

gnome-terminal -e "npm start"

gnome-terminal -e "google-chrome --kiosk http://localhost:3000"