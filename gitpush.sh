#!/bin/bash

commitAddress = $1

git add *
echo "-- Git Add is Completed!! --"
git commit -m "${commitAddress}"
echo "-- Git Commit is Completed!! --"
git push origin master
echo "-- Git Push is Completed!! --"
