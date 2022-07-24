# MySite
Это пример моей работы с:
+ Django(Python)
+ HTML/CSS/JavaScript
+ jQuery(JavaScript)

## Использование
+ Скачать репозиторий
+ Создать базу данных postsql
+ Заполнить файл .env
+ Создать миграции и заполнить базу данных. В корневой дериктории проекта:
```
python manage.py makemigrations
python manage.py migrate
```
+ Создать аккаунт админа и заполнить поля(пороль не показываются)
```
python manage.py createsuperuser
```
+ Запустить docker:
```
docker run -p 6379:6379 -d redis:5
```
или redis:
```
redis server
```
+ Запустить django
```
python manage.py runserver
```

## Страницы
+ Главная. Содержет в себе мои умения и премеры работ
+ Умение. Содержит информоцию об определённом умении
+ Сообщение. С помощью этой страницы можно написать мне

## Навигация
### templates
HTML файлы

### static
Статичесткие файлы    
Такие как :    
+ CSS
+ JavaScript
+ Шрифты

### media
Изображения

### Me
Настройки проекта
Такие как:
+ settings - основные настройки
+ urls - url адреса

### app 
Проект
+ admin настройки понели администратора
+ models модели для базы данных
+ views функции обработки запросов

## Контакты
+ Kwork [https://t.me/AverinTimur](https://t.me/AverinTimur)
+ Telegram [https://t.me/AverinTimur](https://t.me/AverinTimur)
+ Fiverr [https://www.fiverr.com/averintimur](https://www.fiverr.com/averintimur)
