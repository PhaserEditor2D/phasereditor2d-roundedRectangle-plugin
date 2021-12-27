#!/bin/bash

cd source/plugins/phasereditor2d.roundedRectangle/data

rm -Rf js js-module ts-module
mkdir js js-module ts-module

# ts

cd ts
npx tsc -t esnext --outDir ../js RoundedRectangle.ts &> /dev/null
npx tsc -t esnext --outDir ../js registerRoundedRectangleFactory.ts &> /dev/null

# ts-module

cp * ../ts-module
cd ../ts-module
sed -i 's/class/import Phaser from "phaser";\n\nexport default class/' RoundedRectangle.ts
sed -i 's/function registerRoundedRectangleFactory/import Phaser from "phaser";\nimport RoundedRectangle from ".\/RoundedRectangle";\n\nexport default function registerNinePatchFactory/' registerRoundedRectangleFactory.ts

npx tsc -t esnext --outDir ../js-module RoundedRectangle.ts &> /dev/null
npx tsc -t esnext --outDir ../js-module registerRoundedRectangleFactory.ts &> /dev/null

