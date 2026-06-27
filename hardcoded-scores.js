// HARDCODED MATCH SCORES
// Edit scores here to update all leaderboards
// Format: 'MATCH_ID': { homeScore: X, awayScore: Y }
// Leave empty or null to use API data (if available)

const HARDCODED_MATCH_SCORES = {
  // Group A (MEX, RSA, KOR, CZE)
  'g-A-0-0': { homeScore: 2, awayScore: 0 }, // MEX vs RSA
  'g-A-0-1': { homeScore: 2, awayScore: 1 }, // KOR vs CZE
  'g-A-1-0': { homeScore: 1, awayScore: 0 }, // MEX vs KOR
  'g-A-1-1': { homeScore: 1, awayScore: 1 }, // RSA vs CZE
  'g-A-2-0': { homeScore: 3, awayScore: 0 }, // MEX vs CZE
  'g-A-2-1': { homeScore: 1, awayScore: 0 }, // RSA vs KOR

  // Group B (CAN, BIH, QAT, SUI)
  'g-B-0-0': { homeScore: 6, awayScore: 0 }, // CAN vs QAT
  'g-B-0-1': { homeScore: 4, awayScore: 1 }, // SUI vs BIH
  'g-B-1-0': { homeScore: 1, awayScore: 2 }, // CAN vs SUI
  'g-B-1-1': { homeScore: 1, awayScore: 3 }, // QAT vs BIH
  'g-B-2-0': { homeScore: 1, awayScore: 1 }, // CAN vs BIH
  'g-B-2-1': { homeScore: 1, awayScore: 1 }, // QAT vs SUI

  // Group C (BRA, MAR, HTI, SCO)
  'g-C-0-0': { homeScore: 1, awayScore: 1 }, // BRA vs MAR
  'g-C-0-1': { homeScore: 1, awayScore: 0 }, // HTI vs SCO
  'g-C-1-0': { homeScore: 3, awayScore: 0 }, // BRA vs HTI
  'g-C-1-1': { homeScore: 1, awayScore: 0 }, // MAR vs SCO
  'g-C-2-0': { homeScore: 3, awayScore: 0 }, // BRA vs SCO
  'g-C-2-1': { homeScore: 4, awayScore: 2 }, // MAR vs HTI

  // Group D (USA, PAR, AUS, TUR)
  'g-D-0-0': { homeScore: 4, awayScore: 1 }, // USA vs PAR
  'g-D-0-1': { homeScore: 2, awayScore: 0 }, // AUS vs TUR
  'g-D-1-0': { homeScore: 2, awayScore: 0 }, // USA vs AUS
  'g-D-1-1': { homeScore: 1, awayScore: 0 }, // PAR vs TUR
  'g-D-2-0': { homeScore: 2, awayScore: 3 }, // USA vs TUR
  'g-D-2-1': { homeScore: 0, awayScore: 0 }, // PAR vs AUS

  // Group E (GER, CUW, CIV, ECU)
  'g-E-0-0': { homeScore: 7, awayScore: 1 }, // GER vs CUW
  'g-E-0-1': { homeScore: 1, awayScore: 0 }, // CIV vs ECU
  'g-E-1-0': { homeScore: 2, awayScore: 1 }, // GER vs CIV
  'g-E-1-1': { homeScore: 0, awayScore: 0 }, // CUW vs ECU
  'g-E-2-0': { homeScore: 1, awayScore: 2 }, // GER vs ECU
  'g-E-2-1': { homeScore: 0, awayScore: 2 }, // CUW vs CIV

  // Group F (NED, JPN, TUN, SWE)
  'g-F-0-0': { homeScore: 2, awayScore: 2 }, // NED vs JPN
  'g-F-0-1': { homeScore: 1, awayScore: 5 }, // TUN vs SWE
  'g-F-1-0': { homeScore: 3, awayScore: 1 }, // NED vs TUN
  'g-F-1-1': { homeScore: 1, awayScore: 1 }, // JPN vs SWE
  'g-F-2-0': { homeScore: 5, awayScore: 1 }, // NED vs SWE
  'g-F-2-1': { homeScore: 4, awayScore: 0 }, // JPN vs TUN

  // Group G (BEL, EGY, IRN, NZL)
  'g-G-0-0': { homeScore: 1, awayScore: 1 }, // BEL vs EGY
  'g-G-0-1': { homeScore: 2, awayScore: 2 }, // IRN vs NZL
  'g-G-1-0': { homeScore: 0, awayScore: 0 }, // BEL vs IRN
  'g-G-1-1': { homeScore: 3, awayScore: 1 }, // EGY vs NZL
  'g-G-2-0': { homeScore: 5, awayScore: 1 }, // BEL vs NZL
  'g-G-2-1': { homeScore: 1, awayScore: 1 }, // EGY vs IRN

  // Group H (ESP, CPV, KSA, URU)
  'g-H-0-0': { homeScore: 0, awayScore: 0 }, // ESP vs CPV
  'g-H-0-1': { homeScore: 1, awayScore: 1 }, // KSA vs URU
  'g-H-1-0': { homeScore: 4, awayScore: 0 }, // ESP vs KSA
  'g-H-1-1': { homeScore: 2, awayScore: 2 }, // CPV vs URU
  'g-H-2-0': { homeScore: 1, awayScore: 0 }, // ESP vs URU
  'g-H-2-1': { homeScore: 0, awayScore: 0 }, // CPV vs KSA

  // Group I (FRA, SEN, NOR, IRQ)
  'g-I-0-0': { homeScore: 3, awayScore: 1 }, // FRA vs SEN
  'g-I-0-1': { homeScore: 4, awayScore: 1 }, // NOR vs IRQ
  'g-I-1-0': { homeScore: 4, awayScore: 1 }, // FRA vs NOR
  'g-I-1-1': { homeScore: 5, awayScore: 0 }, // SEN vs IRQ
  'g-I-2-0': { homeScore: 3, awayScore: 0 }, // FRA vs IRQ
  'g-I-2-1': { homeScore: 2, awayScore: 3 }, // SEN vs NOR

  // Group J (ARG, ALG, AUT, JOR)
  'g-J-0-0': { homeScore: 3, awayScore: 0 }, // ARG vs ALG
  'g-J-0-1': { homeScore: 3, awayScore: 1 }, // AUT vs JOR
  'g-J-1-0': { homeScore: 2, awayScore: 0 }, // ARG vs AUT
  'g-J-1-1': { homeScore: 2, awayScore: 1 }, // ALG vs JOR
  'g-J-2-0': { homeScore: null, awayScore: null }, // JOR vs ARG
  'g-J-2-1': { homeScore: null, awayScore: null }, // ALG vs AUT

  // Group K (POR, COL, UZB, COD)
  'g-K-0-0': { homeScore: null, awayScore: null }, // POR vs COL
  'g-K-0-1': { homeScore: null, awayScore: null }, // UZB vs COD
  'g-K-1-0': { homeScore: 5, awayScore: 0 }, // POR vs UZB
  'g-K-1-1': { homeScore: 1, awayScore: 0 }, // COL vs COD
  'g-K-2-0': { homeScore: 1, awayScore: 1 }, // COD vs POR
  'g-K-2-1': { homeScore: 3, awayScore: 1 }, // COL vs UZB

  // Group L (ENG, GHA, PAN, CRO)
  'g-L-0-0': { homeScore: 0, awayScore: 0 }, // ENG vs GHA
  'g-L-0-1': { homeScore: 0, awayScore: 1 }, // PAN vs CRO
  'g-L-1-0': { homeScore: null, awayScore: null }, // ENG vs PAN
  'g-L-1-1': { homeScore: null, awayScore: null }, // GHA vs CRO
  'g-L-2-0': { homeScore: 4, awayScore: 2 }, // ENG vs CRO
  'g-L-2-1': { homeScore: 1, awayScore: 0 }, // GHA vs PAN

  // ==========================================
  // KNOCKOUT STAGE TEMPLATE
  // First team = Home (left score), Second team = Away (right score)
  // Check live bracket.html once groups finish to confirm actual country names!
  // ==========================================

  // Round of 32 (+2 pts bonus per win)
  'ko-r32-1': { homeScore: null, awayScore: null }, // Winner Group A vs 3rd Place Group C/D/E
  'ko-r32-2': { homeScore: null, awayScore: null }, // Runner-up Group A vs Runner-up Group B
  'ko-r32-3': { homeScore: null, awayScore: null }, // Winner Group B vs 3rd Place Group E/F/G
  'ko-r32-4': { homeScore: null, awayScore: null }, // Winner Group C vs Runner-up Group D
  'ko-r32-5': { homeScore: null, awayScore: null }, // Winner Group D vs 3rd Place Group A/B/F
  'ko-r32-6': { homeScore: null, awayScore: null }, // Runner-up Group C vs Runner-up Group E
  'ko-r32-7': { homeScore: null, awayScore: null }, // Winner Group E vs Runner-up Group F
  'ko-r32-8': { homeScore: null, awayScore: null }, // Winner Group F vs Runner-up Group G
  'ko-r32-9': { homeScore: null, awayScore: null }, // Winner Group G vs 3rd Place Group A/H/I
  'ko-r32-10': { homeScore: null, awayScore: null }, // Runner-up Group D vs Runner-up Group H
  'ko-r32-11': { homeScore: null, awayScore: null }, // Winner Group H vs 3rd Place Group J/K/L
  'ko-r32-12': { homeScore: null, awayScore: null }, // Winner Group I vs Runner-up Group J
  'ko-r32-13': { homeScore: null, awayScore: null }, // Winner Group J vs Runner-up Group K
  'ko-r32-14': { homeScore: null, awayScore: null }, // Runner-up Group F vs Runner-up Group L
  'ko-r32-15': { homeScore: null, awayScore: null }, // Winner Group K vs 3rd Place Group D/E/J
  'ko-r32-16': { homeScore: null, awayScore: null }, // Winner Group L vs 3rd Place Group E/H/I

  // Round of 16 (+4 pts bonus)
  'ko-r16-1': { homeScore: null, awayScore: null }, // Winner r32-1 vs Winner r32-2
  'ko-r16-2': { homeScore: null, awayScore: null }, // Winner r32-3 vs Winner r32-4
  'ko-r16-3': { homeScore: null, awayScore: null }, // Winner r32-5 vs Winner r32-6
  'ko-r16-4': { homeScore: null, awayScore: null }, // Winner r32-7 vs Winner r32-8
  'ko-r16-5': { homeScore: null, awayScore: null }, // Winner r32-9 vs Winner r32-10
  'ko-r16-6': { homeScore: null, awayScore: null }, // Winner r32-11 vs Winner r32-12
  'ko-r16-7': { homeScore: null, awayScore: null }, // Winner r32-13 vs Winner r32-14
  'ko-r16-8': { homeScore: null, awayScore: null }, // Winner r32-15 vs Winner r32-16

  // Quarter Finals (+6 pts bonus)
  'ko-qf-1': { homeScore: null, awayScore: null }, // Winner r16-1 vs Winner r16-2
  'ko-qf-2': { homeScore: null, awayScore: null }, // Winner r16-3 vs Winner r16-4
  'ko-qf-3': { homeScore: null, awayScore: null }, // Winner r16-5 vs Winner r16-6
  'ko-qf-4': { homeScore: null, awayScore: null }, // Winner r16-7 vs Winner r16-8

  // Semi Finals (+9 pts bonus)
  'ko-sf-1': { homeScore: null, awayScore: null }, // Winner qf-1 vs Winner qf-2
  'ko-sf-2': { homeScore: null, awayScore: null }, // Winner qf-3 vs Winner qf-4

  // 3rd Place Playoff
  'ko-3rd': { homeScore: null, awayScore: null }, // Loser sf-1 vs Loser sf-2

  // Grand Final (+15 pts to Winner, +12 pts to Runner Up)
  'ko-final': { homeScore: null, awayScore: null } // Winner sf-1 vs Winner sf-2
};

// Set this to true to use hardcoded scores, false to use API data
const USE_HARDCODED_SCORES = true;
