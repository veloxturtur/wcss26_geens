const BRACKET_ROUNDS = [
  { key: 'r32', label: 'Round of 32' },
  { key: 'r16', label: 'Round of 16' },
  { key: 'qf', label: 'Quarter-finals' },
  { key: 'sf', label: 'Semi-finals' },
  { key: 'final', label: 'Final' },
];

function renderBracketMatch(m) {
  const home = m.home ? renderTeamCell(m.home) : 'TBD';
  const away = m.away ? renderTeamCell(m.away) : 'TBD';
  const score =
    matchPlayed(m) && m.homeScore != null
      ? `<div class="bracket-score">${m.homeScore} – ${m.awayScore}</div>`
      : '';
  const winner =
    matchPlayed(m) && m.homeScore !== m.awayScore
      ? m.homeScore > m.awayScore
        ? m.home
        : m.away
      : null;
  return `
    <div class="bracket-match ${winner ? 'bracket-match-done' : ''}">
      <div class="bracket-team ${winner === m.home ? 'bracket-winner' : ''}">${home}</div>
      ${score}
      <div class="bracket-team ${winner === m.away ? 'bracket-winner' : ''}">${away}</div>
      <div class="bracket-date">${formatDate(m.date)}</div>
    </div>`;
}

function renderBracket() {
  const state = loadState();
  const wrap = document.getElementById('knockout-bracket');
  if (!wrap) return;

  const knockout = state.matches.filter((m) => m.stage !== 'group');
  const byStage = {};
  for (const r of BRACKET_ROUNDS) byStage[r.key] = [];
  for (const m of knockout) {
    if (byStage[m.stage]) byStage[m.stage].push(m);
  }

  wrap.innerHTML = BRACKET_ROUNDS.map((round) => {
    const matches = (byStage[round.key] || []).sort(
      (a, b) => (a.matchNum || 0) - (b.matchNum || 0)
    );
    return `
      <div class="bracket-round">
        <h3 class="bracket-round-title">${round.label}</h3>
        <div class="bracket-round-matches">
          ${matches.length ? matches.map(renderBracketMatch).join('') : '<p class="empty-cell">TBD</p>'}
        </div>
      </div>`;
  }).join('');

  const syncEl = document.getElementById('sync-status');
  if (syncEl) syncEl.textContent = formatSyncStatus(state);
}

document.addEventListener('DOMContentLoaded', () => {
  if (!requireSetup('bracket')) return;
  renderNav('bracket');
  renderBracket();
  startAutoSync();
  document.addEventListener('wc-sync-complete', renderBracket);
});
