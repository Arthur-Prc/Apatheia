const { app, BrowserWindow, ipcMain } = require('electron');
const notifier = require('node-notifier');
const moment = require('moment');
const path = require('path');

// Create the main window
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadFile('index.html');
}

// Notification function
function sendNotification(title, message) {
  notifier.notify({
    title: title,
    message: message,
    icon: path.join(__dirname, 'icon.png'),
    sound: true,
    wait: true
  });
}

// Schedule daily/weekly/monthly reminders
function scheduleTasks() {
  const now = moment();

  // Daily tasks (show reminders every 24 hours)
  setInterval(() => {
    sendNotification('Daily Task Reminder', 'Backup & organize files, software updates, antivirus scan, check logs.');
  }, 24 * 60 * 60 * 1000);

  // Weekly tasks (show reminders every 7 days)
  setInterval(() => {
    sendNotification('Weekly Task Reminder', 'Offline backup, file permissions, email security, router updates, 2FA verification.');
  }, 7 * 24 * 60 * 60 * 1000);

  // Monthly tasks (show reminders every 30 days)
  setInterval(() => {
    sendNotification('Monthly Task Reminder', 'Anti-ransomware, password keychain, Yubikey, physical security, avoid phishing, AI monitoring, cyber insurance.');
  }, 30 * 24 * 60 * 60 * 1000);
}

// Electron App Ready
app.whenReady().then(() => {
  createWindow();
  scheduleTasks();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed (for macOS compatibility)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


