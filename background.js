// Initialization when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("trackTime", { periodInMinutes: 1 });

  const today = new Date().toDateString();
  chrome.storage.local.set({
    totalTime: 0,
    lastRecordedDate: today,
    dailyLimit: 480, // 8 hours default
    weeklyData: {},
  });
});

// Alarm handler
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "trackTime") {
    updateTimeTracking();
  }
});

function updateTimeTracking() {
  chrome.storage.local.get(
    ["totalTime", "lastRecordedDate", "dailyLimit", "weeklyData"],
    (data) => {
      const currentDate = new Date();
      const currentDateStr = currentDate.toDateString();
      const lastRecordedDate = data.lastRecordedDate || currentDateStr;

      if (currentDateStr !== lastRecordedDate) {
        // Save yesterday's data to weekly stats
        const lastDay = new Date(lastRecordedDate);
        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
          lastDay.getDay()
        ];
        const weeklyData = data.weeklyData || {};
        weeklyData[dayName] =
          Math.round(((data.totalTime || 0) / 60) * 10) / 10;

        // Reset for new day
        chrome.storage.local.set({
          totalTime: 0,
          lastRecordedDate: currentDateStr,
          weeklyData: weeklyData,
        });
      } else {
        // Increment time counter
        const totalTime = (data.totalTime || 0) + 1;
        chrome.storage.local.set({ totalTime: totalTime });

        // Check if exceeded daily limit
        if (totalTime === data.dailyLimit) {
          chrome.notifications.create("limitExceeded", {
            type: "basic",
            iconUrl: "icon.png",
            title: "Daily Limit Reached",
            message:
              "You've reached your daily browsing limit. Time for a break!",
          });
        }
        // Show hourly notification
        else if (totalTime % 60 === 0) {
          chrome.notifications.create("timeReminder", {
            type: "basic",
            iconUrl: "icon.png",
            title: "Browser Time Tracker",
            message: `You've been browsing for ${totalTime / 60} hour(s).`,
          });
        }
      }
    }
  );
}
