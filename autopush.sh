#!/bin/bash

commitContents=$1

git add *
echo "Git Add is completed!!"

git commit -m "${commitContents}"
echo "Git Commit is completed!! = ${commitContents}"

git push origin master
echo "Git Push is completed!!"
