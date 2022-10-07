#!/usr/bin/env node

const fs = require("fs");

fs.readFile("logs/log.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Нет данных о проведенных играх");
    return;
  }
  const list = data.split("\n");
  const gamesSum = list.length - 1;

  var win = 0;
  var lose = 0;

  for (const key in list) {
    if (list[key] === "Победа") {
      win++;
    } else {
      if (list[key] === "Поражение") {
        lose++;
      }
    }
  }

  console.log(`Общее количество партий: ${gamesSum}`);
  console.log(`Количество выигранных / проигранных партий: ${win} / ${lose}`);
  console.log(
    `Процентное соотношение выигранных партий: ${Math.floor(
      (win / gamesSum) * 100
    )}%`
  );
});
