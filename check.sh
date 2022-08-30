#!/bin/bash
./node_modules/htmlhint/bin/htmlhint *.html

# ./node_modules/stylelint/bin/stylelint *.css
npx stylelint "**/*.css"