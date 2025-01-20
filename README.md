# Browser-Time-Tracker
Overview
The Browser Time Tracker is a Chrome extension designed to help users monitor and manage their time spent browsing. It tracks usage in real-time, displays daily and weekly statistics, and allows users to set a daily limit. Notifications are sent to remind users of their browsing duration or when the daily limit is reached.

Features
Time Tracking:

Tracks total time spent browsing in real-time.
Automatically resets the time at the end of the day.
Daily Limit:

Users can set a daily browsing time limit.
Notifies users when they reach or exceed the limit.
Weekly Stats:

Displays browsing stats for each day of the current week.
Notifications:

Hourly reminders of browsing time.
Alerts when the daily limit is reached.
Interactive Popup:

View current usage and remaining time.
Update daily limits directly from the popup.
Installation
Clone or download this repository.
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click on "Load unpacked" and select the folder containing this extension.
The extension is now ready to use!
Usage
Popup Interface
Click on the extension icon in the browser toolbar to open the popup.
View:
Time spent browsing today.
Progress bar showing the percentage of the daily limit used.
Remaining time for the day.
Update your daily limit:
Enter a new limit (in hours) in the input field.
Click "Save" to update the limit.
Weekly Stats
View daily browsing stats for the current week in the "Weekly Stats" section of the popup.
Files and Structure
1. background.js
Handles background tasks:

Initializes storage values when the extension is installed.
Tracks browsing time using a periodic alarm.
Manages notifications for hourly reminders and daily limit alerts.
2. popup.js
Handles the popup interface:

Updates the usage display, progress bar, and weekly stats.
Allows users to set and save a daily limit.
3. styles.css
Defines the styles for the popup interface:

Clean and responsive design.
Progress bars, buttons, and layout for stats display.
Example Popup Interface:
Displays current browsing time and progress.
Allows users to adjust daily limits interactively.
Customization
Change Daily Limit:

Modify the default daily limit in background.js:
javascript
Copy
Edit
dailyLimit: 480, // Default: 8 hours
Notification Messages:

Customize notifications in background.js under chrome.notifications.create.
Style Tweaks:

Update styles in styles.css for a personalized look.
Future Enhancements
Add monthly statistics.
Introduce customizable themes.
Sync data across devices using Chrome's cloud storage.
