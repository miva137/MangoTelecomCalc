// Русские названия тарифов ВАТС и КЦ по их ключам
const TARIFF_LABELS = {
  basic: 'Базовый', extended: 'Расширенный', maximum: 'Максимальный',
  start: 'Старт', optimum: 'Оптимум', profi: 'Профи', corporation: 'Корпорация'
};
// Данные тарифов ВАТС и КЦ: строки параметров и значения по каждому тарифу
const DATA = {"vats": {"tariffs": ["basic", "extended", "maximum"], "rows": [{"parameter": "Абонентская плата (фикс. часть лицензии)", "values": {"basic": "1 600 руб./мес.", "extended": "3 000 руб./мес.", "maximum": "4 200 руб./мес."}}, {"parameter": "Дополнительный профиль сотрудника", "values": {"basic": "210 руб./мес.", "extended": "200 руб./мес.", "maximum": "190 руб./мес."}}, {"parameter": "Количество каналов на номерах MANGO OFFICE", "values": {"basic": "10", "extended": "50", "maximum": "100"}}, {"parameter": "Автоподстановка номера при исходящих", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Карусель номеров", "values": {"basic": "—", "extended": "0,49 руб./мин", "maximum": "0,49 руб./мин"}}, {"parameter": "Этикетка (брендирование исх. звонков)", "values": {"basic": "0,32 руб./вызов", "extended": "0,32 руб./вызов", "maximum": "0,32 руб./вызов"}}, {"parameter": "МАВ (массовые автовызовы)", "values": {"basic": "0,32 руб./вызов", "extended": "0,32 руб./вызов", "maximum": "0,32 руб./вызов"}}, {"parameter": "Голосовое приветствие и схема обработки", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Одноуровневое IVR", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Многоуровневое IVR (до 4 уровней)", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Голосовое управление", "values": {"basic": "0,50 руб./обращение", "extended": "0,50 руб./обращение", "maximum": "0,50 руб./обращение"}}, {"parameter": "Переадресация на «знакомого» сотрудника", "values": {"basic": "500 руб./мес.", "extended": "350 руб./мес.", "maximum": "✓"}}, {"parameter": "Переадресация по номеру звонящего", "values": {"basic": "—", "extended": "350 руб./мес.", "maximum": "✓"}}, {"parameter": "Автоперезвон (пропущенные группой / в IVR)", "values": {"basic": "420 руб./мес.", "extended": "420 руб./мес.", "maximum": "420 руб./мес."}}, {"parameter": "Автодозвон из форм", "values": {"basic": "2 000 руб./мес.", "extended": "2 000 руб./мес.", "maximum": "2 000 руб./мес."}}, {"parameter": "Автоинформатор о времени до ответа / номере в очереди", "values": {"basic": "—", "extended": "250 руб./мес.", "maximum": "✓"}}, {"parameter": "Защита внутренних номеров паролем", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Чёрный/белый список", "values": {"basic": "90 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Автосекретарь при недоступности", "values": {"basic": "2,90 руб./день", "extended": "2,90 руб./день", "maximum": "2,90 руб./день"}}, {"parameter": "Дозвон на все контакты одновременно / по очереди / только SIP", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Кол-во групп обзвона", "values": {"basic": "15", "extended": "без ограничений", "maximum": "без ограничений"}}, {"parameter": "Объединение в группы и удержание вызовов", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Последовательный / Случайный алгоритм", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Одновременно всем (свободным)", "values": {"basic": "600 руб./мес.", "extended": "600 руб./мес.", "maximum": "✓"}}, {"parameter": "Параллельный по приоритету / равномерный", "values": {"basic": "—", "extended": "400 руб./мес.", "maximum": "✓ / 350 руб./мес."}}, {"parameter": "Пакет «Мониторинг»", "values": {"basic": "600 руб./мес.", "extended": "300 руб./мес.", "maximum": "✓"}}, {"parameter": "Запись всех разговоров и прослушивание онлайн", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Выборочная запись по правилам", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Автоотправка записи на e-mail", "values": {"basic": "100 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Поминутная тарификация записи", "values": {"basic": "0,8 руб./мин", "extended": "0,3 руб./мин", "maximum": "—"}}, {"parameter": "Безлимитная запись разговоров", "values": {"basic": "1 190 руб./мес.", "extended": "800 руб./мес.", "maximum": "✓"}}, {"parameter": "Автоудаление и перезапись", "values": {"basic": "1 250 руб./мес.", "extended": "1 250 руб./мес.", "maximum": "1 250 руб./мес."}}, {"parameter": "Речевая аналитика: абонплата", "values": {"basic": "1 100 руб./мес.", "extended": "1 100 руб./мес.", "maximum": "1 100 руб./мес."}}, {"parameter": "Распознавание с тегированием", "values": {"basic": "1,9 руб./мин", "extended": "1,5 руб./мин", "maximum": "1,25 руб./мин"}}, {"parameter": "Смысловой анализ (ИИ-тегирование)", "values": {"basic": "0,3 руб./тыс. симв.", "extended": "0,3 руб./тыс. симв.", "maximum": "0,3 руб./тыс. симв."}}, {"parameter": "ИИ-помощники", "values": {"basic": "0,07 руб./тыс. симв.", "extended": "0,07 руб./тыс. симв.", "maximum": "0,07 руб./тыс. симв."}}, {"parameter": "Голосовая почта (общая/персональная/групповая)", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Автоотправка голосовой почты на e-mail", "values": {"basic": "100 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Сообщения длительнее 1 мин", "values": {"basic": "—", "extended": "✓", "maximum": "✓"}}, {"parameter": "Распознавание голосовой почты", "values": {"basic": "0,16 руб./сообщ.", "extended": "0,16 руб./сообщ.", "maximum": "0,16 руб./сообщ."}}, {"parameter": "Аудиоконференции: включено участников", "values": {"basic": "3 чел.", "extended": "3 чел.", "maximum": "3 чел."}}, {"parameter": "1 доп. участник аудиоконференции", "values": {"basic": "200 руб./мес.", "extended": "100 руб./мес.", "maximum": "50 руб./мес."}}, {"parameter": "Виртуальные комнаты: 3 на 5 чел.", "values": {"basic": "500 руб./мес.", "extended": "500 руб./мес.", "maximum": "500 руб./мес."}}, {"parameter": "Виртуальные комнаты: 10 на 15 чел.", "values": {"basic": "1 000 руб./мес.", "extended": "1 000 руб./мес.", "maximum": "1 000 руб./мес."}}, {"parameter": "Виртуальные комнаты: 20 на 50 чел.", "values": {"basic": "3 500 руб./мес.", "extended": "3 500 руб./мес.", "maximum": "3 500 руб./мес."}}, {"parameter": "Видеозвонки (до 7 участников)", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Пакет 10 лицензий ВКС", "values": {"basic": "2 000 руб./мес.", "extended": "2 000 руб./мес.", "maximum": "2 000 руб./мес."}}, {"parameter": "Пакет 20 лицензий ВКС", "values": {"basic": "3 700 руб./мес.", "extended": "3 700 руб./мес.", "maximum": "3 700 руб./мес."}}, {"parameter": "Пакет 30 лицензий ВКС", "values": {"basic": "5 100 руб./мес.", "extended": "5 100 руб./мес.", "maximum": "5 100 руб./мес."}}, {"parameter": "Пакет 40 лицензий ВКС", "values": {"basic": "6 400 руб./мес.", "extended": "6 400 руб./мес.", "maximum": "6 400 руб./мес."}}, {"parameter": "Пакет 50 лицензий ВКС", "values": {"basic": "7 500 руб./мес.", "extended": "7 500 руб./мес.", "maximum": "7 500 руб./мес."}}, {"parameter": "Пакет 60 лицензий ВКС", "values": {"basic": "8 400 руб./мес.", "extended": "8 400 руб./мес.", "maximum": "8 400 руб./мес."}}, {"parameter": "Пакет 70 лицензий ВКС", "values": {"basic": "9 100 руб./мес.", "extended": "9 100 руб./мес.", "maximum": "9 100 руб./мес."}}, {"parameter": "Пакет 80 лицензий ВКС", "values": {"basic": "9 600 руб./мес.", "extended": "9 600 руб./мес.", "maximum": "9 600 руб./мес."}}, {"parameter": "Пакет 90 лицензий ВКС", "values": {"basic": "9 900 руб./мес.", "extended": "9 900 руб./мес.", "maximum": "9 900 руб./мес."}}, {"parameter": "Пакет 100 лицензий ВКС", "values": {"basic": "10 000 руб./мес.", "extended": "10 000 руб./мес.", "maximum": "10 000 руб./мес."}}, {"parameter": "Облачное хранилище 1 Гб", "values": {"basic": "190 руб./мес.", "extended": "190 руб./мес.", "maximum": "190 руб./мес."}}, {"parameter": "Облачное хранилище 5 Гб", "values": {"basic": "490 руб./мес.", "extended": "490 руб./мес.", "maximum": "490 руб./мес."}}, {"parameter": "Пакет Информационной безопасности", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Запрет международных звонков и белый список регионов", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "3 базовые роли", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Роли сотрудников", "values": {"basic": "750 руб./мес.", "extended": "750 руб./мес.", "maximum": "✓"}}, {"parameter": "Группа отчётов «Продажи»", "values": {"basic": "— (подкл. 500 руб.)", "extended": "3 500 руб./мес.", "maximum": "3 500 руб./мес."}}, {"parameter": "Группа отчётов «Обслуживание»", "values": {"basic": "— (подкл. 500 руб.)", "extended": "3 500 руб./мес.", "maximum": "3 500 руб./мес."}}, {"parameter": "Коллтрекинг «ЛАЙМ» + Сквозная аналитика лайт", "values": {"basic": "5 200 руб./мес.", "extended": "5 200 руб./мес.", "maximum": "—"}}, {"parameter": "Коллтрекинг «МАНГО» + Сквозная аналитика", "values": {"basic": "8 100 руб./мес.", "extended": "8 100 руб./мес.", "maximum": "8 100 руб./мес."}}, {"parameter": "Коллтрекинг «ПАПАЙЯ» + Мультиканальная аналитика", "values": {"basic": "—", "extended": "—", "maximum": "30 400 руб./мес."}}, {"parameter": "Мультиканальная аналитика", "values": {"basic": "2 400 руб./мес.", "extended": "2 400 руб./мес.", "maximum": "2 400 руб./мес."}}, {"parameter": "Местные номера", "values": {"basic": "2 000 руб./мес.", "extended": "2 000 руб./мес.", "maximum": "2 000 руб./мес."}}, {"parameter": "Интеграция Битрикс24 / amoCRM", "values": {"basic": "1 400 руб./мес.", "extended": "4 200 руб./мес.", "maximum": "7 700 руб./мес."}}, {"parameter": "Интеграция YCLIENTS / retailCRM", "values": {"basic": "1 000 руб./мес.", "extended": "3 000 руб./мес.", "maximum": "5 500 руб./мес."}}, {"parameter": "Расширенная версия интеграции Битрикс24 / amoCRM", "values": {"basic": "1 400 руб./мес.", "extended": "—", "maximum": "—"}}, {"parameter": "Расширенная версия retailCRM", "values": {"basic": "1 000 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Интеграция с G-Suite", "values": {"basic": "1 400 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Прямая интеграция с IDENT", "values": {"basic": "недоступно", "extended": "4 200 руб./мес.", "maximum": "7 700 руб./мес."}}, {"parameter": "Интеграция через вебхуки", "values": {"basic": "2 100 руб./мес.", "extended": "2 100 руб./мес.", "maximum": "2 100 руб./мес."}}, {"parameter": "1С: Управление торговлей", "values": {"basic": "недоступно", "extended": "1 000 руб./мес. за польз.", "maximum": "1 000 руб./мес. за польз."}}, {"parameter": "ELMA365 / Creatio", "values": {"basic": "недоступно", "extended": "7 700 руб./год за польз.", "maximum": "7 700 руб./год за польз."}}, {"parameter": "BPMSoft (с НДС)", "values": {"basic": "недоступно", "extended": "9 420 руб./год за польз.", "maximum": "9 420 руб./год за польз."}}, {"parameter": "API-модуль «Транзакции»", "values": {"basic": "2 990 руб./мес.", "extended": "7 490 руб./мес.", "maximum": "11 990 руб./мес."}}, {"parameter": "API-модуль «Номера»", "values": {"basic": "6 990 руб./мес.", "extended": "12 490 руб./мес.", "maximum": "24 990 руб./мес."}}, {"parameter": "Автокопирование на внешний FTP / Яндекс.Диск", "values": {"basic": "5 900 руб./мес.", "extended": "5 900 руб./мес.", "maximum": "5 900 руб./мес."}}, {"parameter": "Интеграция с LDAP", "values": {"basic": "5 000 руб./мес.", "extended": "5 000 руб./мес.", "maximum": "5 000 руб./мес."}}, {"parameter": "Адресная книга G Suite (Google)", "values": {"basic": "695 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "FMC, SMS/e-mail о балансе, отображение номера, BLF, пин-код, АОН, Call-back", "values": {"basic": "✓", "extended": "✓", "maximum": "✓"}}, {"parameter": "Голосовое сообщение при входящем", "values": {"basic": "50 руб./мес.", "extended": "✓", "maximum": "✓"}}, {"parameter": "Красивый SIP-адрес", "values": {"basic": "290 руб./шт.", "extended": "290 руб./шт.", "maximum": "290 руб./шт."}}, {"parameter": "Отраслевое имя отправителя SMS", "values": {"basic": "300 руб./мес. (подкл. 100 руб.)", "extended": "300 руб./мес.", "maximum": "300 руб./мес."}}, {"parameter": "Индивидуальное имя отправителя SMS", "values": {"basic": "8 000 руб./мес.", "extended": "8 000 руб./мес.", "maximum": "8 000 руб./мес."}}, {"parameter": "Пассивный SIP", "values": {"basic": "200 руб./мес.", "extended": "200 руб./мес.", "maximum": "200 руб./мес."}}, {"parameter": "Активный SIP", "values": {"basic": "480 руб./мес.", "extended": "480 руб./мес.", "maximum": "480 руб./мес."}}, {"parameter": "SIP-trunk (абонплата)", "values": {"basic": "550 руб./мес.", "extended": "550 руб./мес.", "maximum": "550 руб./мес."}}, {"parameter": "VPN", "values": {"basic": "—", "extended": "5 000 руб./мес.", "maximum": "5 000 руб./мес."}}, {"parameter": "Контакт-центр MANGO OFFICE", "values": {"basic": "Обсуждается индивидуально", "extended": "Обсуждается индивидуально", "maximum": "Обсуждается индивидуально"}}]}, "kc": {"tariffs": ["start", "optimum", "profi", "corporation"], "rows": [{"parameter": "Абонентская плата (фикс. часть лицензии - включено 3 сотрудника)", "values": {"start": "4 500 руб./мес.", "optimum": "6 900 руб./мес.", "profi": "10 100 руб./мес.", "corporation": "по запросу"}}, {"parameter": "Доп.лицензия", "values": {"start": "1 500 руб./мес.", "optimum": "2 300 руб./мес.", "profi": "3 400 руб./мес.", "corporation": "по запросу"}}, {"parameter": "Омниканальные коммуникации (звонки, чаты, видеосвязь)", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Мониторинг очереди входящих обращений", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Статусы активности и занятость операторов", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Базовая аналитика по обращениям", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёты «Контроль сотрудников» / «Карточка рабочего дня» / «Рабочее время»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Суфлирование, подключение к разговорам, перехват", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Внешний справочник абонентов, обратные звонки, «История вызовов»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Пропущенные звонки» (новое)", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Обслуживание входящих вызовов»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Классификация и обработка вызовов по тематикам", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Геймификация, задачи, база знаний", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Расширенная аналитика по обращениям и группам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Панель мониторинга", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Показатели производительности сотрудников»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Показатели производительности групп»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «История работы операторов»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Пользовательские статусы", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отложенный звонок", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Контроль перезвонов по пропущенным звонкам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Дашборд", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Защита номеров", "values": {"start": "1 500 руб./мес.", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Чат", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Видеоконференции", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Сделки", "values": {"start": "—", "optimum": "—", "profi": "✓", "corporation": "✓"}}, {"parameter": "Кол-во пользовательских полей в сделках", "values": {"start": "—", "optimum": "—", "profi": "20", "corporation": "20"}}, {"parameter": "Лимит на количество сделок", "values": {"start": "—", "optimum": "—", "profi": "без ограничений", "corporation": "без ограничений"}}, {"parameter": "Дисковое хранилище", "values": {"start": "—", "optimum": "—", "profi": "10 ГБ", "corporation": "10 ГБ"}}, {"parameter": "Исходящий обзвон роботом или операторами", "values": {"start": "1 кампания до 100 контактов/мес.", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автодозвон по новым заявкам/лидам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Повторение попыток дозвона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Перевод вызова на оператора при обзвоне роботом", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "АнтиРобот (определение автоответчиков)", "values": {"start": "—", "optimum": "20 коп./вызов", "profi": "20 коп./вызов", "corporation": "20 коп./вызов"}}, {"parameter": "Аналитика по запущенному обзвону", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автоотправка сообщений при недозвоне", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Интеграция по API для загрузки баз и запуска на прозвон", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Предиктивный режим обзвона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Проверка на дубли", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Перебор номеров", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Загрузка базы с несколькими номерами одного клиента", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Исходящий обзвон PRO", "values": {"start": "—", "optimum": "20 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Определение региона клиента", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автоподстановка номера по коду региона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Минута разговора через SIP-транк без номеров Mango office", "values": {"start": "—", "optimum": "0,1 руб./мин", "profi": "0,1 руб./мин", "corporation": "0,1 руб./мин"}}, {"parameter": "Подключение 1 канала каждого типа текстовых коммуникаций", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Расширенная версия «Манго Диалоги»", "values": {"start": "5 300 руб./мес.", "optimum": "5 300 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Авито Работа", "values": {"start": "10 000 руб./мес.", "optimum": "10 000 руб./мес.", "profi": "10 000 руб./мес.", "corporation": "10 000 руб./мес."}}, {"parameter": "Мессенджер MAX", "values": {"start": "4 000 руб./мес.", "optimum": "4 000 руб./мес.", "profi": "4 000 руб./мес.", "corporation": "4 000 руб./мес."}}, {"parameter": "Массовые текстовые рассылки с отпиской", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "WhatsApp: подключение бизнес-аккаунта (с НДС)", "values": {"start": "8 000 руб./разово", "optimum": "8 000 руб./разово", "profi": "8 000 руб./разово", "corporation": "8 000 руб./разово"}}, {"parameter": "WhatsApp «1 000 контактов»", "values": {"start": "7 800 руб./мес.", "optimum": "7 800 руб./мес.", "profi": "7 800 руб./мес.", "corporation": "7 800 руб./мес."}}, {"parameter": "WhatsApp «2 000 контактов»", "values": {"start": "12 000 руб./мес.", "optimum": "12 000 руб./мес.", "profi": "12 000 руб./мес.", "corporation": "12 000 руб./мес."}}, {"parameter": "WhatsApp «5 000 контактов»", "values": {"start": "24 000 руб./мес.", "optimum": "24 000 руб./мес.", "profi": "24 000 руб./мес.", "corporation": "24 000 руб./мес."}}, {"parameter": "WhatsApp «10 000 контактов»", "values": {"start": "36 000 руб./мес.", "optimum": "36 000 руб./мес.", "profi": "36 000 руб./мес.", "corporation": "36 000 руб./мес."}}, {"parameter": "WhatsApp «Безлимитный»", "values": {"start": "48 000 руб./мес.", "optimum": "48 000 руб./мес.", "profi": "48 000 руб./мес.", "corporation": "48 000 руб./мес."}}, {"parameter": "WhatsApp: доп. контакт свыше 1 000", "values": {"start": "15,1 руб./шт.", "optimum": "15,1 руб./шт.", "profi": "15,1 руб./шт.", "corporation": "15,1 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 2 000", "values": {"start": "12,6 руб./шт.", "optimum": "12,6 руб./шт.", "profi": "12,6 руб./шт.", "corporation": "12,6 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 5 000", "values": {"start": "10,8 руб./шт.", "optimum": "10,8 руб./шт.", "profi": "10,8 руб./шт.", "corporation": "10,8 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 10 000", "values": {"start": "8,7 руб./шт.", "optimum": "8,7 руб./шт.", "profi": "8,7 руб./шт.", "corporation": "8,7 руб./шт."}}, {"parameter": "Скрипты разговоров", "values": {"start": "4 000 руб./мес.", "optimum": "4 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Мотивация сотрудников (Wallboard)", "values": {"start": "2 600 руб./мес.", "optimum": "2 600 руб./мес.", "profi": "2 600 руб./мес.", "corporation": "2 600 руб./мес."}}, {"parameter": "WFM «Базовый» на 10 лицензий", "values": {"start": "13 000 руб./мес.", "optimum": "13 000 руб./мес.", "profi": "13 000 руб./мес.", "corporation": "13 000 руб./мес."}}, {"parameter": "WFM «Расширенный» на 25 лицензий", "values": {"start": "52 000 руб./мес.", "optimum": "52 000 руб./мес.", "profi": "52 000 руб./мес.", "corporation": "52 000 руб./мес."}}, {"parameter": "Демонстрация информации об интересах клиента", "values": {"start": "2 000 руб./мес.", "optimum": "2 000 руб./мес.", "profi": "—", "corporation": "—"}}, {"parameter": "Модуль «Контроль качества»", "values": {"start": "2 000 руб./мес.", "optimum": "2 000 руб./мес.", "profi": "2 000 руб./мес.", "corporation": "2 000 руб./мес."}}, {"parameter": "Оценка разговоров по бланкам с апелляцией", "values": {"start": "2 300 руб./мес.", "optimum": "2 300 руб./мес.", "profi": "2 300 руб./мес.", "corporation": "2 300 руб./мес."}}, {"parameter": "Вопросы для постзвонковой оценки качества", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Уведомления о постзвонковых оценках", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Отчёт «Контроль контролёров»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Запись экрана за 1 лицензию", "values": {"start": "—", "optimum": "800 руб./мес.", "profi": "800 руб./мес.", "corporation": "800 руб./мес."}}, {"parameter": "Модуль «Голосовые роботы»", "values": {"start": "4,5 руб./мин", "optimum": "4,5 руб./мин", "profi": "4,5 руб./мин", "corporation": "4,5 руб./мин"}}, {"parameter": "Многоканальный голосовой робот", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Премиальные голоса для роботов", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Модуль «Чат-боты»", "values": {"start": "3 500 руб./мес.", "optimum": "3 500 руб./мес.", "profi": "3 500 руб./мес.", "corporation": "3 500 руб./мес."}}, {"parameter": "Открытое API", "values": {"start": "8 000 руб./мес.", "optimum": "8 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Робот-администратор", "values": {"start": "10 000 руб./мес.", "optimum": "10 000 руб./мес.", "profi": "10 000 руб./мес.", "corporation": "10 000 руб./мес."}}, {"parameter": "Генерация и распознавание речи", "values": {"start": "5 000 руб./мес.", "optimum": "5 000 руб./мес.", "profi": "5 000 руб./мес.", "corporation": "5 000 руб./мес."}}, {"parameter": "Конструктор отчётов", "values": {"start": "—", "optimum": "26 000 руб./мес.", "profi": "26 000 руб./мес.", "corporation": "26 000 руб./мес."}}, {"parameter": "Обсуждается индивидуально", "values": {"start": "персональный менеджер, кредитная система, скидка >100 сотрудников", "optimum": "то же", "profi": "то же", "corporation": "то же"}}]}};

// Функции, которые выбраны по умолчанию при открытии ВАТС
const DEFAULT_FEATURES = [
  'Безлимитная запись разговоров',
  'Интеграция Битрикс24 / amoCRM',
  'Облачное хранилище 1 Гб'
];

// Текущий продукт и индексы выбранных строк ВАТС из DATA
let product = 'vats';
let selected = [];
// Количество номеров, доп. профилей и доп. каналов Манго Диалоги по ключам
const qtys = { n499: 0, n495: 0, nMobile: 0, profiles: 0, dialogs: 0 };
// Добавленные в сравнение пункты номеров и профилей, в порядке добавления
let extras = [];

// Типы номеров: название, разовая и ежемесячная цена
const NUMBER_TYPES = [
  { id: 'n499', label: 'Номер в коде 499', once: 1050, monthly: 250 },
  { id: 'n495', label: 'Номер в коде 495', once: 2650, monthly: 350 },
  { id: 'nMobile', label: 'Мобильный номер', once: 950, monthly: 200 }
];

// Лимит номеров на тариф и плата за каждый номер сверх лимита
const NUMBER_RULES = {
  basic: { limit: 3, overFee: 0 },
  extended: { limit: 15, overFee: 0 },
  maximum: { limit: 15, overFee: 150 }
};

// Пункты номеров и доп. профилей для поиска функций ВАТС (ключ совпадает с qtys)
const EXTRA_ITEMS = [
  { key: 'n499', label: 'Номер в коде 499', text: 'Номер в коде 499 (1 050 руб. разово, 250 руб./мес.)' },
  { key: 'n495', label: 'Номер в коде 495', text: 'Номер в коде 495 (2 650 руб. разово, 350 руб./мес.)' },
  { key: 'nMobile', label: 'Мобильные номера', text: 'Мобильные номера (950 руб. разово, 200 руб./мес.)' },
  { key: 'profiles', label: 'Доп. профили сотрудников', text: 'Доп. профили сотрудников (сверх включённых)' },
  { key: 'dialogs', label: 'Манго Диалоги', text: 'Манго Диалоги (1 000 руб./мес., доп. канал 1 000 руб./мес.)' }
];

// Базовая цена Манго Диалоги и цена каждого дополнительного канала в руб./мес.
const DIALOG_BASE = 1000, DIALOG_CHANNEL = 1000;

// Короткие помощники: поиск элемента по id, формат чисел, проверка и вывод значений
const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString('ru-RU', { maximumFractionDigits: 2 });
const isUnavailable = v => v === '' || v.startsWith('—') || v === 'недоступно';
const show = v => v === '✓' ? '0' : v;

// Разбирает строку вида «1 600 руб./мес.» в число и единицу измерения; null, если формат не распознан
function parseValue(text) {
  const m = /^(\d[\d\s]*(?:[.,]\d+)?)(?:\s*(.*))?$/.exec(text.trim());
  if (!m) return null;
  const unit = (m[2] || '').trim();
  if (unit && !/^(руб|коп|ГБ|чел)/.test(unit)) return null;
  return { num: parseFloat(m[1].replace(/\s/g, '').replace(',', '.')), unit };
}

// Возвращает текст разницы и класс: pos (плюс, зелёный), neg (минус, красный)
function compare(a, b) {
  if (a === b) return { text: 'без изменений', cls: '' };
  if (isUnavailable(a) && !isUnavailable(b)) return { text: 'добавлено: ' + show(b), cls: 'pos' };
  if (!isUnavailable(a) && isUnavailable(b)) return { text: 'убрано', cls: 'neg' };
  const pa = a === '✓' ? { num: 0, unit: parseValue(b)?.unit ?? '' } : parseValue(a);
  const pb = b === '✓' ? { num: 0, unit: parseValue(a)?.unit ?? '' } : parseValue(b);
  if (pa && pb && pa.unit === pb.unit) {
    const delta = pb.num - pa.num;
    if (delta === 0) return { text: 'без изменений', cls: '', delta: 0, unit: pb.unit };
    const sign = delta > 0 ? '+' : '';
    return {
      text: sign + fmt(delta) + (pb.unit ? ' ' + pb.unit : ''),
      cls: delta > 0 ? 'pos' : 'neg', delta, unit: pb.unit
    };
  }
  return { text: show(b) + ' (не сравнимо)', cls: '' };
}

// Режим «Стоимость тарифа»: показывается только текущий тариф
const isSingle = () => $('mode').value === 'cost';

// Перерисовывает все блоки после изменения выбора или ввода
function update() {
  refreshSelects();
  const single = isSingle();
  document.body.classList.toggle('single', single);
  $('targetField').hidden = single;
  $('currentLabel').textContent = single ? 'Тариф' : 'Текущий тариф';
  renderChips();
  render();
  renderKc();
}

// Создаёт плашку с названием функции и кнопкой удаления
function makeChip(label, onRemove) {
  const li = document.createElement('li');
  li.append(label);
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.textContent = '×';
  remove.title = 'Удалить из сравнения';
  remove.onclick = onRemove;
  li.appendChild(remove);
  return li;
}

// Выводит список выбранных функций ВАТС с кнопкой удаления
function renderChips() {
  const ul = $('chips');
  ul.replaceChildren();
  if (product === 'vats' && packageOn) {
    ul.appendChild(makeChip(PACKAGE_LABEL, () => { packageOn = false; update(); }));
  }
  extras.forEach(key => {
    ul.appendChild(makeChip(EXTRA_ITEMS.find(x => x.key === key).label, () => {
      extras = extras.filter(x => x !== key); qtys[key] = 0; update();
    }));
  });
  selected.forEach(idx => {
    ul.appendChild(makeChip(DATA[product].rows[idx].parameter, () => {
      selected = selected.filter(x => x !== idx); update();
    }));
  });
}

// Возвращает целое неотрицательное количество номеров данного типа из поля ввода
function numberQty(t) {
  return qtys[t.id] || 0;
}

// Считает разовую и ежемесячную стоимость подключаемых номеров
function numbersCost() {
  let once = 0, monthly = 0;
  NUMBER_TYPES.forEach(t => {
    const qty = numberQty(t);
    once += qty * t.once;
    monthly += qty * t.monthly;
  });
  return { once, monthly };
}

// Считает превышение лимита номеров тарифа и плату за номера сверх лимита
function numbersFor(tariff) {
  const rule = NUMBER_RULES[tariff];
  if (!rule) return { overFee: 0, exceeded: false, total: 0, limit: 0 };
  const total = NUMBER_TYPES.reduce((s, t) => s + numberQty(t), 0);
  const over = Math.max(0, total - rule.limit);
  return { overFee: over * rule.overFee, exceeded: rule.overFee === 0 && over > 0, total, limit: rule.limit };
}

// Максимум номеров типа key с учётом лимита выбранных тарифов (строжайший из них) и уже добавленных номеров других типов
function maxNumberQty(key) {
  if (!NUMBER_TYPES.some(t => t.id === key)) return Infinity;
  const tariffs = [$('current').value, isSingle() ? null : $('target').value].filter(Boolean);
  const limits = tariffs.map(t => NUMBER_RULES[t]).filter(r => r && r.overFee === 0).map(r => r.limit);
  if (!limits.length) return Infinity;
  const others = NUMBER_TYPES.filter(t => t.id !== key).reduce((s, t) => s + numberQty(t), 0);
  return Math.max(0, Math.min(...limits) - others);
}

// Название строки DATA, из которой берётся цена доп. профиля
const PROFILE_PARAM = 'Дополнительный профиль сотрудника';

// Возвращает количество дополнительных профилей сотрудников из поля ввода
function profileQty() {
  return qtys.profiles;
}

// Возвращает цену дополнительного профиля для тарифа в руб./мес.
function profilePrice(tariff) {
  const row = DATA[product].rows.find(r => r.parameter === PROFILE_PARAM);
  const p = row && parseValue(row.values[tariff] ?? '');
  return p && p.unit === 'руб./мес.' ? p.num : 0;
}

// Стоимость Манго Диалоги в руб./мес. с учётом дополнительных каналов
function dialogCost() {
  return DIALOG_BASE + DIALOG_CHANNEL * qtys.dialogs;
}

// Текст ячейки Манго Диалоги: сумма с расшифровкой базы и доп. каналов
function dialogText(amount) {
  const extra = qtys.dialogs;
  return fmt(amount) + ' руб./мес. (базовая стоимость ' + fmt(DIALOG_BASE) + ' руб.' +
    (extra ? ', доп. каналы: ' + extra + ' × ' + fmt(DIALOG_CHANNEL) + ' руб.' : '') + ')';
}

// Строит основную таблицу сравнения ВАТС, строки номеров и профилей, а также итоги
function render() {
  const d = DATA[product];
  const cur = $('current').value, tgt = isSingle() ? cur : $('target').value;
  $('colCur').textContent = (isSingle() ? 'Тариф: ' : 'Текущий тариф: ') + TARIFF_LABELS[cur];
  $('colTgt').textContent = 'Новый тариф: ' + TARIFF_LABELS[tgt];

  // Очищает и заново заполняет таблицу ВАТС
  const body = $('body');
  body.replaceChildren();
  let curSum = 0, tgtSum = 0;
  // Ячейка колонки разового платежа; видна только в режиме расчёта
  const onceTd = (text = '') => {
    const td = document.createElement('td');
    td.className = 'once-col';
    td.textContent = text;
    return td;
  };
  // Строки функций: суммируем руб./мес. для текущего и нового тарифа
  [0, ...selected].forEach(idx => {
    const r = d.rows[idx];
    const key = 'v' + idx;
    // Битрикс24 / amoCRM: скидка текущего не применяется, если текущий тариф базовый (то же для нового)
    const isBitrix = /Битрикс24/.test(r.parameter);
    const noDiscC = isBitrix && cur === 'basic', noDiscT = isBitrix && tgt === 'basic';
    const pctC = noDiscC ? 0 : discPct(key + 'c'), pctT = noDiscT ? 0 : discPct(key + 't');
    const curT = discountText(rowValue(r, cur), pctC), tgtT = discountText(rowValue(r, tgt), pctT);
    const c = compare(curT, tgtT);
    const pc = parseValue(curT), pt = parseValue(tgtT);
    if (pc && pc.unit === 'руб./мес.') curSum += pc.num;
    if (pt && pt.unit === 'руб./мес.') tgtSum += pt.num;
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    first.textContent = show(r.parameter);
    if (isStorage(r)) first.appendChild(storageSelect());
    if (r.parameter === PROFILE_PARAM) first.appendChild(profileQtyInput());
    tr.appendChild(first);
    tr.appendChild(discountCell(key + 'c', noDiscC));
    tr.appendChild(textCell(show(curT)));
    tr.appendChild(discountCell(key + 't', noDiscT));
    tr.appendChild(textCell(show(tgtT)));
    const diff = document.createElement('td');
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd());
    body.appendChild(tr);
  });

  // Пакет на связь: скидка применяется отдельно для текущего и нового тарифа
  if (product === 'vats' && packageOn) {
    const pkg = PACKAGE_PLANS[packageState.idx];
    const dCur = round2(pkg.price * (1 - discPct('pkgc') / 100));
    const dTgt = round2(pkg.price * (1 - discPct('pkgt') / 100));
    const curText = fmt(dCur) + ' руб./мес.', tgtText = fmt(dTgt) + ' руб./мес.';
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    first.textContent = PACKAGE_LABEL;
    first.appendChild(packageSelect());
    tr.appendChild(first);
    tr.appendChild(discountCell('pkgc', false));
    tr.appendChild(textCell(curText));
    tr.appendChild(discountCell('pkgt', false));
    tr.appendChild(textCell(tgtText));
    const diff = document.createElement('td');
    const c = compare(curText, tgtText);
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd());
    body.appendChild(tr);
    curSum += dCur;
    tgtSum += dTgt;
  }

  // Строки добавленных номеров и доп. профилей: количество задаётся прямо в строке
  let extraCur = 0, extraTgt = 0, extraOnce = 0;
  if (product === 'vats') extras.forEach(key => {
    const item = EXTRA_ITEMS.find(x => x.key === key);
    const t = NUMBER_TYPES.find(x => x.id === key);
    const isProfile = key === 'profiles';
    const isDialog = key === 'dialogs';
    // Мобильные номера без скидки
    const noDisc = key === 'nMobile';
    const kC = 1 - (noDisc ? 0 : discPct('x' + key + 'c')) / 100;
    const kT = 1 - (noDisc ? 0 : discPct('x' + key + 't')) / 100;
    const monthlyCur = isProfile ? qtys.profiles * profilePrice(cur) : isDialog ? dialogCost() : t.monthly * qtys[key];
    const monthlyTgt = isProfile ? qtys.profiles * profilePrice(tgt) : isDialog ? dialogCost() : t.monthly * qtys[key];
    const dCur = round2(monthlyCur * kC);
    const dTgt = round2(monthlyTgt * kT);
    extraCur += dCur;
    extraTgt += dTgt;
    const onceAmt = isProfile || isDialog ? 0 : t.once * qtys[key];
    extraOnce += onceAmt;
    const once = isSingle() || isDialog ? '' : ' + разово ' + fmt(onceAmt) + ' руб.';
    const curText = isProfile ? fmt(dCur) + ' руб./мес.' : isDialog ? dialogText(dCur) : fmt(dCur) + ' руб./мес.' + once;
    const tgtText = isProfile ? fmt(dTgt) + ' руб./мес.' : isDialog ? dialogText(dTgt) : fmt(dTgt) + ' руб./мес.' + once;
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    const input = document.createElement('input');
    input.className = 'qty';
    input.type = 'text';
    input.inputMode = 'numeric';
    input.id = 'qty-' + key;
    input.value = qtys[key];
    // Количество меняется прямо в строке; фокус возвращается в поле после перерисовки
    input.oninput = e => {
      e.target.value = e.target.value.replace(/\D/g, '');
      qtys[key] = Math.min(Math.floor(Number(e.target.value) || 0), maxNumberQty(key));
      update();
      const again = $('qty-' + key);
      again.focus();
      again.setSelectionRange(again.value.length, again.value.length);
    };
    first.append(item.label + (isDialog ? ' и доп. каналы: ' : ' × '), input);
    tr.appendChild(first);
    tr.appendChild(discountCell('x' + key + 'c', noDisc));
    tr.appendChild(textCell(curText));
    tr.appendChild(discountCell('x' + key + 't', noDisc));
    tr.appendChild(textCell(tgtText));
    const c = compare(curText, tgtText);
    const diff = document.createElement('td');
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd(isProfile ? '' : fmt(onceAmt) + ' руб.'));
    body.appendChild(tr);
  });

  // Строка превышения лимита номеров и итоги по номерам
  const fCur = numbersFor(cur), fTgt = numbersFor(tgt);
  if (fCur.overFee || fTgt.overFee) {
    const curText = fmt(fCur.overFee) + ' руб./мес.', tgtText = fmt(fTgt.overFee) + ' руб./мес.';
    const tr = document.createElement('tr');
    ['Номера сверх лимита тарифа', '', curText, '', tgtText].forEach(text => {
      const td = document.createElement('td');
      td.textContent = text;
      tr.appendChild(td);
    });
    const diff = document.createElement('td');
    const c = compare(curText, tgtText);
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd());
    body.appendChild(tr);
  }
  curSum += extraCur + fCur.overFee;
  tgtSum += extraTgt + fTgt.overFee;
  // Предупреждение, если номеров больше лимита тарифа
  $('numbersWarn').textContent = [...new Set([cur, tgt])]
    .filter(k => numbersFor(k).exceeded)
    .map(k => `На тарифе «${TARIFF_LABELS[k]}» допускается не более ${numbersFor(k).limit} номеров (сейчас ${numbersFor(k).total}).`)
    .join(' ');

  // Итоговая строка с разницей в руб./мес.
  const diffSum = tgtSum - curSum;
  const cells = [
    'Итого в месяц',
    '',
    fmt(curSum) + ' руб./мес.',
    '',
    fmt(tgtSum) + ' руб./мес.',
    (diffSum > 0 ? '+' : '') + fmt(diffSum) + ' руб./мес.',
    fmt(extraOnce) + ' руб.'
  ];
  const tr = document.createElement('tr');
  cells.forEach((text, i) => {
    const td = document.createElement('td');
    td.textContent = text;
    if (i === 5 && diffSum !== 0) td.className = diffSum > 0 ? 'pos' : 'neg';
    if (i === 6) td.className = 'once-col';
    tr.appendChild(td);
  });
  mainTotals = { cur: curSum, tgt: tgtSum };
  $('foot').replaceChildren(tr);
}

// Подключает выпадающий список подсказок к полю ввода; возвращает функцию его скрытия
function bindSuggest(inputId, listId, rowsFn, onEnter) {
  const input = $(inputId), list = $(listId);
  let items = [], active = -1;
  // Закрывает список подсказок
  const hide = () => list.classList.remove('open');
  const pick = i => { input.value = items[i].text; hide(); };
  // Фильтрует по введённому тексту; пустое поле показывает весь список
  const show = () => {
    const q = input.value.trim().toLowerCase();
    items = rowsFn().filter(r => r.text.toLowerCase().includes(q)).slice(0, 50);
    active = -1;
    list.replaceChildren(...items.map((r, i) => {
      const li = document.createElement('li');
      li.textContent = r.text;
      li.onmousedown = e => { e.preventDefault(); pick(i); };
      return li;
    }));
    list.classList.toggle('open', items.length > 0);
  };
  input.oninput = show;
  input.onfocus = show;
  input.onclick = show;
  input.onblur = hide;
  // Навигация стрелками, выбор Enter и закрытие Escape
  input.onkeydown = e => {
    const lis = list.children;
    if (e.key === 'Enter') {
      e.preventDefault();
      if (list.classList.contains('open') && active >= 0) pick(active);
      onEnter();
      return;
    }
    if (!list.classList.contains('open')) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      active = (active + (e.key === 'ArrowDown' ? 1 : -1) + lis.length) % lis.length;
      [...lis].forEach((li, i) => li.classList.toggle('active', i === active));
    } else if (e.key === 'Escape') {
      hide();
    }
  };
  return hide;
}

// Список функций продукта для подсказок (без первой строки с абонентской платой)
function featureRows(prod) {
  const rows = DATA[prod].rows.map((r, idx) => ({ text: r.parameter, idx })).slice(1);
  return prod === 'vats' ? rows.concat([{ text: PACKAGE_LABEL, extra: 'package' }], EXTRA_ITEMS.map(x => ({ text: x.text, extra: x.key }))) : rows;
}

// Добавляет функцию из поля ввода в список по точному названию и перерисовывает
function addFeature(inputId, prod, list, rerender) {
  const text = $(inputId).value.trim().toLowerCase();
  if (prod === 'vats' && text === PACKAGE_LABEL.toLowerCase()) {
    packageOn = true;
    rerender();
    return;
  }
  // Пункт номеров или профиля добавляется в extras, а не в строки DATA
  const extra = prod === 'vats' ? EXTRA_ITEMS.find(x => x.text.toLowerCase() === text) : null;
  if (extra) {
    if (!extras.includes(extra.key)) extras.push(extra.key);
    rerender();
    return;
  }
  const idx = DATA[prod].rows.findIndex((r, i) => i > 0 && r.parameter.toLowerCase() === text);
  if (idx < 0) return;
  if (!list.includes(idx)) list.push(idx);
  rerender();
}

// Заполняет выбор тарифов ВАТС, выбирает функции по умолчанию и запускает первую отрисовку
function init() {
  const d = DATA[product];
  $('current').replaceChildren(...d.tariffs.map(k => new Option(TARIFF_LABELS[k], k)));
  $('target').replaceChildren(...d.tariffs.map(k => new Option(TARIFF_LABELS[k], k)));
  // По умолчанию новый тариф - второй в списке
  $('target').selectedIndex = Math.min(1, d.tariffs.length - 1);
  // Сбрасывает добавленные номера и профили при переключении продукта
  extras = [];
  packageOn = true;
  Object.keys(qtys).forEach(k => { qtys[k] = 0; });
  $('feature').value = '';
  hideSuggestions();
  // Выбор функций по умолчанию по названиям из DEFAULT_FEATURES
  selected = d.rows.map((r, i) => i).filter(i => i > 0 && DEFAULT_FEATURES.includes(d.rows[i].parameter));
  update();
}

// Переключение продукта ВАТС / КЦ с полной переинициализацией
$('product').onchange = e => { product = e.target.value; init(); };
$('current').onchange = update;
$('target').onchange = update;
$('mode').onchange = update;
// Количество номеров и профилей задаётся в строках таблицы
// Подсказки для поля поиска функций ВАТС
const hideSuggestions = bindSuggest('feature', 'suggestList', () => featureRows(product), () => $('add').click());
// Кнопка добавления функции ВАТС в сравнение
$('add').onclick = () => addFeature('feature', product, selected, update);

// Итоги ВАТС без КЦ (текущий и новый тариф), нужны для блока ВАТС + КЦ
let mainTotals = { cur: 0, tgt: 0 };
// Выбранные функции КЦ
const kcState = { selected: [] };
// Скидки в процентах по строкам: v+индекс (ВАТС), k+индекс (КЦ), x+ключ (номера и профили)
const rowDiscount = {};
// Возвращает процент скидки строки
const discPct = key => rowDiscount[key] || 0;
// Округляет до копеек
const round2 = n => Math.round(n * 100) / 100;

// Пересчитывает денежное значение строки со скидкой; прочие значения не меняет
function discountText(text, pct) {
  const p = parseValue(text);
  if (!pct || !p || !p.unit.startsWith('руб')) return text;
  return fmt(round2(p.num * (1 - pct / 100))) + ' ' + p.unit;
}

// Ячейка ввода скидки в процентах; для недоступных строк остаётся пустой
function discountCell(key, disabled) {
  const td = document.createElement('td');
  if (disabled) return td;
  const input = document.createElement('input');
  input.className = 'qty';
  input.type = 'text';
  input.inputMode = 'numeric';
  input.placeholder = '0';
  input.id = 'disc-' + key;
  input.value = rowDiscount[key] || '';
  input.oninput = e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
    rowDiscount[key] = Math.min(100, Number(e.target.value) || 0);
    update();
    const again = $('disc-' + key);
    again.focus();
    again.setSelectionRange(again.value.length, again.value.length);
  };
  td.appendChild(input);
  return td;
}

// Тарифы облачного хранилища по объёму: ГБ и цена в руб./мес. (дополняются по мере необходимости)
const STORAGE_PLANS = [
  { gb: 1, price: 190 },
  { gb: 5, price: 490 }
];
// Выбранный объём облачного хранилища
const storageState = { gb: 1 };
// Строка облачного хранилища, цена которой зависит от объёма
const isStorage = r => r.parameter.startsWith('Облачное хранилище');
// Значение строки для тарифа; для хранилища - цена выбранного объёма, если тариф его включает
function rowValue(r, tariff) {
  if (r.parameter === PROFILE_PARAM && !isUnavailable(r.values[tariff])) return fmt(round2(profilePrice(tariff) * qtys.profiles)) + ' руб./мес.';
  if (!isStorage(r) || isUnavailable(r.values[tariff])) return r.values[tariff];
  const plan = STORAGE_PLANS.find(p => p.gb === storageState.gb);
  return fmt(plan.price) + ' руб./мес.';
}
// Выпадающий выбор объёма облачного хранилища в строке таблицы
function storageSelect() {
  const sel = document.createElement('select');
  sel.id = 'storage';
  STORAGE_PLANS.forEach(p => sel.add(new Option(p.gb + ' ГБ: ' + fmt(p.price) + ' руб./мес.', p.gb)));
  sel.value = storageState.gb;
  sel.onchange = () => { storageState.gb = Number(sel.value); update(); };
  return customSelect(sel);
}
// Пакеты на связь с ежемесячной ценой
const PACKAGE_PLANS = [
  { label: '300 руб./мес.', price: 300 },
  { label: '600 руб./мес.', price: 600 },
  { label: '2 500 руб./мес.', price: 2500 },
  { label: '10 000 руб./мес. (посекундный)', price: 10000 },
  { label: '17 000 руб./мес. (посекундный)', price: 17000 }
];
const packageState = { idx: 0 };
// Пакет на связь включён по умолчанию; удаляется кнопкой в строке таблицы
let packageOn = true;
const PACKAGE_LABEL = 'Пакет на связь';
// Выпадающий выбор пакета на связь в строке таблицы ВАТС
function packageSelect() {
  const sel = document.createElement('select');
  sel.id = 'package';
  PACKAGE_PLANS.forEach((p, i) => sel.add(new Option(p.label, i)));
  sel.value = packageState.idx;
  sel.onchange = () => { packageState.idx = Number(sel.value); update(); };
  return customSelect(sel);
}
// Поле количества доп. профилей в строке стоимости профиля; делит значение с блоком доп. профилей
function profileQtyInput() {
  const input = document.createElement('input');
  input.className = 'qty';
  input.type = 'text';
  input.inputMode = 'numeric';
  input.id = 'qty-profile-row';
  input.value = qtys.profiles;
  input.oninput = e => {
    e.target.value = e.target.value.replace(/\D/g, '');
    qtys.profiles = Math.floor(Number(e.target.value) || 0);
    update();
    const again = $('qty-profile-row');
    again.focus();
    again.setSelectionRange(again.value.length, again.value.length);
  };
  return input;
}

// Ячейка с текстом значения строки
function textCell(text) {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}

// Создаёт строку итогов для блока КЦ (с разницей между тарифами)
function kcTotalRow(label, cur, tgt) {
  const diff = tgt - cur;
  const tr = document.createElement('tr');
  [label, '', fmt(cur) + ' руб./мес.', '', fmt(tgt) + ' руб./мес.', (diff > 0 ? '+' : '') + fmt(diff) + ' руб./мес.'].forEach((text, i) => {
    const td = document.createElement('td');
    td.textContent = text;
    if (i === 5 && diff !== 0) td.className = diff > 0 ? 'pos' : 'neg';
    tr.appendChild(td);
  });
  return tr;
}

// Выводит список выбранных функций КЦ с кнопкой удаления
function renderKcChips() {
  const ul = $('kcChips');
  ul.replaceChildren();
  kcState.selected.forEach(idx => {
    ul.appendChild(makeChip(DATA.kc.rows[idx].parameter, () => {
      kcState.selected = kcState.selected.filter(x => x !== idx); renderKc();
    }));
  });
}

// Показывает или скрывает блок КЦ и строит его таблицу и итоги
function renderKc() {
  refreshSelects();
  // Блок КЦ виден только для ВАТС и при включённом флажке
  const on = product === 'vats' && $('addKc').checked;
  $('kcToggle').hidden = product !== 'vats';
  $('kcCard').hidden = !on;
  if (!on) return;
  const single = isSingle();
  $('kcTargetField').hidden = single;
  const cur = $('kcCurrent').value, tgt = single ? $('kcCurrent').value : $('kcTarget').value;
  $('kcColCur').textContent = (single ? 'Тариф: ' : 'Текущий: ') + TARIFF_LABELS[cur];
  $('kcColTgt').textContent = 'Новый: ' + TARIFF_LABELS[tgt];
  renderKcChips();
  // Таблица КЦ: выбранные функции и суммы КЦ
  const body = $('kcBody');
  body.replaceChildren();
  let curSum = 0, tgtSum = 0;
  [0, ...kcState.selected].forEach(idx => {
    const r = DATA.kc.rows[idx];
    const key = 'k' + idx;
    const curT = discountText(r.values[cur], discPct(key + 'c')), tgtT = discountText(r.values[tgt], discPct(key + 't'));
    const c = compare(curT, tgtT);
    const pc = parseValue(curT), pt = parseValue(tgtT);
    if (pc && pc.unit === 'руб./мес.') curSum += pc.num;
    if (pt && pt.unit === 'руб./мес.') tgtSum += pt.num;
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    first.textContent = show(r.parameter);
    tr.appendChild(first);
    tr.appendChild(discountCell(key + 'c', false));
    tr.appendChild(textCell(show(curT)));
    tr.appendChild(discountCell(key + 't', false));
    tr.appendChild(textCell(show(tgtT)));
    const diff = document.createElement('td');
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    body.appendChild(tr);
  });
  // Итоги КЦ и итог ВАТС + КЦ
  $('kcFoot').replaceChildren(
    kcTotalRow('Итого КЦ', curSum, tgtSum),
    kcTotalRow('Итого ВАТС + КЦ', mainTotals.cur + curSum, mainTotals.tgt + tgtSum)
  );
}

// Заполняет выбор тарифов КЦ, сбрасывает выбранные функции и перерисовывает блок
function kcInit() {
  $('kcCurrent').replaceChildren(...DATA.kc.tariffs.map(k => new Option(TARIFF_LABELS[k], k)));
  $('kcTarget').replaceChildren(...DATA.kc.tariffs.map(k => new Option(TARIFF_LABELS[k], k)));
  $('kcTarget').selectedIndex = Math.min(1, DATA.kc.tariffs.length - 1);
  kcState.selected = [];
  $('kcFeature').value = '';
  hideKcSuggest();
  renderKc();
}

// Подсказки для поля поиска функций КЦ
const hideKcSuggest = bindSuggest('kcFeature', 'kcSuggestList', () => featureRows('kc'), () => $('kcAdd').click());
// Показ или скрытие блока КЦ при изменении флажка
$('addKc').onchange = update;
$('kcCurrent').onchange = renderKc;
$('kcTarget').onchange = renderKc;
// Кнопка добавления функции КЦ в сравнение
$('kcAdd').onclick = () => addFeature('kcFeature', 'kc', kcState.selected, renderKc);

// Собственный выпадающий список: скрытый select хранит значение и шлёт change, видимая кнопка и список рисуются здесь
function customSelect(sel) {
  const box = document.createElement('div');
  box.className = 'csel';
  if (sel.parentNode) sel.parentNode.insertBefore(box, sel);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'csel-btn';
  const list = document.createElement('ul');
  list.className = 'csel-list';
  list.hidden = true;
  box.append(sel, btn, list);
  const refresh = () => {
    btn.textContent = sel.selectedIndex >= 0 ? sel.options[sel.selectedIndex].text : '';
    list.replaceChildren(...[...sel.options].map((o, i) => {
      const li = document.createElement('li');
      li.textContent = o.text;
      if (i === sel.selectedIndex) li.className = 'selected';
      li.onclick = () => {
        closeSelects();
        sel.selectedIndex = i;
        refresh();
        sel.dispatchEvent(new Event('change'));
      };
      return li;
    }));
  };
  btn.onclick = () => {
    const wasOpen = box.classList.contains('open');
    closeSelects();
    if (wasOpen) return;
    refresh();
    list.hidden = false;
    box.classList.add('open');
  };
  sel._refresh = refresh;
  refresh();
  return box;
}
// Закрывает все открытые списки
function closeSelects() {
  document.querySelectorAll('.csel').forEach(b => {
    b.classList.remove('open');
    b.querySelector('.csel-list').hidden = true;
  });
}
// Обновляет подписи и пункты всех собственных списков по текущим значениям select
function refreshSelects() {
  document.querySelectorAll('select').forEach(s => s._refresh && s._refresh());
}
document.addEventListener('click', e => { if (!e.target.closest('.csel')) closeSelects(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSelects(); });
document.querySelectorAll('select').forEach(s => customSelect(s));

// Первичная инициализация блоков ВАТС и КЦ при загрузке страницы
init();
kcInit();
