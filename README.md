# labtester
Система автоматической проверки лабораторных работ по программированию.
labtester состоит из трех компонентов:
1) labtester-frontend - Фронтенд системы.
2) labtester-master - Компонент, отвечающий за бизнес-логику системы (управление задачами, работа с БД, принятие решений от пользователя и отправка их на проверку в labtester-worker).
3) labtester-worker - Компонент, который производит непосредственную проверку решения лабораторной работы.
## Установка зависимостей и базы данных
1) Склонировать репозитории [labtester-frontend](https://github.com/sash6589/labtester-frontend), [labtester-master](https://github.com/sash6589/labtester-master), [labtester-worker](https://github.com/sash6589/labtester-worker) в одну папку.
2) Выполнить `./install_labtester.sh`
## Сборка и запуск всей системы
1) Выполнить `./run_labtester.sh <host_address>`, где `<host_address>` - ip адрес машины на которой разворачивается labtester.
