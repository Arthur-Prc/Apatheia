// Renderer Process: Handle Task Checkboxes
const taskIds = [
  'daily-backup', 'daily-updates', 'daily-antivirus', 'daily-logs',
  'weekly-backup', 'weekly-permissions', 'weekly-email', 'weekly-router', 'weekly-2fa',
  'monthly-ransomware', 'monthly-keychain', 'monthly-yubikey', 'monthly-physical', 'monthly-phishing', 'monthly-ai', 'monthly-insurance'
];

taskIds.forEach(taskId => {
  const checkbox = document.getElementById(taskId);
  
  // Listen for changes in checkbox state
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      document.getElementById(taskId).parentElement.classList.add('task-done');
    } else {
      document.getElementById(taskId).parentElement.classList.remove('task-done');
    }
  });
});

