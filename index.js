#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const file = path.join(__dirname, "logs", "log.txt");

rl.question(
  `Загадали случайное число (1 или 2). Угадайте. (Введите "q" для выходы из игры) \n`,
  (answer) => {
    if (answer == "q") {
      rl.close();
    } else {
      const number = Math.floor(Math.random() * 2 + 1);
      const result = answer == number ? "Вы угадали" : "Вы НЕ угадали";
      const content = answer == number ? "Победа\n" : "Поражение\n";
      fs.appendFile(file, content, (err) => {
        if (err) throw Error(err);
        console.log("результат сохранен");
      });
      rl.setPrompt(
        `${result}. Загадали случайное число (1 или 2). Угадайте. (Введите "q" для выходы из игры)\n`
      );
      rl.prompt();
      rl.on("line", (answer) => {
        if (answer == "q") {
          rl.close();
        } else {
          const number = Math.floor(Math.random() * 2 + 1);
          const result = answer == number ? "Вы угадали" : "Вы НЕ угадали";
          const content = answer == number ? "Победа\n" : "Поражение\n";
          fs.appendFile(file, content, (err) => {
            if (err) throw Error(err);
            console.log("результат сохранен");
          });
          rl.setPrompt(
            `${result}. Загадали случайное число (1 или 2). Угадайте. (Введите "q" для выходы из игры)\n`
          );
          rl.prompt();
        }
      });
    }
  }
);

rl.on("close", () => {
  console.log(`Спасибо за игру`);
});
