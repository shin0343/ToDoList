#!/bin/bash

commitName=$1

git add *
echo "Git Add is completed!!"

git commit -m "${commitName}"
echo "Git Commit is completed!!"

git push origin master
echo "Git Push is completed!!"
