// HARDCODED MATCH SCORES
// Edit scores here to update all leaderboards
// Format: 'MATCH_ID': { homeScore: X, awayScore: Y }
// Leave empty or null to use API data (if available)

const HARDCODED_MATCH_SCORES = {
  // Group A
  'g-A-0-0': { homeScore: 2, awayScore: 1 }, // MEX vs RSA
  'g-A-0-1': { homeScore: 1, awayScore: 0 }, // KOR vs CZE
  'g-A-1-0': { homeScore: 0, awayScore: 2 }, // CZE vs RSA
  'g-A-1-1': { homeScore: 3, awayScore: 0 }, // MEX vs KOR
  'g-A-2-0': { homeScore: 1, awayScore: 1 }, // CZE vs MEX
  'g-A-2-1': { homeScore: 2, awayScore: 0 }, // RSA vs KOR

  // Group B
  'g-B-0-0': { homeScore: 1, awayScore: 1 }, // CAN vs BIH
  'g-B-0-1': { homeScore: 0, awayScore: 2 }, // QAT vs SUI
  'g-B-1-0': { homeScore: 1, awayScore: 2 }, // SUI vs BIH
  'g-B-1-1': { homeScore: 2, awayScore: 0 }, // CAN vs QAT
  'g-B-2-0': { homeScore: 0, awayScore: 1 }, // SUI vs CAN
  'g-B-2-1': { homeScore: 1, awayScore: 1 }, // BIH vs QAT

  // Group C
  'g-C-0-0': { homeScore: 2, awayScore: 0 }, // BRA vs MAR
  'g-C-0-1': { homeScore: 1, awayScore: 0 }, // HTI vs SCO
  'g-C-1-0': { homeScore: 0, awayScore: 2 }, // SCO vs MAR
  'g-C-1-1': { homeScore: 3, awayScore: 0 }, // BRA vs HTI
  'g-C-2-0': { homeScore: 1, awayScore: 1 }, // SCO vs BRA
  'g-C-2-1': { homeScore: 0, awayScore: 2 }, // MAR vs HTI

  // Group D
  'g-D-0-0': { homeScore: 1, awayScore: 1 }, // USA vs PAR
  'g-D-0-1': { homeScore: 2, awayScore: 1 }, // AUS vs TUR
  'g-D-1-0': { homeScore: 0, awayScore: 1 }, // USA vs AUS
  'g-D-1-1': { homeScore: 1, awayScore: 2 }, // TUR vs PAR
  'g-D-2-0': { homeScore: 2, awayScore: 0 }, // TUR vs USA
  'g-D-2-1': { homeScore: 1, awayScore: 1 }, // PAR vs AUS

  // Group E
  'g-E-0-0': { homeScore: 2, awayScore: 0 }, // GER vs CUW
  'g-E-0-1': { homeScore: 1, awayScore: 1 }, // CIV vs ECU
  'g-E-1-0': { homeScore: 3, awayScore: 0 }, // GER vs CIV
  'g-E-1-1': { homeScore: 0, awayScore: 2 }, // ECU vs CUW
  'g-E-2-0': { homeScore: 1, awayScore: 0 }, // CUW vs CIV
  'g-E-2-1': { homeScore: 1, awayScore: 2 }, // ECU vs GER

  // Group F
  'g-F-0-0': { homeScore: 2, awayScore: 1 }, // NED vs JPN
  'g-F-0-1': { homeScore: 0, awayScore: 1 }, // SWE vs TUN
  'g-F-1-0': { homeScore: 1, awayScore: 1 }, // NED vs SWE
  'g-F-1-1': { homeScore: 2, awayScore: 0 }, // TUN vs JPN
  'g-F-2-0': { homeScore: 1, awayScore: 2 }, // JPN vs SWE
  'g-F-2-1': { homeScore: 0, awayScore: 3 }, // TUN vs NED

  // Group G
  'g-G-0-0': { homeScore: 1, awayScore: 0 }, // BEL vs EGY
  'g-G-0-1': { homeScore: 2, awayScore: 1 }, // IRN vs NZL
  'g-G-1-0': { homeScore: 2, awayScore: 0 }, // BEL vs IRN
  'g-G-1-1': { homeScore: 1, awayScore: 1 }, // NZL vs EGY
  'g-G-2-0': { homeScore: 0, awayScore: 2 }, // EGY vs IRN
  'g-G-2-1': { homeScore: 1, awayScore: 3 }, // NZL vs BEL

  // Group H
  'g-H-0-0': { homeScore: 3, awayScore: 0 }, // ESP vs CPV
  'g-H-0-1': { homeScore: 1, awayScore: 1 }, // KSA vs URU
  'g-H-1-0': { homeScore: 2, awayScore: 0 }, // ESP vs KSA
  'g-H-1-1': { homeScore: 0, awayScore: 2 }, // URU vs CPV
  'g-H-2-0': { homeScore: 1, awayScore: 2 }, // CPV vs KSA
  'g-H-2-1': { homeScore: 1, awayScore: 1 }, // URU vs ESP

  // Group I
  'g-I-0-0': { homeScore: 2, awayScore: 1 }, // FRA vs SEN
  'g-I-0-1': { homeScore: 0, awayScore: 1 }, // IRQ vs NOR
  'g-I-1-0': { homeScore: 3, awayScore: 0 }, // FRA vs IRQ
  'g-I-1-1': { homeScore: 1, awayScore: 2 }, // NOR vs SEN
  'g-I-2-0': { homeScore: 1, awayScore: 0 }, // NOR vs FRA
  'g-I-2-1': { homeScore: 2, awayScore: 1 }, // SEN vs IRQ

  // Group J
  'g-J-0-0': { homeScore: 2, awayScore: 0 }, // ARG vs ALG
  'g-J-0-1': { homeScore: 1, awayScore: 1 }, // AUT vs JOR
  'g-J-1-0': { homeScore: 3, awayScore: 1 }, // ARG vs AUT
  'g-J-1-1': { homeScore: 0, awayScore: 2 }, // JOR vs ALG
  'g-J-2-0': { homeScore: 1, awayScore: 2 }, // ALG vs AUT
  'g-J-2-1': { homeScore: 0, awayScore: 3 }, // JOR vs ARG

  // Group K
  'g-K-0-0': { homeScore: 1, awayScore: 0 }, // POR vs COD
  'g-K-0-1': { homeScore: 2, awayScore: 1 }, // UZB vs COL
  'g-K-1-0': { homeScore: 2, awayScore: 0 }, // POR vs UZB
  'g-K-1-1': { homeScore: 1, awayScore: 1 }, // COL vs COD
  'g-K-2-0': { homeScore: 2, awayScore: 0 }, // COL vs POR
  'g-K-2-1': { homeScore: 0, awayScore: 1 }, // COD vs UZB

  // Group L
  'g-L-0-0': { homeScore: 1, awayScore: 1 }, // ENG vs CRO
  'g-L-0-1': { homeScore: 2, awayScore: 0 }, // GHA vs PAN
  'g-L-1-0': { homeScore: 3, awayScore: 0 }, // ENG vs GHA
  'g-L-1-1': { homeScore: 1, awayScore: 2 }, // PAN vs CRO
  'g-L-2-0': { homeScore: 0, awayScore: 2 }, // PAN vs ENG
  'g-L-2-1': { homeScore: 1, awayScore: 1 }, // CRO vs GHA
};

// Set this to true to use hardcoded scores, false to use API data
const USE_HARDCODED_SCORES = true;
