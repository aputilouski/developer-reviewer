#!/bin/bash

FILE=db.sqlite

if ! [ -f $FILE ]
then node api/bin/create-db.js
fi

yarn --cwd api app 
