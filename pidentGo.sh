#!/bin/bash

echo Changing directories...

cd pident-spa

gnome-terminal -- node server.js

gnome-terminal -- serve -s build

wait

gnome-terminal -- google-chrome-stable --start-fullscreen --incognito --simulate-outdated-no-au='Tue, 31 Dec 2099 23:59:59 GMT' --app=http://localhost:5000