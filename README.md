Browser Time Tracker
=====================

A Chrome extension that helps you manage your online habits by tracking browsing time, providing notifications, and allowing you to set daily limits.

Description
-----------

This Chrome extension aims to help users stay in control of their online time. It tracks your total browsing time per day, sends hourly reminders, alerts you when you reach your daily limit, and displays your daily and weekly usage patterns. With a customizable daily limit and a visual progress bar, you can easily monitor and manage your internet usage.

Features
--------

* **Tracks Total Browsing Time:** Monitors and records your daily browsing time.
* **Hourly Reminders:** Sends notifications every hour to keep you aware of your usage.
* **Daily Limit Alerts:** Notifies you when you reach your set daily browsing limit.
* **Usage Display:** Shows your daily and weekly browsing statistics.
* **Customizable Daily Limit:** Allows you to set a personal daily time limit in hours.
* **Visual Progress Bar:** Provides a visual representation of your daily usage progress.

Installation
------------

1.  Download the project files from [https://github.com/Thor1411/Browser-Time-Tracker.git](https://github.com/Thor1411/Browser-Time-Tracker.git).
2.  Unzip the downloaded archive.
3.  Open the Chrome browser and navigate to `chrome://extensions/`.
4.  Enable **Developer Mode** (toggle in the top-right corner).
5.  Click on **Load unpacked** and select the folder containing the extension files.
6.  The extension icon will now appear in your browser toolbar.

Usage
-----

1.  Click on the extension icon in the browser toolbar to open the popup interface.
2.  **Today's Usage:** View your total browsing time for the current day.
3.  **Daily Limit:**
    * Enter your desired daily time limit (in hours) in the input box.
    * Click **"Set Limit"** to save your setting.
4.  **Usage Pattern:** Review your weekly browsing statistics.
5.  **Notifications:**
    * You will receive hourly reminders of your browsing time.
    * You will receive an alert when you reach your daily limit.

File Structure
--------------

Browser-Time-Tracker/
├── manifest.json
├── (Other necessary files, e.g., popup.html, popup.js, background.js, style.css)
└── ...


Permissions
-----------

The following permissions are required and defined in `manifest.json`:

* `alarms`: For periodic time tracking.
* `storage`: To store usage data and settings.
* `notifications`: To send reminders and alerts.

Future Enhancements
-------------------

* Add options for notification customization (e.g., sound, frequency).
* Include detailed analytics with charts for better insights.
* Support for multiple browsers and platforms.
* Add a pause/resume functionality.
* Add a whitelist of websites that do not contribute to tracked time.

Contributing
------------

Feel free to contribute to this project by submitting pull requests or opening issues.
