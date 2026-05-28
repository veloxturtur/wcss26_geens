/** 2026 FIFA World Cup — groups A–L (48 teams). Codes used across the app. */
const WC2026_GROUPS = {
  A: ['MEX', 'RSA', 'KOR', 'CZE'],
  B: ['CAN', 'QAT', 'SUI', 'BIH'],
  C: ['BRA', 'MAR', 'SCO', 'HTI'],
  D: ['USA', 'PAR', 'AUS', 'TUR'],
  E: ['GER', 'CUW', 'CIV', 'ECU'],
  F: ['NED', 'JPN', 'TUN', 'SWE'],
  G: ['BEL', 'EGY', 'IRN', 'NZL'],
  H: ['ESP', 'CPV', 'KSA', 'URU'],
  I: ['FRA', 'SEN', 'NOR', 'IRQ'],
  J: ['ARG', 'ALG', 'AUT', 'JOR'],
  K: ['POR', 'COL', 'UZB', 'POL'],
  L: ['ENG', 'GHA', 'PAN', 'CRO'],
};

/** Per-group matchday dates (MD1 / MD2 / MD3) — aligned to FIFA group-stage windows */
const GROUP_MD_DATES = {
  A: ['2026-06-11', '2026-06-18', '2026-06-24'],
  B: ['2026-06-12', '2026-06-19', '2026-06-25'],
  C: ['2026-06-13', '2026-06-20', '2026-06-25'],
  D: ['2026-06-12', '2026-06-19', '2026-06-26'],
  E: ['2026-06-14', '2026-06-21', '2026-06-26'],
  F: ['2026-06-14', '2026-06-21', '2026-06-26'],
  G: ['2026-06-15', '2026-06-22', '2026-06-27'],
  H: ['2026-06-15', '2026-06-22', '2026-06-27'],
  I: ['2026-06-16', '2026-06-23', '2026-06-27'],
  J: ['2026-06-16', '2026-06-23', '2026-06-27'],
  K: ['2026-06-17', '2026-06-23', '2026-06-27'],
  L: ['2026-06-17', '2026-06-24', '2026-06-27'],
};

const GROUP_MATCH_PAIRS = [
  [[0, 1], [2, 3]],
  [[0, 2], [1, 3]],
  [[0, 3], [1, 2]],
];

const KNOCKOUT_FIXTURES = [
  { id: 'k-r32-1', stage: 'r32', date: '2026-06-28', matchNum: 1, label: 'Round of 32 — Match 1' },
  { id: 'k-r32-2', stage: 'r32', date: '2026-06-29', matchNum: 2, label: 'Round of 32 — Match 2' },
  { id: 'k-r32-3', stage: 'r32', date: '2026-06-30', matchNum: 3, label: 'Round of 32 — Match 3' },
  { id: 'k-r32-4', stage: 'r32', date: '2026-07-01', matchNum: 4, label: 'Round of 32 — Match 4' },
  { id: 'k-r16-1', stage: 'r16', date: '2026-07-04', matchNum: 1, label: 'Round of 16 — Match 1' },
  { id: 'k-r16-2', stage: 'r16', date: '2026-07-05', matchNum: 2, label: 'Round of 16 — Match 2' },
  { id: 'k-qf-1', stage: 'qf', date: '2026-07-09', matchNum: 1, label: 'Quarter-final' },
  { id: 'k-qf-2', stage: 'qf', date: '2026-07-10', matchNum: 2, label: 'Quarter-final' },
  { id: 'k-sf-1', stage: 'sf', date: '2026-07-12', matchNum: 1, label: 'Semi-final' },
  { id: 'k-sf-2', stage: 'sf', date: '2026-07-13', matchNum: 2, label: 'Semi-final' },
  { id: 'k-final', stage: 'final', date: '2026-07-19', matchNum: 1, label: 'Final' },
];

function generateDefaultMatches() {
  const matches = [];
  let n = 0;

  for (const [group, teams] of Object.entries(WC2026_GROUPS)) {
    const dates = GROUP_MD_DATES[group];
    GROUP_MATCH_PAIRS.forEach((dayPairs, mdIndex) => {
      const date = dates[mdIndex];
      dayPairs.forEach(([hi, ai], pairIndex) => {
        n += 1;
        matches.push({
          id: `g-${group}-${mdIndex}-${pairIndex}`,
          group,
          date,
          stage: 'group',
          home: teams[hi],
          away: teams[ai],
          homeScore: null,
          awayScore: null,
          matchNum: pairIndex + 1,
        });
      });
    });
  }

  for (const k of KNOCKOUT_FIXTURES) {
    matches.push({
      id: k.id,
      group: '',
      date: k.date,
      stage: k.stage,
      home: '',
      away: '',
      homeScore: null,
      awayScore: null,
      matchNum: k.matchNum,
      label: k.label,
    });
  }

  return matches;
}

function getMatchDates(matches) {
  const dates = [...new Set(matches.map((m) => m.date))];
  dates.sort();
  return dates;
}
