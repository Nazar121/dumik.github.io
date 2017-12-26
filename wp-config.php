<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'furniture');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Zo4vhIO{4Y1TJ b6(n/@+q51_Ph+]nh|*bjz*C8jtnHcc^Ip@.4}E|}n:V7mA>&j');
define('SECURE_AUTH_KEY',  'Sn/5:2ViLaDIe1qsRJf>><u>hrsP1sri|j#,LUX-|#7?GWHSFdav#X?gO>$CEP&|');
define('LOGGED_IN_KEY',    '&-f=fuUsoyheR,(=j}$^LKg86QaZ&<XUzn~(ne.*/^!aXn|-1vcv75~=$w8NoL3U');
define('NONCE_KEY',        ' 5Y@WF6492tgSO597][{)O_BM$)v0--E/Tv}vfsZ]2Apgk~/OzK0`3L5v<)1XBY8');
define('AUTH_SALT',        'UBgZE)*7qEeve+f!0xUO3&n}>K}4yH7JZ)oJ8^6f|8kkCkc-DhPnrjldXnY5pbI#');
define('SECURE_AUTH_SALT', 'S<R>]<-Z^/Ddw>+^td+#wW-RtC-+DD4H+qoB]h~STx2[y1M&?l6l+(tF~L|^%iPx');
define('LOGGED_IN_SALT',   'Qch}TMc@H) [|5M<1T#F#-w-KXzJ/-<Ro5xdTu1id[4E.EN[;q))isCd!GL++x%K');
define('NONCE_SALT',       '/u!yDf}{~ZgP@nf/;`cfaW#0Pqh{hJkL!1aI%|?|u6/u|*h-{T2T)1i&MFt:Xf,=');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
