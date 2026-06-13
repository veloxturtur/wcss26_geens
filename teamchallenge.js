const TEAMS_CONFIG = [
  {
    name: 'Team England',
    members: ['Jasper', 'Noah', 'Lien', 'Jurgen'],
  },
  {
    name: 'Team Herent',
    members: ['Evi', 'Pie', 'Stella', 'Stan'],
  },
  {
    name: 'Team Keerbergen',
    members: ['Oma', 'Opa'],
  },
  {
    name: 'Team Werchter',
    members: ['Peet', 'Oscar', 'Teo', 'Sara', 'Ava'],
  },
];

function renderTeamChallenge() {
  const state = loadState();
  const board = getLeaderboard(state);
  const tbody = document.getElementById('team-challenge-body');
  if (!tbody) return;

  const teamRows = TEAMS_CONFIG.map((team) => {
    const memberPoints = team.members
      .map((memberName) => {
        const member = board.find((r) => r.player.toLowerCase() === memberName.toLowerCase());
        return member ? member.points : 0;
      });
      //.filter((p) => p > 0);
    
    const totalPoints = memberPoints.reduce((sum, p) => sum + p, 0);
    // Team Werchter always divides by 4, others divide by actual member count
    const divisor = team.name === 'Team Werchter' ? 4 : memberPoints.length;
    const averagePoints = divisor > 0 ? totalPoints / divisor : 0;
    
    return {
      team: team.name,
      members: team.members.join(', '),
      averagePoints,
      memberList: team.members,
    };
  });

  teamRows.sort((a, b) => b.averagePoints - a.averagePoints);

  tbody.innerHTML = teamRows
    .map(
      (row, index) => `
    <tr>
      <td class="rank ${index === 0 ? 'rank-1' : ''}">${index + 1}</td>
      <td>${teamNameLink(row.team, row.memberList)}</td>
      <td>${row.members}</td>
      <td class="points">${row.averagePoints.toFixed(2)}</td>
    </tr>`
    )
    .join('');

  bindTeamLinks(tbody);

  const syncEl = document.getElementById('sync-status');
  if (syncEl) syncEl.textContent = formatSyncStatus(state);
}

function teamNameLink(name, memberList, className = 'team-link') {
  const safeName = name.replace(/"/g, '&quot;');
  const safeMembers = JSON.stringify(memberList).replace(/"/g, '&quot;');
  return `<button type="button" class="${className}" data-team="${safeName}" data-members="${safeMembers}">${name}</button>`;
}

function ensureTeamModal() {
  if (document.getElementById('team-modal')) return;
  const modal = document.createElement('div');
  modal.id = 'team-modal';
  modal.className = 'modal-overlay';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="modal-card modal-card-wide" role="dialog" aria-labelledby="team-modal-title">
      <button type="button" class="modal-close" id="team-modal-close" aria-label="Close">×</button>
      <div id="team-modal-content"></div>
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeTeamProfile();
  });
  document.getElementById('team-modal-close')?.addEventListener('click', closeTeamProfile);
}

function closeTeamProfile() {
  const modal = document.getElementById('team-modal');
  if (modal) modal.hidden = true;
}

function openTeamProfile(teamName, memberList) {
  const state = loadState();
  const board = getLeaderboard(state);
  
  ensureTeamModal();
  const content = document.getElementById('team-modal-content');
  const modal = document.getElementById('team-modal');
  if (!content || !modal) return;

  const memberRows = memberList
    .map((memberName) => {
      const member = board.find((r) => r.player.toLowerCase() === memberName.toLowerCase());
      if (!member) return '';
      return `
      <div class="profile-team-card">
        <div class="profile-team-head">
          <span class="team-name">${member.player}</span>
        </div>
        <ul class="profile-team-stats">
          <li>Total: <strong>${member.points.toFixed(2)} pts</strong></li>
          <li>Teams: ${renderTeamsCell(member.teamCodes)}</li>
          <li>Games Played: ${member.gamesPlayed}</li>
        </ul>
      </div>`;
    })
    .join('');

  const totalPoints = memberList
    .map((memberName) => {
      const member = board.find((r) => r.player.toLowerCase() === memberName.toLowerCase());
      return member ? member.points : 0;
    })
    .reduce((sum, p) => sum + p, 0);
  const averagePoints = memberList.length > 0 ? totalPoints / memberList.length : 0;

  content.innerHTML = `
    <header class="profile-header">
      <h2 id="team-modal-title">${teamName}</h2>
      <p class="profile-meta">
        Average: <strong>${averagePoints.toFixed(2)} pts</strong>
        · ${memberList.length} member${memberList.length > 1 ? 's' : ''}
      </p>
    </header>
    <h3 class="profile-section-title">Team Members</h3>
    <div class="profile-teams">${memberRows}</div>`;

  modal.hidden = false;
}

function bindTeamLinks(root = document) {
  root.querySelectorAll('.team-link').forEach((el) => {
    if (el.dataset.teamBound) return;
    el.dataset.teamBound = '1';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const teamName = el.dataset.team;
      const memberList = JSON.parse(el.dataset.members.replace(/&quot;/g, '"'));
      if (teamName && memberList) openTeamProfile(teamName, memberList);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (!requireSetup('teamchallenge')) return;
  renderNav('teamchallenge');
  initPageUi();

  renderTeamChallenge();
  startAutoSync();
  document.addEventListener('wc-sync-complete', renderTeamChallenge);
});
