// Русские названия тарифов ВАТС и КЦ по их ключам
const TARIFF_LABELS = {
  basic: 'Базовая', extended: 'Расширенная', maximum: 'Максимальная',
  start: 'Старт', growth: 'Рост', perspective: 'Перспектива',
  optimum: 'Оптимум', profi: 'Профи', corporation: 'Корпорация'
};
// Данные тарифов ВАТС и КЦ: строки параметров и значения по каждому тарифу
const DATA = {"vats": {"tariffs":["basic","extended","maximum","start","growth","perspective"],"rows":[{"parameter":"Абонентская плата (фикс. часть лицензии)","values":{"basic":"1 600 руб./мес.","extended":"3 000 руб./мес.","maximum":"4 200 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Дополнительный профиль сотрудника","values":{"basic":"210 руб./мес.","extended":"200 руб./мес.","maximum":"190 руб./мес.","start":"450 руб./мес.","growth":"850 руб./мес.","perspective":"1600 руб./мес."}},{"parameter":"Количество каналов на номерах MANGO OFFICE","values":{"basic":"10","extended":"50","maximum":"100","start":"10 каналов","growth":"50 каналов","perspective":"100 каналов"}},{"parameter":"Автоподстановка номера при исходящих","values":{"basic":"—","extended":"✓","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Карусель номеров","values":{"basic":"—","extended":"0,49 руб./мин","maximum":"0,49 руб./мин","start":"—","growth":"—","perspective":"—"}},{"parameter":"Этикетка (брендирование исх. звонков)","values":{"basic":"0,32 руб./вызов","extended":"0,32 руб./вызов","maximum":"0,32 руб./вызов","start":"—","growth":"—","perspective":"—"}},{"parameter":"МАВ (массовые автовызовы)","values":{"basic":"0,32 руб./вызов","extended":"0,32 руб./вызов","maximum":"0,32 руб./вызов","start":"—","growth":"—","perspective":"—"}},{"parameter":"Голосовое приветствие и схема обработки","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Одноуровневое IVR","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Многоуровневое IVR (до 4 уровней)","values":{"basic":"—","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое управление","values":{"basic":"0,50 руб./обращение","extended":"0,50 руб./обращение","maximum":"0,50 руб./обращение","start":"—","growth":"—","perspective":"—"}},{"parameter":"Переадресация на «знакомого» сотрудника","values":{"basic":"500 руб./мес.","extended":"350 руб./мес.","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Переадресация по номеру звонящего","values":{"basic":"—","extended":"350 руб./мес.","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Автоперезвон (пропущенные группой / в IVR)","values":{"basic":"420 руб./мес.","extended":"420 руб./мес.","maximum":"420 руб./мес.","start":"+","growth":"+","perspective":"+"}},{"parameter":"Автодозвон из форм","values":{"basic":"2 000 руб./мес.","extended":"2 000 руб./мес.","maximum":"2 000 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Автоинформатор о времени до ответа / номере в очереди","values":{"basic":"—","extended":"250 руб./мес.","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Защита внутренних номеров паролем","values":{"basic":"—","extended":"✓","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Чёрный/белый список","values":{"basic":"90 руб./мес.","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Автосекретарь при недоступности","values":{"basic":"2,90 руб./день","extended":"2,90 руб./день","maximum":"2,90 руб./день","start":"+","growth":"+","perspective":"+"}},{"parameter":"Дозвон на все контакты одновременно / по очереди / только SIP","values":{"basic":"—","extended":"✓","maximum":"✓","start":"+ / — / —","growth":"+","perspective":"+"}},{"parameter":"Кол-во групп обзвона","values":{"basic":"15","extended":"без ограничений","maximum":"без ограничений","start":"1","growth":"5","perspective":"без ограничений"}},{"parameter":"Объединение в группы и удержание вызовов","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Последовательный / Случайный алгоритм","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Одновременно всем (свободным)","values":{"basic":"600 руб./мес.","extended":"600 руб./мес.","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Параллельный по приоритету / равномерный","values":{"basic":"—","extended":"400 руб./мес.","maximum":"✓ / 350 руб./мес.","start":"—","growth":"+","perspective":"+"}},{"parameter":"Пакет «Мониторинг»","values":{"basic":"600 руб./мес.","extended":"300 руб./мес.","maximum":"✓","start":"—","growth":"—","perspective":"+"}},{"parameter":"Запись всех разговоров и прослушивание онлайн","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Выборочная запись по правилам","values":{"basic":"—","extended":"✓","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Автоотправка записи на e-mail","values":{"basic":"100 руб./мес.","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Поминутная тарификация записи","values":{"basic":"0,8 руб./мин","extended":"0,3 руб./мин","maximum":"—","start":"—","growth":"—","perspective":"—"}},{"parameter":"Безлимитная запись разговоров","values":{"basic":"1 190 руб./мес.","extended":"800 руб./мес.","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоудаление и перезапись","values":{"basic":"1 250 руб./мес.","extended":"1 250 руб./мес.","maximum":"1 250 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Речевая аналитика: абонплата","values":{"basic":"1 100 руб./мес.","extended":"1 100 руб./мес.","maximum":"1 100 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Распознавание с тегированием","values":{"basic":"1,9 руб./мин","extended":"1,5 руб./мин","maximum":"1,25 руб./мин","start":"1,9 руб./мин.","growth":"1,5 руб./мин.","perspective":"1,25 руб./мин."}},{"parameter":"Смысловой анализ (ИИ-тегирование)","values":{"basic":"0,3 руб./тыс. симв.","extended":"0,3 руб./тыс. симв.","maximum":"0,3 руб./тыс. симв.","start":"—","growth":"—","perspective":"—"}},{"parameter":"ИИ-помощники","values":{"basic":"0,07 руб./тыс. симв.","extended":"0,07 руб./тыс. симв.","maximum":"0,07 руб./тыс. симв.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Голосовая почта (общая/персональная/групповая)","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоотправка голосовой почты на e-mail","values":{"basic":"100 руб./мес.","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Сообщения длительнее 1 мин","values":{"basic":"—","extended":"✓","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Распознавание голосовой почты","values":{"basic":"0,16 руб./сообщ.","extended":"0,16 руб./сообщ.","maximum":"0,16 руб./сообщ.","start":"+","growth":"+","perspective":"+"}},{"parameter":"Аудиоконференции: включено участников","values":{"basic":"3 чел.","extended":"3 чел.","maximum":"3 чел.","start":"—","growth":"—","perspective":"—"}},{"parameter":"1 доп. участник аудиоконференции","values":{"basic":"200 руб./мес.","extended":"100 руб./мес.","maximum":"50 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Виртуальные комнаты: 3 на 5 чел.","values":{"basic":"500 руб./мес.","extended":"500 руб./мес.","maximum":"500 руб./мес.","start":"+","growth":"—","perspective":"—"}},{"parameter":"Виртуальные комнаты: 10 на 15 чел.","values":{"basic":"1 000 руб./мес.","extended":"1 000 руб./мес.","maximum":"1 000 руб./мес.","start":"—","growth":"+","perspective":"—"}},{"parameter":"Виртуальные комнаты: 20 на 50 чел.","values":{"basic":"3 500 руб./мес.","extended":"3 500 руб./мес.","maximum":"3 500 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Видеозвонки (до 7 участников)","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Пакет 10 лицензий ВКС","values":{"basic":"2 000 руб./мес.","extended":"2 000 руб./мес.","maximum":"2 000 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 20 лицензий ВКС","values":{"basic":"3 700 руб./мес.","extended":"3 700 руб./мес.","maximum":"3 700 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 30 лицензий ВКС","values":{"basic":"5 100 руб./мес.","extended":"5 100 руб./мес.","maximum":"5 100 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 40 лицензий ВКС","values":{"basic":"6 400 руб./мес.","extended":"6 400 руб./мес.","maximum":"6 400 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 50 лицензий ВКС","values":{"basic":"7 500 руб./мес.","extended":"7 500 руб./мес.","maximum":"7 500 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 60 лицензий ВКС","values":{"basic":"8 400 руб./мес.","extended":"8 400 руб./мес.","maximum":"8 400 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 70 лицензий ВКС","values":{"basic":"9 100 руб./мес.","extended":"9 100 руб./мес.","maximum":"9 100 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 80 лицензий ВКС","values":{"basic":"9 600 руб./мес.","extended":"9 600 руб./мес.","maximum":"9 600 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 90 лицензий ВКС","values":{"basic":"9 900 руб./мес.","extended":"9 900 руб./мес.","maximum":"9 900 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Пакет 100 лицензий ВКС","values":{"basic":"10 000 руб./мес.","extended":"10 000 руб./мес.","maximum":"10 000 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Облачное хранилище","values":{"basic":"190 руб./мес.","extended":"190 руб./мес.","maximum":"190 руб./мес.","start":"1 Гб","growth":"10 Гб","perspective":"30 Гб"}},{"parameter":"Пакет Информационной безопасности","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"—","growth":"—","perspective":"—"}},{"parameter":"Запрет международных звонков и белый список регионов","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"3 базовые роли","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Роли сотрудников","values":{"basic":"750 руб./мес.","extended":"750 руб./мес.","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Группа отчётов «Продажи»","values":{"basic":"— (подкл. 500 руб.)","extended":"3 500 руб./мес.","maximum":"3 500 руб./мес.","start":"—","growth":"—","perspective":"+"}},{"parameter":"Группа отчётов «Обслуживание»","values":{"basic":"— (подкл. 500 руб.)","extended":"3 500 руб./мес.","maximum":"3 500 руб./мес.","start":"—","growth":"—","perspective":"+"}},{"parameter":"Коллтрекинг «ЛАЙМ» + Сквозная аналитика лайт","values":{"basic":"5 200 руб./мес.","extended":"5 200 руб./мес.","maximum":"—","start":"—","growth":"—","perspective":"—"}},{"parameter":"Коллтрекинг «МАНГО» + Сквозная аналитика","values":{"basic":"8 100 руб./мес.","extended":"8 100 руб./мес.","maximum":"8 100 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Коллтрекинг «ПАПАЙЯ» + Мультиканальная аналитика","values":{"basic":"—","extended":"—","maximum":"30 400 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Мультиканальная аналитика","values":{"basic":"2 400 руб./мес.","extended":"2 400 руб./мес.","maximum":"2 400 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Местные номера","values":{"basic":"2 000 руб./мес.","extended":"2 000 руб./мес.","maximum":"2 000 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Интеграция Битрикс24 / amoCRM","values":{"basic":"1 400 руб./мес.","extended":"4 200 руб./мес.","maximum":"7 700 руб./мес.","start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция YCLIENTS / retailCRM","values":{"basic":"1 000 руб./мес.","extended":"3 000 руб./мес.","maximum":"5 500 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Расширенная версия интеграции Битрикс24 / amoCRM","values":{"basic":"1 400 руб./мес.","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Расширенная версия retailCRM","values":{"basic":"1 000 руб./мес.","extended":"✓","maximum":"✓","start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция с G-Suite","values":{"basic":"1 400 руб./мес.","extended":"✓","maximum":"✓","start":"—","growth":"—","perspective":"—"}},{"parameter":"Прямая интеграция с IDENT","values":{"basic":"недоступно","extended":"4 200 руб./мес.","maximum":"7 700 руб./мес.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Интеграция через вебхуки","values":{"basic":"2 100 руб./мес.","extended":"2 100 руб./мес.","maximum":"2 100 руб./мес.","start":"—","growth":"—","perspective":"+"}},{"parameter":"1С: Управление торговлей","values":{"basic":"недоступно","extended":"1 000 руб./мес. за польз.","maximum":"1 000 руб./мес. за польз.","start":"—","growth":"+","perspective":"+"}},{"parameter":"ELMA365 / Creatio","values":{"basic":"недоступно","extended":"7 700 руб./год за польз.","maximum":"7 700 руб./год за польз.","start":"—","growth":"770 руб./год","perspective":"770 руб./год"}},{"parameter":"BPMSoft (с НДС)","values":{"basic":"недоступно","extended":"9 420 руб./год за польз.","maximum":"9 420 руб./год за польз.","start":"—","growth":"—","perspective":"—"}},{"parameter":"API-модуль «Транзакции»","values":{"basic":"2 990 руб./мес.","extended":"7 490 руб./мес.","maximum":"11 990 руб./мес.","start":"Подключений 5","growth":"Подключений 5","perspective":"Подключений 5 Транзакций 5000"}},{"parameter":"API-модуль «Номера»","values":{"basic":"6 990 руб./мес.","extended":"12 490 руб./мес.","maximum":"24 990 руб./мес.","start":"Подключений не","growth":"Подключений не","perspective":"Подключений не ограничено"}},{"parameter":"Автокопирование на внешний FTP / Яндекс.Диск","values":{"basic":"5 900 руб./мес.","extended":"5 900 руб./мес.","maximum":"5 900 руб./мес.","start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция с LDAP","values":{"basic":"5 000 руб./мес.","extended":"5 000 руб./мес.","maximum":"5 000 руб./мес.","start":"—","growth":"+","perspective":"+"}},{"parameter":"Адресная книга G Suite (Google)","values":{"basic":"695 руб./мес.","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"FMC, SMS/e-mail о балансе, отображение номера, BLF, пин-код, АОН, Call-back","values":{"basic":"✓","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое сообщение при входящем","values":{"basic":"50 руб./мес.","extended":"✓","maximum":"✓","start":"+","growth":"+","perspective":"+"}},{"parameter":"Красивый SIP-адрес","values":{"basic":"290 руб./шт.","extended":"290 руб./шт.","maximum":"290 руб./шт.","start":"—","growth":"—","perspective":"—"}},{"parameter":"Отраслевое имя отправителя SMS","values":{"basic":"300 руб./мес. (подкл. 100 руб.)","extended":"300 руб./мес.","maximum":"300 руб./мес.","start":"+","growth":"+","perspective":"+"}},{"parameter":"Индивидуальное имя отправителя SMS","values":{"basic":"11 000 руб./мес.","extended":"11 000 руб./мес.","maximum":"11 000 руб./мес.","start":"11 000","growth":"11 000","perspective":"11 000"}},{"parameter":"Пассивный SIP","values":{"basic":"200 руб./мес.","extended":"200 руб./мес.","maximum":"200 руб./мес.","start":"200 руб./мес.","growth":"200 руб./мес.","perspective":"200 руб./мес."}},{"parameter":"Активный SIP","values":{"basic":"480 руб./мес.","extended":"480 руб./мес.","maximum":"480 руб./мес.","start":"480 руб./мес.","growth":"480 руб./мес.","perspective":"480 руб./мес."}},{"parameter":"SIP-trunk (абонплата)","values":{"basic":"550 руб./мес.","extended":"550 руб./мес.","maximum":"550 руб./мес.","start":"550 руб./мес.","growth":"550 руб./мес.","perspective":"550 руб./мес."}},{"parameter":"VPN","values":{"basic":"—","extended":"5 000 руб./мес.","maximum":"5 000 руб./мес.","start":"—","growth":"—","perspective":"+"}},{"parameter":"Контакт-центр MANGO OFFICE","values":{"basic":"Обсуждается индивидуально","extended":"Обсуждается индивидуально","maximum":"Обсуждается индивидуально","start":"+","growth":"+","perspective":"+"}},{"parameter":"Абонентская плата за Виртуальную АТС","values":{"basic":"—","extended":"—","maximum":"—","start":"0 руб./мес.","growth":"0 руб./мес.","perspective":"0 руб./мес."}},{"parameter":"Включено профилей сотрудников","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"—","perspective":"—"}},{"parameter":"Возможность подключения дополнительных профилей сотрудников","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Максимальное количество подключаемых номеров MANGO OFFICE","values":{"basic":"—","extended":"—","maximum":"—","start":"5 номеров","growth":"30 номеров","perspective":"без ограничений"}},{"parameter":"Количество подключаемых номеров, сверх которого взимается дополнительная плата","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"10 номеров","perspective":"без ограничений"}},{"parameter":"Дополнительные номера сверх лимита","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Стоимость дополнительного номера — 150 руб./мес.","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Возможность подключения номеров других операторов по sip","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Бесплатный прием входящих звонков в Mango Talker","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Определение номера звонящего, даже если он скрыт (СуперАОН)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на голосовую почту","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на сотрудника","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на группу","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на внешний номер","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность создавать неограниченное количество схем обработки вызовов","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Ограничение на количество созданных схем обработки вызовов","values":{"basic":"—","extended":"—","maximum":"—","start":"без ограничений","growth":"без ограничений","perspective":"без ограничений"}},{"parameter":"Мелодия вместо гудков (40 мелодий на выбор)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность загружать неограниченное количество собственных мелодий и голосовых сообщений","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Ограничение на количество загруженных собственных мелодий и голосовых сообщений","values":{"basic":"—","extended":"—","maximum":"—","start":"без ограничений","growth":"без ограничений","perspective":"без ограничений"}},{"parameter":"Возможность донабора номера сотрудника из IVR","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое распознавание цифр (пункты голосового меню и внутренние номера сотрудников)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость услуги — 0,16 руб. / целевой звонок","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Голосовое распознавание ФИО и должностей сотрудников","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость услуги — 0,16 руб. / целевой звонок","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Голосовое распознавание тематики обращений, интеллектуальная переадресация звонков","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость услуги — 0,16 руб. / целевой звонок","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Возможность совершать бесплатные внутренние звонки в Mango Talker","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность совершать внутренние звонки","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка короткого номера для каждого абонента","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка действий при недоступности абонента","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность настроить время ожидания ответа","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность задать расписание использования контактов","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Абонентская плата — 2,90 руб./ день","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Дозвон на основной контакт сотрудника","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка короткого номера для каждой группы","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Перевод вызова на группу (вручную)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Удержание вызовов в очереди","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Не направлять звонки на не ответившего оператора","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"\"Кто меньше ответил\"","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"—","perspective":"+"}},{"parameter":"Наименьшее время разговора","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"—","perspective":"+"}},{"parameter":"Распределение входящих звонков в зависимости от региона звонящего","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатная безлимитная запись звонков в Mango Talker","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Прослушивание записей онлайн в Личном кабинете","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость услуги — 0,16 руб. / сообщение","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Прием факса (вручную)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Отправка факса (вручную, через веб-интерфейс)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Прием факса (автоматический, с распознаванием)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоматическая отправка файла на e-mail","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Факс-рассылки (на любое число номеров)","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатный прием звонков от клиентов на компьютере или смартфоне","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Телефонная книга компании","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Запись и прослушивание звонков","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Групповые и индивидуальные чаты, передача файлов","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Видеозвонки и видеоконференции","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность собирать конференции","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Максимальное число участников во всех конференциях","values":{"basic":"—","extended":"—","maximum":"—","start":"20 человек","growth":"50 человек","perspective":"100 человек"}},{"parameter":"Максимальное число участников в одной конференции","values":{"basic":"—","extended":"—","maximum":"—","start":"8 человек","growth":"8 человек","perspective":"32 человека"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"—","perspective":"+"}},{"parameter":"Возможность собирать конференции","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Максимальное число участников во всех видеоконференциях","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"50","perspective":"100"}},{"parameter":"Возможность записи видеоконференций","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"(включено бесплатно / платное увеличение размера)","values":{"basic":"—","extended":"—","maximum":"—","start":"490 Руб./мес. за 5 Гб","growth":"490 Руб./мес. за 5 Гб","perspective":"490 Руб./мес. за 5 Гб"}},{"parameter":"Бесплатная круглосуточная техническая поддержка онлайн через систему обработки заявок","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Бесплатная круглосуточная техническая поддержка онлайн через систему чата в реальном времени","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Бесплатная круглосуточная техническая поддержка по телефону","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Персональный менеджер","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Отчет о полученных звонках","values":{"basic":"—","extended":"—","maximum":"—","start":"детализация до сотрудников","growth":"детализация до групп","perspective":"детализация до и внутри групп"}},{"parameter":"Отчет о пропущенных звонках","values":{"basic":"—","extended":"—","maximum":"—","start":"детализация до сотрудников","growth":"детализация до групп","perspective":"детализация до и внутри групп"}},{"parameter":"Интеграция через API-конструктор","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"—","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция через партнера с более чем 35 системами (1С, MS Excel и другие)","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость услуги – 6000 руб./мес","values":{"basic":"—","extended":"—","maximum":"—","start":"","growth":"","perspective":""}},{"parameter":"Звонки через номер доступа","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Звонки с помощью Call-back («Заказ звонка»)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Бухгалтерские выписки и документы","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность использовать ЭДО (электронный документооборот)","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Детализация расходов по продуктам","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Детализация расходов на связь","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Звонок с сайта по внешней sip-линии","values":{"basic":"—","extended":"—","maximum":"—","start":"950 руб./мес.","growth":"950 руб./мес.","perspective":"950 руб./мес."}},{"parameter":"Подключение услуги","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}},{"parameter":"Расшифровки распознанных разговоров","values":{"basic":"—","extended":"—","maximum":"—","start":"—","growth":"+","perspective":"+"}},{"parameter":"Возможность подключения Коллтрекинга по действующей тарифной сетке","values":{"basic":"—","extended":"—","maximum":"—","start":"+","growth":"+","perspective":"+"}}]}, "kc": {"tariffs": ["start", "optimum", "profi", "corporation"], "rows": [{"parameter": "Абонентская плата (фикс. часть лицензии - включено 3 сотрудника)", "values": {"start": "4 500 руб./мес.", "optimum": "6 900 руб./мес.", "profi": "10 100 руб./мес.", "corporation": "по запросу"}}, {"parameter": "Доп.лицензия", "values": {"start": "1 500 руб./мес.", "optimum": "2 300 руб./мес.", "profi": "3 400 руб./мес.", "corporation": "по запросу"}}, {"parameter": "Омниканальные коммуникации (звонки, чаты, видеосвязь)", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Мониторинг очереди входящих обращений", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Статусы активности и занятость операторов", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Базовая аналитика по обращениям", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёты «Контроль сотрудников» / «Карточка рабочего дня» / «Рабочее время»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Суфлирование, подключение к разговорам, перехват", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Внешний справочник абонентов, обратные звонки, «История вызовов»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Пропущенные звонки» (новое)", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Обслуживание входящих вызовов»", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Классификация и обработка вызовов по тематикам", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Геймификация, задачи, база знаний", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Расширенная аналитика по обращениям и группам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Панель мониторинга", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Показатели производительности сотрудников»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «Показатели производительности групп»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отчёт «История работы операторов»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Пользовательские статусы", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Отложенный звонок", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Контроль перезвонов по пропущенным звонкам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Дашборд", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Защита номеров", "values": {"start": "1 500 руб./мес.", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Чат", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Видеоконференции", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Сделки", "values": {"start": "—", "optimum": "—", "profi": "✓", "corporation": "✓"}}, {"parameter": "Кол-во пользовательских полей в сделках", "values": {"start": "—", "optimum": "—", "profi": "20", "corporation": "20"}}, {"parameter": "Лимит на количество сделок", "values": {"start": "—", "optimum": "—", "profi": "без ограничений", "corporation": "без ограничений"}}, {"parameter": "Дисковое хранилище", "values": {"start": "—", "optimum": "—", "profi": "10 ГБ", "corporation": "10 ГБ"}}, {"parameter": "Исходящий обзвон роботом или операторами", "values": {"start": "1 кампания до 100 контактов/мес.", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автодозвон по новым заявкам/лидам", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Повторение попыток дозвона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Перевод вызова на оператора при обзвоне роботом", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "АнтиРобот (определение автоответчиков)", "values": {"start": "—", "optimum": "20 коп./вызов", "profi": "20 коп./вызов", "corporation": "20 коп./вызов"}}, {"parameter": "Аналитика по запущенному обзвону", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автоотправка сообщений при недозвоне", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Интеграция по API для загрузки баз и запуска на прозвон", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Предиктивный режим обзвона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Проверка на дубли", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Перебор номеров", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Загрузка базы с несколькими номерами одного клиента", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Исходящий обзвон PRO", "values": {"start": "—", "optimum": "20 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Определение региона клиента", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Автоподстановка номера по коду региона", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Минута разговора через SIP-транк без номеров Mango office", "values": {"start": "—", "optimum": "0,1 руб./мин", "profi": "0,1 руб./мин", "corporation": "0,1 руб./мин"}}, {"parameter": "Подключение 1 канала каждого типа текстовых коммуникаций", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Расширенная версия «Манго Диалоги»", "values": {"start": "5 300 руб./мес.", "optimum": "5 300 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Авито Работа", "values": {"start": "10 000 руб./мес.", "optimum": "10 000 руб./мес.", "profi": "10 000 руб./мес.", "corporation": "10 000 руб./мес."}}, {"parameter": "Мессенджер MAX", "values": {"start": "4 000 руб./мес.", "optimum": "4 000 руб./мес.", "profi": "4 000 руб./мес.", "corporation": "4 000 руб./мес."}}, {"parameter": "Массовые текстовые рассылки с отпиской", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "WhatsApp: подключение бизнес-аккаунта (с НДС)", "values": {"start": "8 000 руб./разово", "optimum": "8 000 руб./разово", "profi": "8 000 руб./разово", "corporation": "8 000 руб./разово"}}, {"parameter": "WhatsApp «1 000 контактов»", "values": {"start": "7 800 руб./мес.", "optimum": "7 800 руб./мес.", "profi": "7 800 руб./мес.", "corporation": "7 800 руб./мес."}}, {"parameter": "WhatsApp «2 000 контактов»", "values": {"start": "12 000 руб./мес.", "optimum": "12 000 руб./мес.", "profi": "12 000 руб./мес.", "corporation": "12 000 руб./мес."}}, {"parameter": "WhatsApp «5 000 контактов»", "values": {"start": "24 000 руб./мес.", "optimum": "24 000 руб./мес.", "profi": "24 000 руб./мес.", "corporation": "24 000 руб./мес."}}, {"parameter": "WhatsApp «10 000 контактов»", "values": {"start": "36 000 руб./мес.", "optimum": "36 000 руб./мес.", "profi": "36 000 руб./мес.", "corporation": "36 000 руб./мес."}}, {"parameter": "WhatsApp «Безлимитный»", "values": {"start": "48 000 руб./мес.", "optimum": "48 000 руб./мес.", "profi": "48 000 руб./мес.", "corporation": "48 000 руб./мес."}}, {"parameter": "WhatsApp: доп. контакт свыше 1 000", "values": {"start": "15,1 руб./шт.", "optimum": "15,1 руб./шт.", "profi": "15,1 руб./шт.", "corporation": "15,1 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 2 000", "values": {"start": "12,6 руб./шт.", "optimum": "12,6 руб./шт.", "profi": "12,6 руб./шт.", "corporation": "12,6 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 5 000", "values": {"start": "10,8 руб./шт.", "optimum": "10,8 руб./шт.", "profi": "10,8 руб./шт.", "corporation": "10,8 руб./шт."}}, {"parameter": "WhatsApp: доп. контакт свыше 10 000", "values": {"start": "8,7 руб./шт.", "optimum": "8,7 руб./шт.", "profi": "8,7 руб./шт.", "corporation": "8,7 руб./шт."}}, {"parameter": "Скрипты разговоров", "values": {"start": "4 000 руб./мес.", "optimum": "4 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Мотивация сотрудников (Wallboard)", "values": {"start": "2 600 руб./мес.", "optimum": "2 600 руб./мес.", "profi": "2 600 руб./мес.", "corporation": "2 600 руб./мес."}}, {"parameter": "WFM «Базовый» на 10 лицензий", "values": {"start": "13 000 руб./мес.", "optimum": "13 000 руб./мес.", "profi": "13 000 руб./мес.", "corporation": "13 000 руб./мес."}}, {"parameter": "WFM «Расширенный» на 25 лицензий", "values": {"start": "52 000 руб./мес.", "optimum": "52 000 руб./мес.", "profi": "52 000 руб./мес.", "corporation": "52 000 руб./мес."}}, {"parameter": "Демонстрация информации об интересах клиента", "values": {"start": "2 000 руб./мес.", "optimum": "2 000 руб./мес.", "profi": "—", "corporation": "—"}}, {"parameter": "Модуль «Контроль качества»", "values": {"start": "2 000 руб./мес.", "optimum": "2 000 руб./мес.", "profi": "2 000 руб./мес.", "corporation": "2 000 руб./мес."}}, {"parameter": "Оценка разговоров по бланкам с апелляцией", "values": {"start": "2 300 руб./мес.", "optimum": "2 300 руб./мес.", "profi": "2 300 руб./мес.", "corporation": "2 300 руб./мес."}}, {"parameter": "Вопросы для постзвонковой оценки качества", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Уведомления о постзвонковых оценках", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Отчёт «Контроль контролёров»", "values": {"start": "—", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Запись экрана за 1 лицензию", "values": {"start": "—", "optimum": "800 руб./мес.", "profi": "800 руб./мес.", "corporation": "800 руб./мес."}}, {"parameter": "Модуль «Голосовые роботы»", "values": {"start": "4,5 руб./мин", "optimum": "4,5 руб./мин", "profi": "4,5 руб./мин", "corporation": "4,5 руб./мин"}}, {"parameter": "Многоканальный голосовой робот", "values": {"start": "1 000 руб./мес.", "optimum": "1 000 руб./мес.", "profi": "1 000 руб./мес.", "corporation": "1 000 руб./мес."}}, {"parameter": "Премиальные голоса для роботов", "values": {"start": "✓", "optimum": "✓", "profi": "✓", "corporation": "✓"}}, {"parameter": "Модуль «Чат-боты»", "values": {"start": "3 500 руб./мес.", "optimum": "3 500 руб./мес.", "profi": "3 500 руб./мес.", "corporation": "3 500 руб./мес."}}, {"parameter": "Открытое API", "values": {"start": "8 000 руб./мес.", "optimum": "8 000 руб./мес.", "profi": "✓", "corporation": "✓"}}, {"parameter": "Робот-администратор", "values": {"start": "10 000 руб./мес.", "optimum": "10 000 руб./мес.", "profi": "10 000 руб./мес.", "corporation": "10 000 руб./мес."}}, {"parameter": "Генерация и распознавание речи", "values": {"start": "5 000 руб./мес.", "optimum": "5 000 руб./мес.", "profi": "5 000 руб./мес.", "corporation": "5 000 руб./мес."}}, {"parameter": "Конструктор отчётов", "values": {"start": "—", "optimum": "26 000 руб./мес.", "profi": "26 000 руб./мес.", "corporation": "26 000 руб./мес."}}, {"parameter": "Обсуждается индивидуально", "values": {"start": "персональный менеджер, кредитная система, скидка >100 сотрудников", "optimum": "то же", "profi": "то же", "corporation": "то же"}// Данные тарифов ВАТС2 (Старт, Рост, Перспектива)DATA.vats2 = {"tariffs":["start","growth","perspective"],"rows":[{"parameter":"Абонентская плата за Виртуальную АТС","values":{"start":"0 руб./мес.","growth":"0 руб./мес.","perspective":"0 руб./мес."}},{"parameter":"Включено профилей сотрудников","values":{"start":"—","growth":"—","perspective":"—"}},{"parameter":"Возможность подключения дополнительных профилей сотрудников","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость одного профиля сотрудника (стоимость одной лицензии)","values":{"start":"450 руб./мес.","growth":"850 руб./мес.","perspective":"1600 руб./мес."}},{"parameter":"Количество каналов на номерах MANGO OFFICE","values":{"start":"10 каналов","growth":"50 каналов","perspective":"100 каналов"}},{"parameter":"Максимальное количество подключаемых номеров MANGO OFFICE","values":{"start":"5 номеров","growth":"30 номеров","perspective":"без ограничений"}},{"parameter":"Количество подключаемых номеров, сверх которого взимается дополнительная плата","values":{"start":"—","growth":"10 номеров","perspective":"без ограничений"}},{"parameter":"Дополнительные номера сверх лимита","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Возможность подключения номеров других операторов по sip","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоподстановка номера региона при исходящих звонках","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатный прием входящих звонков в Mango Talker","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Определение номера звонящего, даже если он скрыт (СуперАОН)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на голосовую почту","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на сотрудника","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на группу","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонка на внешний номер","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое приветствие и настройка схемы обработки звонка","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Одноуровневое голосовое меню (IVR)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Многоуровневое голосовое меню (IVR)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность создавать неограниченное количество схем обработки вызовов","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Ограничение на количество созданных схем обработки вызовов","values":{"start":"без ограничений","growth":"без ограничений","perspective":"без ограничений"}},{"parameter":"Мелодия вместо гудков (40 мелодий на выбор)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность загружать неограниченное количество собственных мелодий и голосовых сообщений","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Ограничение на количество загруженных собственных мелодий и голосовых сообщений","values":{"start":"без ограничений","growth":"без ограничений","perspective":"без ограничений"}},{"parameter":"Возможность донабора номера сотрудника из IVR","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация звонков на «знакомого» сотрудника","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Автоматический перезвон по звонкам, пропущенным группой","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоматический перезвон по звонкам, пропущенным в IVR","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Переадресация по номеру звонящего","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Автоинформатор о времени до ответа оператора","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Автоинформатор о номере в очереди","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Защита внутренних номеров паролем","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Черный/белый список","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое распознавание цифр (пункты голосового меню и внутренние номера сотрудников)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое распознавание ФИО и должностей сотрудников","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое распознавание тематики обращений, интеллектуальная переадресация звонков","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность совершать бесплатные внутренние звонки в Mango Talker","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность совершать внутренние звонки","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка короткого номера для каждого абонента","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка действий при недоступности абонента","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность настроить время ожидания ответа","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность задать расписание использования контактов","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автосекретарь при недоступности сотрудника","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Дозвон на основной контакт сотрудника","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Дозвон на все контакты сотрудника по очереди","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Дозвон на все контакты сотрудника одновременно","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Дозвон только на SIP-учетные записи сотрудника","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Возможность объединять сотрудников в группы обзвона","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Ограничение на количество групп","values":{"start":"1","growth":"5","perspective":"без ограничений"}},{"parameter":"Настройка короткого номера для каждой группы","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Перевод вызова на группу (вручную)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Удержание вызовов в очереди","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Не направлять звонки на не ответившего оператора","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Случайный выбор","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Одновременно всем свободным","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Равномерный (наиболее свободному)","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Параллельный по приоритету (по квалификации)","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"\"Кто меньше ответил\"","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Наименьшее время разговора","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Распределение входящих звонков в зависимости от региона звонящего","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатная безлимитная запись звонков в Mango Talker","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Записывать все разговоры подряд","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Записывать разговоры выборочно, по правилам","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Прослушивание записей онлайн в Личном кабинете","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоматическая отправка файла на e-mail","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Тарификация поминутная","values":{"start":"—","growth":"—","perspective":"—"}},{"parameter":"Тарификация безлимитная","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовая почта: общая","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовая почта: персональная","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовая почта: групповая","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Прослушивание записей онлайн в Личном кабинете","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоматическая отправка файла на e-mail","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность записи сообщений длительностью больше 1 минуты","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Распознавание сообщений голосовой почты и отправка их в виде текста на e-mail","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Прием факса (вручную)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Отправка факса (вручную, через веб-интерфейс)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Прием факса (автоматический, с распознаванием)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Автоматическая отправка файла на e-mail","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Факс-рассылки (на любое число номеров)","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатный прием звонков от клиентов на компьютере или смартфоне","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Телефонная книга компании","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Запись и прослушивание звонков","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Групповые и индивидуальные чаты, передача файлов","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Видеозвонки и видеоконференции","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность собирать конференции","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Максимальное число участников во всех конференциях","values":{"start":"20 человек","growth":"50 человек","perspective":"100 человек"}},{"parameter":"Максимальное число участников в одной конференции","values":{"start":"8 человек","growth":"8 человек","perspective":"32 человека"}},{"parameter":"3 комнаты на 5 человек","values":{"start":"+","growth":"—","perspective":"—"}},{"parameter":"10 комнат на 15 человек","values":{"start":"—","growth":"+","perspective":"—"}},{"parameter":"Подключение телефонных номеров","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Возможность проводить видеозвонки 1 на 1","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность собирать конференции","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Максимальное число участников во всех видеоконференциях","values":{"start":"—","growth":"50","perspective":"100"}},{"parameter":"Возможность записи видеоконференций","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"(включено бесплатно / платное увеличение размера)","values":{"start":"490 Руб./мес. за 5 Гб","growth":"490 Руб./мес. за 5 Гб","perspective":"490 Руб./мес. за 5 Гб"}},{"parameter":"Возможность запрета международных звонков","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"«Белый» список направлений (регионов) для звонков","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"«Белый» список IP-адресов для авторизации по SIP","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"3 базовые роли (Сотрудник, Администратор, Бухгалтер)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"4 дополнительных роли, редактирование и возможность создания новых ролей","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Возможность настройки ролей","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Бесплатная круглосуточная техническая поддержка онлайн через систему обработки заявок","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Бесплатная круглосуточная техническая поддержка онлайн через систему чата в реальном времени","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Бесплатная круглосуточная техническая поддержка по телефону","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Персональный менеджер","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Отчет о полученных звонках","values":{"start":"детализация до сотрудников","growth":"детализация до групп","perspective":"детализация до и внутри групп"}},{"parameter":"Отчет о пропущенных звонках","values":{"start":"детализация до сотрудников","growth":"детализация до групп","perspective":"детализация до и внутри групп"}},{"parameter":"Пакет «Мониторинг» (включает отчеты: «Эффективность","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Бизнеса-аналитика. Группа отчетов «Продажи»","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Бизнеса-аналитика. Группа отчетов «Обслуживание»","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Интеграция через API-конструктор","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Интеграция через вебхуки","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Прямая интеграция с amoCRM","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Расширенные возможности интеграции с amoCRM","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Прямая интеграция с Битрикс24","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Расширенные возможности интеграции с Битрикс24","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Расширенные возможности интеграции с retailCRM","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция с 1С","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция через партнера с более чем 35 системами (1С, MS Excel и другие)","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Сервис автоматического копирования записей разговоров на внешний ftp","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция с LDAP","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Интеграция адресной книгой G Suite (Google)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Интеграция с Creatio","values":{"start":"—","growth":"770 руб./год","perspective":"770 руб./год"}},{"parameter":"API-модуль интеграции, тариф «Транзакции»","values":{"start":"Подключений 5","growth":"Подключений 5","perspective":"Подключений 5 Транзакций 5000"}},{"parameter":"API-модуль интеграции, тариф «Номера»","values":{"start":"Подключений не","growth":"Подключений не","perspective":"Подключений не ограничено"}},{"parameter":"Интеграция с мобильной связью (FMC)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"SMS, e-mail оповещения о критическом остатке на счете","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Настройка отображения номера звонящего","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Голосовое сообщение при входящем звонке","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение телефонных номеров","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Отраслевое имя отправителя в SMS","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Индивидуальное имя отправителя в SMS","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Авторизация сотрудников по пин-коду","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Авторизация сотрудников по АОН","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Звонки через номер доступа","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Звонки с помощью Call-back («Заказ звонка»)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"VPN","values":{"start":"—","growth":"—","perspective":"+"}},{"parameter":"Возможность подключения Контакт-центра MANGO OFFICE","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Бухгалтерские выписки и документы","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Возможность использовать ЭДО (электронный документооборот)","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Детализация расходов по продуктам","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Детализация расходов на связь","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Подключение внешний sip-линии","values":{"start":"200 руб./мес.","growth":"200 руб./мес.","perspective":"200 руб./мес."}},{"parameter":"Подключение номера другого оператора по внешней sip-линии (пассивный режим, только для приема звонков)","values":{"start":"200 руб./мес.","growth":"200 руб./мес.","perspective":"200 руб./мес."}},{"parameter":"Подключение номера другого оператора по внешней sip-линии (активный режим, для приема и совершения звонков)","values":{"start":"480 руб./мес.","growth":"480 руб./мес.","perspective":"480 руб./мес."}},{"parameter":"SIP-trunk","values":{"start":"550 руб./мес.","growth":"550 руб./мес.","perspective":"550 руб./мес."}},{"parameter":"Звонок с сайта по внешней sip-линии","values":{"start":"950 руб./мес.","growth":"950 руб./мес.","perspective":"950 руб./мес."}},{"parameter":"Подключение услуги","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"Стоимость распознавания","values":{"start":"1,9 руб./мин.","growth":"1,5 руб./мин.","perspective":"1,25 руб./мин."}},{"parameter":"Расшифровки распознанных разговоров","values":{"start":"—","growth":"+","perspective":"+"}},{"parameter":"Возможность подключения Коллтрекинга по действующей тарифной сетке","values":{"start":"+","growth":"+","perspective":"+"}},{"parameter":"В рамках тарифа “Расширенные аналитика и возможности”","values":{"start":"","growth":"","perspective":"+"}}]};

}]}};

// Функции, которые выбраны по умолчанию при открытии ВАТС
const DEFAULT_FEATURES = [
  'Безлимитная запись разговоров',
  'Интеграция Битрикс24 / amoCRM',
  'Облачное хранилище'
];

// Услуги, которые выбраны по умолчанию при открытии КЦ
const DEFAULT_KC_FEATURES = ['Доп.лицензия'];

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

// Лимит номеров, номера без доплаты и плата за доп. номер (строки «Максимальное количество» и «сверх которого взимается плата» в vats.sql)
const NUMBER_RULES = {
  basic: { limit: 3, included: 3, fee: 0 },
  extended: { limit: 15, included: 15, fee: 0 },
  maximum: { limit: Infinity, included: 15, fee: 150 },
  start: { limit: 5, included: 5, fee: 0 },
  growth: { limit: 30, included: 10, fee: 150 },
  perspective: { limit: Infinity, included: Infinity, fee: 0 }
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

// Число для сравнения: отсутствие или включение в тариф (—, +, ✓) считается как 0 с единицей другого значения
function numericValue(v, other) {
  if (v === '+' || v === '✓' || isUnavailable(v)) return { num: 0, unit: parseValue(other)?.unit ?? '' };
  return parseValue(v);
}

// Возвращает текст разницы и класс: pos (рост суммы, красный), neg (снижение, зелёный)
function compare(a, b) {
  if (a === b) return { text: 'без изменений', cls: '' };
  const pa = numericValue(a, b), pb = numericValue(b, a);
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
  const total = NUMBER_TYPES.reduce((s, t) => s + numberQty(t), 0);
  if (!rule) return { overFee: 0, exceeded: false, total, limit: Infinity };
  const paid = Math.max(0, Math.min(total, rule.limit) - rule.included);
  return { overFee: paid * rule.fee, exceeded: total > rule.limit, total, limit: rule.limit };
}

// Сколько номеров типа key платных (сверх включенных) при выбранном тарифе
function feeQty(tariff, key) {
  const rule = NUMBER_RULES[tariff];
  if (!rule) return 0;
  const total = NUMBER_TYPES.reduce((s, t) => s + numberQty(t), 0);
  const cap = Math.min(total, rule.limit);
  const idx = NUMBER_TYPES.findIndex(t => t.id === key);
  const before = NUMBER_TYPES.slice(0, idx).reduce((s, t) => s + numberQty(t), 0);
  return Math.max(0, Math.min(before + numberQty(NUMBER_TYPES[idx]), cap) - Math.max(before, rule.included));
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
    const isKcLicense = product === 'kc' && r.parameter === 'Доп.лицензия';
    const licenseValue = value => {
      const parsed = isKcLicense && parseValue(value);
      return parsed ? fmt(parsed.num * qtys.kcLicense) + ' ' + parsed.unit : value;
    };
    // Битрикс24 / amoCRM: скидка текущего не применяется, если текущий тариф базовый (то же для нового)
    const isBitrix = /Битрикс24/.test(r.parameter);
    const noDiscC = isBitrix && cur === 'basic', noDiscT = isBitrix && tgt === 'basic';
    const pctC = noDiscC ? 0 : discPct(key + 'c'), pctT = noDiscT ? 0 : discPct(key + 't');
    const curT = discountText(licenseValue(rowValue(r, cur)), pctC), tgtT = discountText(licenseValue(rowValue(r, tgt)), pctT);
    const c = compare(curT, tgtT);
    const pc = parseValue(curT), pt = parseValue(tgtT);
    if (pc && pc.unit === 'руб./мес.') curSum += pc.num;
    if (pt && pt.unit === 'руб./мес.') tgtSum += pt.num;
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    first.textContent = show(isStorage(r) ? 'Облачное хранилище' : r.parameter);
    if (isStorage(r)) first.appendChild(storageSelect());
    if (r.parameter === PROFILE_PARAM) first.appendChild(profileQtyInput());
    if (isKcLicense) {
      const input = document.createElement('input');
      input.className = 'qty';
      input.type = 'text';
      input.inputMode = 'numeric';
      input.id = 'qty-kc-license';
      input.setAttribute('aria-label', 'Количество дополнительных лицензий');
      input.value = qtys.kcLicense;
      input.oninput = e => {
        e.target.value = e.target.value.replace(/\D/g, '');
        qtys.kcLicense = Math.floor(Number(e.target.value) || 0);
        update();
        const again = $('qty-kc-license');
        again.focus();
        again.setSelectionRange(again.value.length, again.value.length);
      };
      first.append(' × ', input);
    }
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
    // Мобильные номера: скидка не применяется
    const kC = (key === 'nMobile') ? 1 : (1 - discPct('x' + key + 'c') / 100);
    const kT = (key === 'nMobile') ? 1 : (1 - discPct('x' + key + 't') / 100);
    const baseCur = isProfile ? qtys.profiles * profilePrice(cur) : isDialog ? dialogCost() : t.monthly * qtys[key];
    const baseTgt = isProfile ? qtys.profiles * profilePrice(tgt) : isDialog ? dialogCost() : t.monthly * qtys[key];
    // Надбавка за номера сверх лимита добавляется после скидки
    const surCur = isProfile || isDialog ? 0 : feeQty(cur, key) * (NUMBER_RULES[cur]?.fee || 0);
    const surTgt = isProfile || isDialog ? 0 : feeQty(tgt, key) * (NUMBER_RULES[tgt]?.fee || 0);
    const dCur = round2(baseCur * kC) + surCur;
    const dTgt = round2(baseTgt * kT) + surTgt;
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
      qtys[key] = Math.floor(Number(e.target.value) || 0);
      update();
      const again = $('qty-' + key);
      again.focus();
      again.setSelectionRange(again.value.length, again.value.length);
    };
    first.append(item.label + (isDialog ? ' и доп. каналы: ' : ' × '), input);
    const fee = NUMBER_RULES[cur]?.fee || NUMBER_RULES[tgt]?.fee || 0;
    if (!isProfile && !isDialog && fee && (feeQty(cur, key) || feeQty(tgt, key))) {
      first.append(document.createElement('br'), `сверх лимита ${fmt(t.monthly + fee)} руб./мес. за номер`);
    }
    tr.appendChild(first);
    tr.appendChild(discountCell('x' + key + 'c', key === 'nMobile'));
    tr.appendChild(textCell(curText));
    tr.appendChild(discountCell('x' + key + 't', key === 'nMobile'));
    tr.appendChild(textCell(tgtText));
    const c = compare(curText, tgtText);
    const diff = document.createElement('td');
    diff.textContent = c.text;
    diff.className = c.cls;
    tr.appendChild(diff);
    tr.appendChild(onceTd(isProfile ? '' : fmt(onceAmt) + ' руб.'));
    body.appendChild(tr);
  });

  curSum += extraCur;
  tgtSum += extraTgt;
  // Предупреждение о превышении включённых номеров и лимита тарифа
  $('numbersWarn').textContent = [...new Set([cur, tgt])]
    .map(k => {
      const n = numbersFor(k);
      const rule = NUMBER_RULES[k];
      if (n.exceeded) return `На тарифе «${TARIFF_LABELS[k]}» допускается не более ${n.limit} номеров (сейчас ${n.total}).`;
      if (rule && n.total > rule.included && n.overFee > 0) return `На тарифе «${TARIFF_LABELS[k]}» включено ${rule.included} номеров; сверх них каждый номер стоит +${rule.fee} руб./мес. (сейчас ${n.total}, доплата ${fmt(n.overFee)} руб./мес.).`;
      return '';
    })
    .filter(Boolean)
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
    items = rowsFn().filter(r => r.text.toLowerCase().includes(q));
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
    $(inputId).value = '';
    rerender();
    return;
  }
  // Пункт номеров или профиля добавляется в extras, а не в строки DATA
  const extra = prod === 'vats' ? EXTRA_ITEMS.find(x => x.text.toLowerCase() === text) : null;
  if (extra) {
    if (!extras.includes(extra.key)) extras.push(extra.key);
    $(inputId).value = '';
    rerender();
    return;
  }
  const idx = DATA[prod].rows.findIndex((r, i) => i > 0 && r.parameter.toLowerCase() === text);
  if (idx < 0) return;
  if (!list.includes(idx)) {
    list.push(idx);
    // Для КЦ при добавлении "Доп.лицензия" устанавливаем количество по умолчанию на 1
    if (prod === 'kc' && DATA[prod].rows[idx].parameter === 'Доп.лицензия') {
      if (list === kcState.selected) kcState.qty[idx] = 1;
      else qtys.kcLicense = 1;
    }
    $(inputId).value = '';
  }
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
  selected = d.rows.map((r, i) => i).filter(i => i > 0 && (product === 'kc' ? DEFAULT_KC_FEATURES : DEFAULT_FEATURES).includes(d.rows[i].parameter));
  qtys.kcLicense = 1;
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
const kcState = { selected: [], licenseQty: 0 };
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
// Значение строки для тарифа; для хранилища с ценой (руб.) - цена выбранного объёма
function rowValue(r, tariff) {
  if (r.parameter === PROFILE_PARAM && !isUnavailable(r.values[tariff])) return fmt(round2(profilePrice(tariff) * qtys.profiles)) + ' руб./мес.';
  if (!isStorage(r) || !/руб/.test(r.values[tariff])) return r.values[tariff];
  const plan = STORAGE_PLANS.find(p => p.gb === storageState.gb);
  return fmt(plan.price) + ' руб./мес.';
}
// Выпадающий выбор объёма облачного хранилища в строке таблицы
function storageSelect() {
  const sel = document.createElement('select');
  sel.id = 'storage';
  STORAGE_PLANS.forEach(p => sel.add(new Option(p.gb + ' ГБ', p.gb)));
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
    const param = DATA.kc.rows[idx].parameter;
    ul.appendChild(makeChip(param, () => {
      kcState.selected = kcState.selected.filter(x => x !== idx); 
      // Сбрасываем количество лицензий при удалении
      if (param === 'Доп.лицензия') kcState.licenseQty = 0;
      renderKc();
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
  // Если КЦ был выключен, инициализируем при первом включении
  if (kcState.selected.length === 0) {
    console.log('renderKc: инициализирую услуги КЦ');
    DATA.kc.rows.forEach((r, i) => {
      if (i > 0 && DEFAULT_KC_FEATURES.includes(r.parameter)) {
        kcState.selected.push(i);
        kcState.qty[i] = 1;
        console.log(`renderKc: добавлена услуга ${i}`);
      }
    });
    console.log('renderKc: kcState после инициализации:', kcState);
  }
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
  console.log('renderKc: начинаю отрисовку таблицы, kcState.selected:', kcState.selected);
  [0, ...kcState.selected].forEach(idx => {
    const r = DATA.kc.rows[idx];
    const key = 'k' + idx;
    const isLicense = r.parameter === 'Доп.лицензия'; // Проверяем по названию параметра
    console.log(`Строка ${idx}: "${r.parameter}" - isLicense: ${isLicense}`);
    const qty = isLicense ? (kcState.qty[idx] || 0) : 1;
    // Для лицензий нужно умножить цену на количество
    const getAdjustedValue = (value) => {
      if (!isLicense) return value;
      const p = parseValue(value);
      if (!p) return value;
      return fmt(p.num * qty) + ' ' + p.unit;
    };
    const curVal = getAdjustedValue(r.values[cur]);
    const tgtVal = getAdjustedValue(r.values[tgt]);
    const curT = discountText(curVal, discPct(key + 'c')), tgtT = discountText(tgtVal, discPct(key + 't'));
    const c = compare(curT, tgtT);
    const pc = parseValue(curT), pt = parseValue(tgtT);
    if (pc && pc.unit === 'руб./мес.') curSum += pc.num;
    if (pt && pt.unit === 'руб./мес.') tgtSum += pt.num;
    const tr = document.createElement('tr');
    const first = document.createElement('td');
    // Для лицензий добавляем поле ввода количества (как для номеров)
    if (isLicense) {
      console.log('Добавляю поле ввода для лицензий');
      const input = document.createElement('input');
      input.className = 'qty';
      input.type = 'text';
      input.inputMode = 'numeric';
      input.id = 'kc-qty-' + idx;
      input.value = kcState.qty[idx] || 0;
      input.oninput = e => {
        e.target.value = e.target.value.replace(/\D/g, '');
        kcState.qty[idx] = Math.floor(Number(e.target.value) || 0);
        renderKc();
        const again = $('kc-qty-' + idx);
        if (again) {
          again.focus();
          again.setSelectionRange(again.value.length, again.value.length);
        }
      };
      first.append(r.parameter + ' × ', input);
    } else {
      first.textContent = show(r.parameter);
    }
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
  kcState.qty = {};
  // Выбор услуг по умолчанию по названиям из DEFAULT_KC_FEATURES
  console.log('kcInit: ищу услуги из DEFAULT_KC_FEATURES:', DEFAULT_KC_FEATURES);
  DATA.kc.rows.forEach((r, i) => {
    console.log(`kcInit: [${i}] "${r.parameter}" - совпадает? ${DEFAULT_KC_FEATURES.includes(r.parameter)}`);
    if (i > 0 && DEFAULT_KC_FEATURES.includes(r.parameter)) {
      kcState.selected.push(i);
      kcState.qty[i] = 1;
      console.log(`kcInit: добавлена услуга ${i}, kcState.selected:`, kcState.selected);
    }
  });
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
