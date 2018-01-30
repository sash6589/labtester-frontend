# labtester
Система автоматической проверки лабораторных работ по программированию.
labtester состоит из трех компонентов:
1) labtester-frontend - Фронтенд системы. Работает на порту 8888.
2) labtester-master - Компонент, отвечающий за бизнес-логику системы (управление задачами, работа с БД, принятие решений от пользователя и отправка их на проверку в labtester-worker). Работает на порту 8090.
3) labtester-worker - Компонент, который производит непосредственную проверку решения лабораторной работы. Работает на порту 8087.
## Установка зависимостей и базы данных
1) Склонировать репозитории [labtester-frontend](https://github.com/sash6589/labtester-frontend), [labtester-master](https://github.com/sash6589/labtester-master), [labtester-worker](https://github.com/sash6589/labtester-worker) в одну папку.
2) Во всех репозиториях зачекаутить бранч `release_x_y_z`
3) Выполнить `./install_labtester.sh <host_address>`, где `<host_address>` - ip адрес машины на которой разворачивается labtester.

## Сборка и запуск всей системы
Выполнить `./run_labtester.sh`

Логи пишутся в соответствующие файлы `log.txt`.
## Добавление задачи в лабораторную работу
``` 
curl 
     -H "Content-Type: application/json" 
     -X POST 
     -d '[{
          "name": "A", 
          "checkCodestyle": "false", 
          "runFileTests": "true", 
          "runFileTestsUrl": "https://github.com/sash6589/file-tests", 
          "languages": ["c"] }]' 
     http://<hostname>:8090/problem
 ```
 ## Отправка решения на проверку
 Отправить решение задачи на проверку в labtester можно на странице `http//<host_address>:8888/submit`
