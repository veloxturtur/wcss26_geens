// HELPER FUNCTIONS FOR DATE AND TIME FORMATTING

function getLocalDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function matchLocalDate(m) {
  if (!m || !m.date) return '9999-12-31';
  // Extracts just the YYYY-MM-DD part safely
  return String(m.date).split('T')[0].split(' ')[0];
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const cleanDate = String(dateStr).split('T')[0].split(' ')[0];
  const parts = cleanDate.split('-');
  if (parts.length !== 3) return dateStr;
  
  const [year, month, day] = parts;
  const d = new Date(year, month - 1, day);
  if (isNaN(d.getTime())) return dateStr;

  return d.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  });
}

function formatMatchDateTime(m) {
  if (!m || !m.date) return 'TBD';
  
  // Safely normalize spaces to ISO 'T' format for cross-browser compatibility
  const normalizedDate = String(m.date).trim().replace(' ', 'T');
  const d = new Date(normalizedDate);
  
  if (isNaN(d.getTime())) {
    // Fallback: If browser still fails, print the clean raw date
    return String(m.date).replace('T', ' ');
  }

  const datePart = d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short'
  });

  const timePart = d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return `${datePart} • ${timePart}`;
}

function renderTeamCell(code) {
  if (!code || code === 'TBD' || code === 'null') {
    return `<span class="team-unknown">TBD</span>`;
  }
  
  let team = null;
  if (typeof ALL_TEAMS !== 'undefined') {
    team = ALL_TEAMS.find(t => t.code === code);
  }

  const name = team ? team.name : code;
  const flag = team && team.flag ? team.flag : '🏳️';

  return `
    <span class="team-cell">
      <span class="team-flag" role="img" aria-label="${name} flag">${flag}</span>
      <span class="team-name">${name}</span>
    </span>
  `;
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function requireSetup(pageKey) {
  const state = typeof loadState === 'function' ? loadState() : null;
  if (!state || !state.setupComplete) {
    if (pageKey !== 'index') {
      window.location.href = 'index.html';
      return false;
    }
  }
  return true;
}

function formatSyncStatus(state) {
  if (!state || !state.lastSyncAt) return 'Using manual simulation data';
  
  const d = new Date(state.lastSyncAt);
  if (isNaN(d.getTime())) return 'Live API connected';
  
  const timeStr = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  return `Last synced: Today at ${timeStr}`;
}
