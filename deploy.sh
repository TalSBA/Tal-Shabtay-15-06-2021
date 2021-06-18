#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/TalSBA/Tal-Shabtay-15-06-2021.git master:gh-pages

cd -