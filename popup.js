document.addEventListener("DOMContentLoaded", () => {
  updateUsageDisplay();
  setupDailyLimit();
  displayWeeklyStats();
});

function updateUsageDisplay() {
  chrome.storage.local.get(["totalTime", "dailyLimit"], (data) => {
    const totalMinutes = data.totalTime || 0;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Update usage text
    document.getElementById(
      "usage"
    ).textContent = `Time spent browsing: ${hours} hour(s) and ${minutes} minute(s)`;

    // Update progress bar
    const dailyLimit = data.dailyLimit || 480; // Default 8 hours
    const progressPercent = Math.min((totalMinutes / dailyLimit) * 100, 100);
    const progressBar = document.getElementById("timeProgress");
    progressBar.style.width = `${progressPercent}%`;
    progressBar.style.background = progressPercent > 90 ? "#e74c3c" : "#3498db";
  });
}

function setupDailyLimit() {
  // Load current limit
  chrome.storage.local.get("dailyLimit", (data) => {
    const limitHours = (data.dailyLimit || 480) / 60;
    document.getElementById("limitHours").value = limitHours;
    updateLimitStatus(data.dailyLimit || 480);
  });

  // Save limit button handler
  document.getElementById("saveLimit").addEventListener("click", () => {
    const hours = document.getElementById("limitHours").value;
    const limitInMinutes = hours * 60;
    chrome.storage.local.set({ dailyLimit: limitInMinutes }, () => {
      updateLimitStatus(limitInMinutes);
    });
  });
}

function updateLimitStatus(limitInMinutes) {
  chrome.storage.local.get("totalTime", (data) => {
    const totalMinutes = data.totalTime || 0;
    const remaining = limitInMinutes - totalMinutes;
    const status =
      remaining > 0
        ? `${Math.floor(remaining / 60)}h ${remaining % 60}m remaining`
        : "Daily limit exceeded";

    document.getElementById("limitStatus").textContent = status;
  });
}

function displayWeeklyStats() {
  const weeklyStats = document.getElementById("weeklyStats");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  chrome.storage.local.get("weeklyData", (data) => {
    const weekData = data.weeklyData || {};

    days.forEach((day) => {
      const dayDiv = document.createElement("div");
      dayDiv.className = "day-stat";

      const dayName = document.createElement("div");
      dayName.textContent = day;

      const hours = document.createElement("div");
      hours.className = "day-hours";
      hours.textContent = `${weekData[day] || 0}h`;

      dayDiv.appendChild(dayName);
      dayDiv.appendChild(hours);
      weeklyStats.appendChild(dayDiv);
    });
  });
}
