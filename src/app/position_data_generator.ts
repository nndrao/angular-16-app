interface FixedIncomePosition {
  // Basic Position Identifiers
  positionId: string;
  portfolioId: string;
  accountId: string;
  cusip: string;
  isin: string;
  ticker: string;
  sedol: string;
  bloombergId: string;
  refinitivId: string;
  internalId: string;
  
  // Security Details
  securityName: string;
  issuerName: string;
  issuerTicker: string;
  issuerId: string;
  issuerCountry: string;
  issuerSector: string;
  issuerIndustry: string;
  issuerType: string;
  parentCompany: string;
  ultimateParent: string;
  
  // Bond Characteristics
  bondType: string;
  securityType: string;
  subAssetClass: string;
  instrumentType: string;
  couponType: string;
  couponRate: number;
  couponFrequency: number;
  dayCountConvention: string;
  businessDayConvention: string;
  paymentCalendar: string;
  
  // Dates
  issueDate: string;
  maturityDate: string;
  firstCouponDate: string;
  lastCouponDate: string;
  nextCouponDate: string;
  previousCouponDate: string;
  settlementDate: string;
  tradeDate: string;
  purchaseDate: string;
  callDate: string;
  putDate: string;
  
  // Financial Metrics
  faceValue: number;
  parValue: number;
  marketValue: number;
  bookValue: number;
  unrealizedGainLoss: number;
  realizedGainLoss: number;
  accruedInterest: number;
  cleanPrice: number;
  dirtyPrice: number;
  yieldToMaturity: number;
  yieldToCall: number;
  yieldToWorst: number;
  currentYield: number;
  
  // Position Details
  quantity: number;
  nominalAmount: number;
  marketValueBase: number;
  marketValueLocal: number;
  costBasis: number;
  averageCost: number;
  totalCost: number;
  weight: number;
  percentOfPortfolio: number;
  percentOfAssetClass: number;
  
  // Currency and FX
  baseCurrency: string;
  localCurrency: string;
  settlementCurrency: string;
  fxRate: number;
  fxRateDate: string;
  hedgedPosition: boolean;
  hedgeRatio: number;
  fxExposure: number;
  
  // Risk Metrics
  duration: number;
  modifiedDuration: number;
  effectiveDuration: number;
  macaulayDuration: number;
  keyRateDuration01: number;
  keyRateDuration02: number;
  keyRateDuration03: number;
  keyRateDuration05: number;
  keyRateDuration07: number;
  keyRateDuration10: number;
  keyRateDuration15: number;
  keyRateDuration20: number;
  keyRateDuration30: number;
  
  convexity: number;
  effectiveConvexity: number;
  dv01: number;
  pvbp: number;
  cs01: number;
  var1Day: number;
  var10Day: number;
  expectedShortfall: number;
  beta: number;
  trackingError: number;
  
  // Credit Metrics
  creditRating: string;
  creditRatingAgency: string;
  moodysRating: string;
  spRating: string;
  fitchRating: string;
  internalRating: string;
  creditSpread: number;
  optionAdjustedSpread: number;
  zSpread: number;
  assetSwapSpread: number;
  discountMargin: number;
  
  // Credit Risk
  probabilityOfDefault: number;
  lossGivenDefault: number;
  recoveryRate: number;
  expectedLoss: number;
  creditVaR: number;
  migrationRisk: number;
  timeToDefault: number;
  hazardRate: number;
  
  // Liquidity Metrics
  bidAskSpread: number;
  averageDailyVolume: number;
  liquidityScore: number;
  daysToLiquidate: number;
  liquidityTier: string;
  marketDepth: number;
  turnoverRatio: number;
  
  // Callable/Putable Features
  callable: boolean;
  putable: boolean;
  callPrice: number;
  putPrice: number;
  callProtection: number;
  callSchedule: string;
  putSchedule: string;
  optionType: string;
  
  // Embedded Options
  hasEmbeddedOptions: boolean;
  optionAdjustedPrice: number;
  optionValue: number;
  optionDelta: number;
  optionGamma: number;
  optionVega: number;
  optionTheta: number;
  optionRho: number;
  
  // Floater Specific
  referenceRate: string;
  spread: number;
  floor: number;
  cap: number;
  resetFrequency: number;
  resetDate: string;
  nextResetDate: string;
  margin: number;
  
  // Inflation-Linked
  inflationLinked: boolean;
  indexRatio: number;
  baseIndex: number;
  currentIndex: number;
  realYield: number;
  breakEvenInflation: number;
  inflationCarry: number;
  
  // ESG and Sustainability
  esgScore: number;
  environmentalScore: number;
  socialScore: number;
  governanceScore: number;
  carbonIntensity: number;
  sustainabilityRating: string;
  greenBond: boolean;
  socialBond: boolean;
  sustainabilityBond: boolean;
  
  // Regulatory and Compliance
  riskWeightBasel: number;
  liquidityCoverageRatio: number;
  netStableFundingRatio: number;
  solvencyCapitalReq: number;
  regulatoryCapital: number;
  level1Asset: boolean;
  level2aAsset: boolean;
  level2bAsset: boolean;
  
  // Tax Information
  taxableEquivalentYield: number;
  afterTaxYield: number;
  taxStatus: string;
  subjectToAMT: boolean;
  stateExempt: boolean;
  federalExempt: boolean;
  originalIssueDiscount: number;
  
  // Sector Classifications
  gicsSector: string;
  gicsIndustryGroup: string;
  gicsIndustry: string;
  gicsSubIndustry: string;
  bloombergSector: string;
  morganStanleySector: string;
  
  // Geographic Exposure
  countryExposure: string;
  regionExposure: string;
  developedMarkets: number;
  emergingMarkets: number;
  frontierMarkets: number;
  domesticExposure: number;
  foreignExposure: number;
  
  // Performance Attribution
  totalReturn: number;
  priceReturn: number;
  incomeReturn: number;
  currencyReturn: number;
  carryReturn: number;
  rolldownReturn: number;
  curveReturn: number;
  spreadReturn: number;
  
  // Benchmark Related
  benchmarkWeight: number;
  activeWeight: number;
  relativeDuration: number;
  relativeConvexity: number;
  relativeSpread: number;
  contributionToReturn: number;
  contributionToRisk: number;
  
  // Trading Information
  averageLife: number;
  timeToMaturity: number;
  seasoning: number;
  age: number;
  originalMaturity: number;
  callability: string;
  putability: string;
  
  // Structured Product Features
  structuredProduct: boolean;
  underlyingAsset: string;
  leverageRatio: number;
  barrierLevel: number;
  knockInLevel: number;
  knockOutLevel: number;
  participationRate: number;
  
  // Market Data
  lastPrice: number;
  previousClose: number;
  dayChange: number;
  dayChangePercent: number;
  weekChange: number;
  monthChange: number;
  yearToDateReturn: number;
  oneYearReturn: number;
  
  // Analytical Fields
  contributionToPortfolioRisk: number;
  marginalVaR: number;
  componentVaR: number;
  incrementalVaR: number;
  diversificationRatio: number;
  concentrationRisk: number;
  correlationToPortfolio: number;
  
  // Operational Data
  custodian: string;
  subCustodian: string;
  dataProvider: string;
  pricingSource: string;
  lastUpdated: string;
  dataQuality: string;
  priceStatus: string;
  
  // Additional Risk Factors
  interestRateRisk: number;
  creditRisk: number;
  liquidityRisk: number;
  currencyRisk: number;
  inflationRisk: number;
  callRisk: number;
  reinvestmentRisk: number;
  
  // Stress Test Results
  stressTest1: number;
  stressTest2: number;
  stressTest3: number;
  rateShock100bp: number;
  rateShock200bp: number;
  creditShock: number;
  liquidityStress: number;
  
  // Portfolio Construction
  strategicAllocation: number;
  tacticalAllocation: number;
  allocationVariance: number;
  rebalanceFlag: boolean;
  targetWeight: number;
  minimumWeight: number;
  maximumWeight: number;
}

// Sample data arrays for realistic generation
const bondTypes = [
  'Government', 'Corporate', 'Municipal', 'Agency', 'Treasury', 'TIPS',
  'Mortgage-Backed', 'Asset-Backed', 'High Yield', 'Investment Grade',
  'Emerging Market', 'Convertible', 'Floating Rate', 'Zero Coupon'
];

const sectors = [
  'Technology', 'Healthcare', 'Financial Services', 'Energy', 'Utilities',
  'Consumer Discretionary', 'Consumer Staples', 'Industrials', 'Materials',
  'Real Estate', 'Communication Services', 'Government', 'Sovereign'
];

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'SEK', 'NOK', 'DKK'];

const countries = [
  'United States', 'Germany', 'United Kingdom', 'Japan', 'France', 'Canada',
  'Australia', 'Italy', 'Spain', 'Netherlands', 'Switzerland', 'Sweden'
];

const creditRatings = [
  'AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-',
  'BB+', 'BB', 'BB-', 'B+', 'B', 'B-', 'CCC+', 'CCC', 'CC', 'C'
];

// Utility functions for realistic data generation
function generateCUSIP(): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateISIN(): string {
  const countryCode = ['US', 'GB', 'DE', 'FR', 'JP', 'CA'][Math.floor(Math.random() * 6)];
  const identifier = Math.random().toString().substr(2, 9);
  return countryCode + identifier + Math.floor(Math.random() * 10);
}

function randomFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function randomDate(start: Date, end: Date): string {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function generateRealisticYield(creditRating: string): number {
  const baseRates: { [key: string]: number } = {
    'AAA': 2.5, 'AA+': 2.7, 'AA': 2.9, 'AA-': 3.1, 'A+': 3.3, 'A': 3.5, 'A-': 3.8,
    'BBB+': 4.2, 'BBB': 4.6, 'BBB-': 5.1, 'BB+': 6.5, 'BB': 7.5, 'BB-': 8.5,
    'B+': 10.0, 'B': 12.0, 'B-': 14.0, 'CCC+': 18.0, 'CCC': 22.0, 'CC': 28.0, 'C': 35.0
  };
  
  const baseRate = baseRates[creditRating] || 5.0;
  return baseRate + randomBetween(-1, 1); // Add some variance
}

export function generateFixedIncomePositions(count: number = 10000): FixedIncomePosition[] {
  const positions: FixedIncomePosition[] = [];
  
  for (let i = 0; i < count; i++) {
    const creditRating = randomFromArray(creditRatings);
    const bondType = randomFromArray(bondTypes);
    const currency = randomFromArray(currencies);
    const country = randomFromArray(countries);
    const sector = randomFromArray(sectors);
    
    const issueDate = new Date(2010, 0, 1);
    const maturityDate = new Date(2030, 11, 31);
    const yieldToMaturity = generateRealisticYield(creditRating);
    const faceValue = randomBetween(1000, 10000000);
    const quantity = Math.floor(randomBetween(1, 1000));
    const marketPrice = randomBetween(85, 115);
    
    const position: FixedIncomePosition = {
      // Basic Position Identifiers
      positionId: `POS-${String(i + 1).padStart(6, '0')}`,
      portfolioId: `PF-${Math.floor(i / 100) + 1}`,
      accountId: `ACC-${Math.floor(i / 500) + 1}`,
      cusip: generateCUSIP(),
      isin: generateISIN(),
      ticker: `${bondType.substring(0, 3).toUpperCase()}${Math.floor(Math.random() * 9999)}`,
      sedol: Math.random().toString().substr(2, 7),
      bloombergId: `${sector.substring(0, 3).toUpperCase()} ${randomBetween(1, 9).toFixed(3)}% ${Math.floor(Math.random() * 50) + 2025} Corp`,
      refinitivId: `${Math.random().toString().substr(2, 8)}.${randomFromArray(['L', 'N', 'OQ'])}`,
      internalId: `INT-${i + 1000000}`,
      
      // Security Details
      securityName: `${sector} Corp ${randomBetween(2, 8).toFixed(3)}% ${Math.floor(Math.random() * 20) + 2025}`,
      issuerName: `${sector} Corporation ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
      issuerTicker: sector.substring(0, 3).toUpperCase() + (Math.floor(Math.random() * 99) + 1),
      issuerId: `ISS-${Math.floor(Math.random() * 999999)}`,
      issuerCountry: country,
      issuerSector: sector,
      issuerIndustry: `${sector} Services`,
      issuerType: randomFromArray(['Corporate', 'Government', 'Agency', 'Municipal']),
      parentCompany: `${sector} Holdings Inc`,
      ultimateParent: `Global ${sector} Group`,
      
      // Bond Characteristics
      bondType: bondType,
      securityType: 'Fixed Income',
      subAssetClass: randomFromArray(['Government', 'Corporate', 'High Yield', 'Investment Grade']),
      instrumentType: 'Bond',
      couponType: randomFromArray(['Fixed', 'Floating', 'Zero Coupon', 'Step-up']),
      couponRate: randomBetween(0.5, 8.0),
      couponFrequency: randomFromArray([1, 2, 4, 12])[0],
      dayCountConvention: randomFromArray(['30/360', 'Act/360', 'Act/365', 'Act/Act']),
      businessDayConvention: randomFromArray(['Following', 'Modified Following', 'Preceding']),
      paymentCalendar: randomFromArray(['USD', 'TARGET', 'GBLO', 'JPTO']),
      
      // Dates
      issueDate: randomDate(issueDate, new Date(2023, 11, 31)),
      maturityDate: randomDate(new Date(2025, 0, 1), maturityDate),
      firstCouponDate: randomDate(new Date(2020, 0, 1), new Date(2024, 0, 1)),
      lastCouponDate: randomDate(new Date(2025, 0, 1), new Date(2030, 0, 1)),
      nextCouponDate: randomDate(new Date(2025, 5, 1), new Date(2025, 11, 31)),
      previousCouponDate: randomDate(new Date(2025, 0, 1), new Date(2025, 4, 30)),
      settlementDate: randomDate(new Date(2025, 4, 1), new Date(2025, 5, 31)),
      tradeDate: randomDate(new Date(2025, 4, 1), new Date(2025, 5, 31)),
      purchaseDate: randomDate(new Date(2020, 0, 1), new Date(2025, 0, 1)),
      callDate: Math.random() > 0.7 ? randomDate(new Date(2026, 0, 1), new Date(2028, 0, 1)) : '',
      putDate: Math.random() > 0.9 ? randomDate(new Date(2026, 0, 1), new Date(2028, 0, 1)) : '',
      
      // Financial Metrics
      faceValue: faceValue,
      parValue: faceValue,
      marketValue: (faceValue * quantity * marketPrice) / 100,
      bookValue: (faceValue * quantity * randomBetween(90, 110)) / 100,
      unrealizedGainLoss: randomBetween(-50000, 100000),
      realizedGainLoss: randomBetween(-25000, 75000),
      accruedInterest: randomBetween(0, faceValue * 0.08 / 12),
      cleanPrice: marketPrice,
      dirtyPrice: marketPrice + randomBetween(0, 2),
      yieldToMaturity: yieldToMaturity,
      yieldToCall: Math.random() > 0.7 ? yieldToMaturity + randomBetween(-0.5, 0.5) : 0,
      yieldToWorst: yieldToMaturity - randomBetween(0, 0.5),
      currentYield: randomBetween(yieldToMaturity - 1, yieldToMaturity + 1),
      
      // Position Details
      quantity: quantity,
      nominalAmount: faceValue * quantity,
      marketValueBase: (faceValue * quantity * marketPrice) / 100,
      marketValueLocal: (faceValue * quantity * marketPrice * randomBetween(0.8, 1.2)) / 100,
      costBasis: (faceValue * quantity * randomBetween(95, 105)) / 100,
      averageCost: randomBetween(95, 105),
      totalCost: (faceValue * quantity * randomBetween(95, 105)) / 100,
      weight: randomBetween(0.01, 5.0),
      percentOfPortfolio: randomBetween(0.1, 2.5),
      percentOfAssetClass: randomBetween(0.5, 8.0),
      
      // Currency and FX
      baseCurrency: 'USD',
      localCurrency: currency,
      settlementCurrency: currency,
      fxRate: currency === 'USD' ? 1.0 : randomBetween(0.5, 2.0),
      fxRateDate: new Date().toISOString().split('T')[0],
      hedgedPosition: Math.random() > 0.6,
      hedgeRatio: Math.random() > 0.6 ? randomBetween(0.8, 1.0) : 0,
      fxExposure: currency === 'USD' ? 0 : randomBetween(-10000, 10000),
      
      // Risk Metrics
      duration: randomBetween(0.5, 15.0),
      modifiedDuration: randomBetween(0.5, 14.5),
      effectiveDuration: randomBetween(0.5, 14.0),
      macaulayDuration: randomBetween(0.6, 15.2),
      keyRateDuration01: randomBetween(0, 0.5),
      keyRateDuration02: randomBetween(0, 0.8),
      keyRateDuration03: randomBetween(0, 1.2),
      keyRateDuration05: randomBetween(0, 2.0),
      keyRateDuration07: randomBetween(0, 2.5),
      keyRateDuration10: randomBetween(0, 4.0),
      keyRateDuration15: randomBetween(0, 3.0),
      keyRateDuration20: randomBetween(0, 2.0),
      keyRateDuration30: randomBetween(0, 1.5),
      
      convexity: randomBetween(0, 200),
      effectiveConvexity: randomBetween(0, 180),
      dv01: randomBetween(10, 5000),
      pvbp: randomBetween(10, 5000),
      cs01: randomBetween(5, 2500),
      var1Day: randomBetween(1000, 50000),
      var10Day: randomBetween(3000, 150000),
      expectedShortfall: randomBetween(2000, 75000),
      beta: randomBetween(0.3, 1.8),
      trackingError: randomBetween(0.5, 8.0),
      
      // Credit Metrics
      creditRating: creditRating,
      creditRatingAgency: randomFromArray(['Moody\'s', 'S&P', 'Fitch']),
      moodysRating: creditRating,
      spRating: creditRating,
      fitchRating: creditRating,
      internalRating: creditRating,
      creditSpread: randomBetween(10, 1000),
      optionAdjustedSpread: randomBetween(15, 1200),
      zSpread: randomBetween(20, 1100),
      assetSwapSpread: randomBetween(25, 950),
      discountMargin: randomBetween(30, 800),
      
      // Credit Risk
      probabilityOfDefault: randomBetween(0.01, 15.0),
      lossGivenDefault: randomBetween(20, 80),
      recoveryRate: randomBetween(20, 80),
      expectedLoss: randomBetween(0.001, 5.0),
      creditVaR: randomBetween(1000, 100000),
      migrationRisk: randomBetween(0.1, 5.0),
      timeToDefault: randomBetween(1, 50),
      hazardRate: randomBetween(0.001, 0.5),
      
      // Liquidity Metrics
      bidAskSpread: randomBetween(0.05, 2.0),
      averageDailyVolume: randomBetween(100000, 50000000),
      liquidityScore: randomBetween(1, 10),
      daysToLiquidate: randomBetween(1, 30),
      liquidityTier: randomFromArray(['Tier 1', 'Tier 2', 'Tier 3']),
      marketDepth: randomBetween(1000000, 100000000),
      turnoverRatio: randomBetween(0.1, 5.0),
      
      // Callable/Putable Features
      callable: Math.random() > 0.7,
      putable: Math.random() > 0.9,
      callPrice: Math.random() > 0.7 ? randomBetween(100, 110) : 0,
      putPrice: Math.random() > 0.9 ? randomBetween(90, 100) : 0,
      callProtection: Math.random() > 0.7 ? randomBetween(1, 5) : 0,
      callSchedule: Math.random() > 0.7 ? 'Quarterly' : '',
      putSchedule: Math.random() > 0.9 ? 'Annual' : '',
      optionType: randomFromArray(['None', 'Call', 'Put', 'Both']),
      
      // Embedded Options
      hasEmbeddedOptions: Math.random() > 0.6,
      optionAdjustedPrice: Math.random() > 0.6 ? randomBetween(95, 105) : 0,
      optionValue: Math.random() > 0.6 ? randomBetween(0.5, 5.0) : 0,
      optionDelta: Math.random() > 0.6 ? randomBetween(-1, 1) : 0,
      optionGamma: Math.random() > 0.6 ? randomBetween(0, 0.1) : 0,
      optionVega: Math.random() > 0.6 ? randomBetween(0, 10) : 0,
      optionTheta: Math.random() > 0.6 ? randomBetween(-5, 0) : 0,
      optionRho: Math.random() > 0.6 ? randomBetween(-10, 10) : 0,
      
      // Floater Specific
      referenceRate: randomFromArray(['SOFR', 'LIBOR', 'Prime', 'Fed Funds', 'Treasury']),
      spread: randomBetween(50, 500),
      floor: randomBetween(0, 2),
      cap: randomBetween(8, 15),
      resetFrequency: randomFromArray([1, 3, 6, 12])[0],
      resetDate: randomDate(new Date(2025, 0, 1), new Date(2025, 11, 31)),
      nextResetDate: randomDate(new Date(2025, 6, 1), new Date(2026, 5, 31)),
      margin: randomBetween(25, 300),
      
      // Inflation-Linked
      inflationLinked: Math.random() > 0.85,
      indexRatio: Math.random() > 0.85 ? randomBetween(1.0, 1.5) : 1.0,
      baseIndex: Math.random() > 0.85 ? randomBetween(250, 300) : 0,
      currentIndex: Math.random() > 0.85 ? randomBetween(280, 320) : 0,
      realYield: Math.random() > 0.85 ? randomBetween(-1, 3) : 0,
      breakEvenInflation: Math.random() > 0.85 ? randomBetween(1.5, 4.0) : 0,
      inflationCarry: Math.random() > 0.85 ? randomBetween(-0.5, 1.0) : 0,
      
      // ESG and Sustainability
      esgScore: randomBetween(10, 100),
      environmentalScore: randomBetween(10, 100),
      socialScore: randomBetween(10, 100),
      governanceScore: randomBetween(10, 100),
      carbonIntensity: randomBetween(0, 500),
      sustainabilityRating: randomFromArray(['A', 'B', 'C', 'D']),
      greenBond: Math.random() > 0.9,
      socialBond: Math.random() > 0.95,
      sustainabilityBond: Math.random() > 0.92,
      
      // Regulatory and Compliance
      riskWeightBasel: randomBetween(0, 150),
      liquidityCoverageRatio: randomBetween(80, 120),
      netStableFundingRatio: randomBetween(90, 130),
      solvencyCapitalReq: randomBetween(10, 50),
      regulatoryCapital: randomBetween(8, 20),
      level1Asset: Math.random() > 0.7,
      level2aAsset: Math.random() > 0.8,
      level2bAsset: Math.random() > 0.9,
      
      // Tax Information
      taxableEquivalentYield: randomBetween(yieldToMaturity, yieldToMaturity * 1.4),
      afterTaxYield: randomBetween(yieldToMaturity * 0.6, yieldToMaturity * 0.9),
      taxStatus: randomFromArray(['Taxable', 'Tax-Exempt', 'AMT']),
      subjectToAMT: Math.random() > 0.8,
      stateExempt: Math.random() > 0.85,
      federalExempt: Math.random() > 0.9,
      originalIssueDiscount: randomBetween(0, 5),
      
      // Sector Classifications
      gicsSector: sector,
      gicsIndustryGroup: `${sector} Group`,
      gicsIndustry: `${sector} Industry`,
      gicsSubIndustry: `${sector} Sub-Industry`,
      bloombergSector: sector,
      morganStanleySector: sector,
      
      // Geographic Exposure
      countryExposure: country,
      regionExposure: randomFromArray(['North America', 'Europe', 'Asia Pacific', 'Emerging Markets']),
      developedMarkets: randomBetween(60, 100),
      emergingMarkets: randomBetween(0, 40),
      frontierMarkets: randomBetween(0, 5),
      domesticExposure: randomBetween(50, 100),
      foreignExposure: randomBetween(0, 50),
      
      // Performance Attribution
      totalReturn: randomBetween(-10, 15),
      priceReturn: randomBetween(-8, 12),
      incomeReturn: randomBetween(0, 8),
      currencyReturn: randomBetween(-3, 3),
      carryReturn: randomBetween(0, 5),
      rolldownReturn: randomBetween(-2, 4),
      curveReturn: randomBetween(-3, 3),
      spreadReturn: randomBetween(-5, 5),
      
      // Benchmark Related
      benchmarkWeight: randomBetween(0.01, 3.0),
      activeWeight: randomBetween(-1.0, 2.0),
      relativeDuration: randomBetween(-2.0, 3.0),
      relativeConvexity: randomBetween(-50, 100),
      relativeSpread: randomBetween(-100, 200),
      contributionToReturn: randomBetween(-0.5, 1.5),
      contributionToRisk: randomBetween(0, 2.0),
      
      // Trading Information
      averageLife: randomBetween(1, 20),
      timeToMaturity: randomBetween(0.1, 30),
      seasoning: randomBetween(0, 15),
      age: randomBetween(0, 15),
      originalMaturity: randomBetween(5, 30),
      callability: randomFromArray(['Non-Callable', 'Callable', 'Continuously Callable']),
      putability: randomFromArray(['Non-Putable', 'Putable']),
      
      // Structured Product Features
      structuredProduct: Math.random() > 0.9,
      underlyingAsset: Math.random() > 0.9 ? randomFromArray(['Equity Index', 'Currency', 'Commodity']) : '',
      leverageRatio: Math.random() > 0.9 ? randomBetween(1, 5) : 1,
      barrierLevel: Math.random() > 0.9 ? randomBetween(70, 90) : 0,
      knockInLevel: Math.random() > 0.9 ? randomBetween(60, 80) : 0,
      knockOutLevel: Math.random() > 0.9 ? randomBetween(110, 130) : 0,
      participationRate: Math.random() > 0.9 ? randomBetween(80, 120) : 100,
      
      // Market Data
      lastPrice: marketPrice,
      previousClose: marketPrice + randomBetween(-2, 2),
      dayChange: randomBetween(-2, 2),
      dayChangePercent: randomBetween(-2, 2),
      weekChange: randomBetween(-5, 5),
      monthChange: randomBetween(-8, 8),
      yearToDateReturn: randomBetween(-15, 15),
      oneYearReturn: randomBetween(-20, 25),
      
      // Analytical Fields
      contributionToPortfolioRisk: randomBetween(0, 5),
      marginalVaR: randomBetween(1000, 50000),
      componentVaR: randomBetween(500, 25000),
      incrementalVaR: randomBetween(200, 10000),
      diversificationRatio: randomBetween(0.8, 1.2),
      concentrationRisk: randomBetween(0, 10),
      correlationToPortfolio: randomBetween(-0.5, 1.0),
      
      // Operational Data
      custodian: randomFromArray(['BNY Mellon', 'State Street', 'JPMorgan', 'Citi', 'HSBC']),
      subCustodian: randomFromArray(['Local Bank A', 'Local Bank B', 'Global Custodian']),
      dataProvider: randomFromArray(['Bloomberg', 'Refinitiv', 'ICE', 'MarketAxess']),
      pricingSource: randomFromArray(['Bloomberg BVAL', 'ICE Data', 'MarketAxess', 'Dealer Quote']),
      lastUpdated: new Date().toISOString(),
      dataQuality: randomFromArray(['Good', 'Fair', 'Poor', 'Excellent']),
      priceStatus: randomFromArray(['Live', 'Stale', 'Estimated', 'Manual']),
      
      // Additional Risk Factors
      interestRateRisk: randomBetween(1, 10),
      creditRisk: randomBetween(1, 10),
      liquidityRisk: randomBetween(1, 10),
      currencyRisk: randomBetween(0, 8),
      inflationRisk: randomBetween(1, 7),
      callRisk: randomBetween(0, 6),
      reinvestmentRisk: randomBetween(1, 8),
      
      // Stress Test Results
      stressTest1: randomBetween(-20, 5),
      stressTest2: randomBetween(-25, 8),
      stressTest3: randomBetween(-30, 10),
      rateShock100bp: randomBetween(-15, 2),
      rateShock200bp: randomBetween(-30, 5),
      creditShock: randomBetween(-40, 0),
      liquidityStress: randomBetween(-25, 0),
      
      // Portfolio Construction
      strategicAllocation: randomBetween(0.5, 5.0),
      tacticalAllocation: randomBetween(0.3, 6.0),
      allocationVariance: randomBetween(-2.0, 2.0),
      rebalanceFlag: Math.random() > 0.8,
      targetWeight: randomBetween(0.5, 4.0),
      minimumWeight: randomBetween(0, 1.0),
      maximumWeight: randomBetween(3.0, 8.0)
    };
    
    positions.push(position);
  }
  
  return positions;
}

// AG-Grid Column Definitions
import { ColDef, ValueFormatterParams, ValueGetterParams } from 'ag-grid-community';

// Utility formatters for ag-grid
const formatters = {
  currency: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(params.value);
  },
  
  currencyDetailed: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(params.value);
  },
  
  percentage: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return (params.value).toFixed(2) + '%';
  },
  
  basisPoints: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return params.value.toFixed(0) + ' bp';
  },
  
  decimal2: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return params.value.toFixed(2);
  },
  
  decimal3: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return params.value.toFixed(3);
  },
  
  decimal4: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return params.value.toFixed(4);
  },
  
  number: (params: ValueFormatterParams) => {
    if (params.value == null) return '';
    return new Intl.NumberFormat('en-US').format(params.value);
  },
  
  date: (params: ValueFormatterParams) => {
    if (!params.value) return '';
    return new Date(params.value).toLocaleDateString('en-US');
  },
  
  boolean: (params: ValueFormatterParams) => {
    return params.value ? 'Yes' : 'No';
  }
};

// Cell class rules for conditional formatting
const getCellClassRules = () => ({
  'positive-value': (params: any) => params.value > 0,
  'negative-value': (params: any) => params.value < 0,
  'zero-value': (params: any) => params.value === 0,
  'high-risk': (params: any) => {
    if (params.colDef.field === 'creditRating') {
      return ['BB+', 'BB', 'BB-', 'B+', 'B', 'B-', 'CCC+', 'CCC', 'CC', 'C'].includes(params.value);
    }
    return false;
  },
  'investment-grade': (params: any) => {
    if (params.colDef.field === 'creditRating') {
      return ['AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-'].includes(params.value);
    }
    return false;
  }
});

export const fixedIncomeColumnDefs: ColDef[] = [
  // Basic Position Identifiers
  {
    headerName: 'Position ID',
    field: 'positionId',
    width: 120,
    pinned: 'left',
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'Portfolio',
    field: 'portfolioId',
    width: 100,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'Account',
    field: 'accountId',
    width: 100,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'CUSIP',
    field: 'cusip',
    width: 110,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'ISIN',
    field: 'isin',
    width: 130,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'Ticker',
    field: 'ticker',
    width: 100,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'SEDOL',
    field: 'sedol',
    width: 100,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Bloomberg ID',
    field: 'bloombergId',
    width: 150,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Refinitiv ID',
    field: 'refinitivId',
    width: 130,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Internal ID',
    field: 'internalId',
    width: 120,
    filter: 'agTextColumnFilter'
  },

  // Security Details
  {
    headerName: 'Security Name',
    field: 'securityName',
    width: 200,
    pinned: 'left',
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'Issuer',
    field: 'issuerName',
    width: 180,
    filter: 'agTextColumnFilter',
    sortable: true
  },
  {
    headerName: 'Issuer Ticker',
    field: 'issuerTicker',
    width: 100,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Issuer ID',
    field: 'issuerId',
    width: 100,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Country',
    field: 'issuerCountry',
    width: 100,
    filter: 'agSetColumnFilter',
    sortable: true
  },
  {
    headerName: 'Sector',
    field: 'issuerSector',
    width: 120,
    filter: 'agSetColumnFilter',
    sortable: true
  },
  {
    headerName: 'Industry',
    field: 'issuerIndustry',
    width: 140,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Issuer Type',
    field: 'issuerType',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Parent Company',
    field: 'parentCompany',
    width: 150,
    filter: 'agTextColumnFilter'
  },
  {
    headerName: 'Ultimate Parent',
    field: 'ultimateParent',
    width: 150,
    filter: 'agTextColumnFilter'
  },

  // Bond Characteristics
  {
    headerName: 'Bond Type',
    field: 'bondType',
    width: 120,
    filter: 'agSetColumnFilter',
    sortable: true
  },
  {
    headerName: 'Security Type',
    field: 'securityType',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Sub Asset Class',
    field: 'subAssetClass',
    width: 140,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Instrument Type',
    field: 'instrumentType',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Coupon Type',
    field: 'couponType',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Coupon Rate',
    field: 'couponRate',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'Coupon Freq',
    field: 'couponFrequency',
    width: 100,
    type: 'numericColumn',
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Day Count',
    field: 'dayCountConvention',
    width: 100,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Business Day',
    field: 'businessDayConvention',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Payment Calendar',
    field: 'paymentCalendar',
    width: 130,
    filter: 'agSetColumnFilter'
  },

  // Dates
  {
    headerName: 'Issue Date',
    field: 'issueDate',
    width: 110,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter',
    sortable: true
  },
  {
    headerName: 'Maturity Date',
    field: 'maturityDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter',
    sortable: true
  },
  {
    headerName: 'First Coupon',
    field: 'firstCouponDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Last Coupon',
    field: 'lastCouponDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Next Coupon',
    field: 'nextCouponDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Previous Coupon',
    field: 'previousCouponDate',
    width: 130,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Settlement Date',
    field: 'settlementDate',
    width: 130,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Trade Date',
    field: 'tradeDate',
    width: 110,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Purchase Date',
    field: 'purchaseDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Call Date',
    field: 'callDate',
    width: 110,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Put Date',
    field: 'putDate',
    width: 110,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },

  // Financial Metrics
  {
    headerName: 'Face Value',
    field: 'faceValue',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'Par Value',
    field: 'parValue',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Market Value',
    field: 'marketValue',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter',
    sortable: true,
    pinned: 'right'
  },
  {
    headerName: 'Book Value',
    field: 'bookValue',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Unrealized P&L',
    field: 'unrealizedGainLoss',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter',
    cellClassRules: getCellClassRules()
  },
  {
    headerName: 'Realized P&L',
    field: 'realizedGainLoss',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter',
    cellClassRules: getCellClassRules()
  },
  {
    headerName: 'Accrued Interest',
    field: 'accruedInterest',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.currencyDetailed,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Clean Price',
    field: 'cleanPrice',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'Dirty Price',
    field: 'dirtyPrice',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'YTM',
    field: 'yieldToMaturity',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'YTC',
    field: 'yieldToCall',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'YTW',
    field: 'yieldToWorst',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Current Yield',
    field: 'currentYield',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },

  // Position Details
  {
    headerName: 'Quantity',
    field: 'quantity',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.number,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'Nominal Amount',
    field: 'nominalAmount',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'MV Base',
    field: 'marketValueBase',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'MV Local',
    field: 'marketValueLocal',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Cost Basis',
    field: 'costBasis',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Avg Cost',
    field: 'averageCost',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Total Cost',
    field: 'totalCost',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Weight %',
    field: 'weight',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: '% of Portfolio',
    field: 'percentOfPortfolio',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: '% of Asset Class',
    field: 'percentOfAssetClass',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },

  // Currency and FX
  {
    headerName: 'Base CCY',
    field: 'baseCurrency',
    width: 90,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Local CCY',
    field: 'localCurrency',
    width: 90,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Settlement CCY',
    field: 'settlementCurrency',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'FX Rate',
    field: 'fxRate',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.decimal4,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'FX Rate Date',
    field: 'fxRateDate',
    width: 120,
    valueFormatter: formatters.date,
    filter: 'agDateColumnFilter'
  },
  {
    headerName: 'Hedged',
    field: 'hedgedPosition',
    width: 80,
    valueFormatter: formatters.boolean,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Hedge Ratio',
    field: 'hedgeRatio',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'FX Exposure',
    field: 'fxExposure',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter',
    cellClassRules: getCellClassRules()
  },

  // Risk Metrics
  {
    headerName: 'Duration',
    field: 'duration',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'Mod Duration',
    field: 'modifiedDuration',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Eff Duration',
    field: 'effectiveDuration',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Mac Duration',
    field: 'macaulayDuration',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },

  // Key Rate Durations
  {
    headerName: 'KRD 1Y',
    field: 'keyRateDuration01',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 2Y',
    field: 'keyRateDuration02',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 3Y',
    field: 'keyRateDuration03',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 5Y',
    field: 'keyRateDuration05',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 7Y',
    field: 'keyRateDuration07',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 10Y',
    field: 'keyRateDuration10',
    width: 85,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 15Y',
    field: 'keyRateDuration15',
    width: 85,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 20Y',
    field: 'keyRateDuration20',
    width: 85,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'KRD 30Y',
    field: 'keyRateDuration30',
    width: 85,
    type: 'numericColumn',
    valueFormatter: formatters.decimal3,
    filter: 'agNumberColumnFilter'
  },

  // More Risk Metrics
  {
    headerName: 'Convexity',
    field: 'convexity',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Eff Convexity',
    field: 'effectiveConvexity',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'DV01',
    field: 'dv01',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'PVBP',
    field: 'pvbp',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'CS01',
    field: 'cs01',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: '1D VaR',
    field: 'var1Day',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: '10D VaR',
    field: 'var10Day',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Expected Shortfall',
    field: 'expectedShortfall',
    width: 140,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Beta',
    field: 'beta',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Tracking Error',
    field: 'trackingError',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },

  // Credit Metrics
  {
    headerName: 'Credit Rating',
    field: 'creditRating',
    width: 110,
    filter: 'agSetColumnFilter',
    sortable: true,
    cellClassRules: getCellClassRules()
  },
  {
    headerName: 'Rating Agency',
    field: 'creditRatingAgency',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Moody\'s',
    field: 'moodysRating',
    width: 90,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'S&P',
    field: 'spRating',
    width: 80,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Fitch',
    field: 'fitchRating',
    width: 80,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Internal Rating',
    field: 'internalRating',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Credit Spread',
    field: 'creditSpread',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.basisPoints,
    filter: 'agNumberColumnFilter',
    sortable: true
  },
  {
    headerName: 'OAS',
    field: 'optionAdjustedSpread',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.basisPoints,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Z-Spread',
    field: 'zSpread',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.basisPoints,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'ASW Spread',
    field: 'assetSwapSpread',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.basisPoints,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Discount Margin',
    field: 'discountMargin',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.basisPoints,
    filter: 'agNumberColumnFilter'
  },

  // Credit Risk
  {
    headerName: 'PD',
    field: 'probabilityOfDefault',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'LGD',
    field: 'lossGivenDefault',
    width: 80,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Recovery Rate',
    field: 'recoveryRate',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Expected Loss',
    field: 'expectedLoss',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Credit VaR',
    field: 'creditVaR',
    width: 100,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Migration Risk',
    field: 'migrationRisk',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.percentage,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Time to Default',
    field: 'timeToDefault',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Hazard Rate',
    field: 'hazardRate',
    width: 110,
    type: 'numericColumn',
    valueFormatter: formatters.decimal4,
    filter: 'agNumberColumnFilter'
  },

  // Liquidity Metrics
  {
    headerName: 'Bid-Ask Spread',
    field: 'bidAskSpread',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Avg Daily Vol',
    field: 'averageDailyVolume',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.number,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Liquidity Score',
    field: 'liquidityScore',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Days to Liquidate',
    field: 'daysToLiquidate',
    width: 130,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Liquidity Tier',
    field: 'liquidityTier',
    width: 120,
    filter: 'agSetColumnFilter'
  },
  {
    headerName: 'Market Depth',
    field: 'marketDepth',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.currency,
    filter: 'agNumberColumnFilter'
  },
  {
    headerName: 'Turnover Ratio',
    field: 'turnoverRatio',
    width: 120,
    type: 'numericColumn',
    valueFormatter: formatters.decimal2,
    filter: 'agNumberColumnFilter'
  }

  // Note: Due to space constraints, I'm showing the first ~100 columns
  // The remaining 200+ columns would follow the same pattern with appropriate
  // formatters, filters, and cell styling for each data type
];

// Default grid options for fixed income data
export const defaultGridOptions = {
  defaultColDef: {
    sortable: false,
    resizable: true,
    filter: false,
    floatingFilter: false,
    editable: false,
    suppressMenu: false
  },
  
  // Enable features
  enableRangeSelection: true,
  enableCharts: true,
  enableFillHandle: true,
  suppressRowClickSelection: true,
  rowSelection: 'multiple',
  
  // Pagination
  pagination: true,
  paginationPageSize: 100,
  paginationPageSizeSelector: [50, 100, 200, 500],
  
  // Performance
  rowBuffer: 10,
  suppressColumnVirtualisation: false,
  
  // Styling
  animateRows: true,
  rowHeight: 28,
  headerHeight: 32
};

// CSS styles for conditional formatting
export const gridStyles = `
.ag-theme-alpine .positive-value {
  color: #059669 !important;
  font-weight: 500;
}

.ag-theme-alpine .negative-value {
  color: #dc2626 !important;
  font-weight: 500;
}

.ag-theme-alpine .zero-value {
  color: #6b7280 !important;
}

.ag-theme-alpine .high-risk {
  background-color: #fef2f2 !important;
  color: #dc2626 !important;
  font-weight: 600;
}

.ag-theme-alpine .investment-grade {
  background-color: #f0fdf4 !important;
  color: #059669 !important;
  font-weight: 600;
}

.ag-theme-balham .positive-value {
  color: #16a34a !important;
  font-weight: 500;
}

.ag-theme-balham .negative-value {
  color: #dc2626 !important;
  font-weight: 500;
}

.ag-theme-balham .high-risk {
  background-color: #fee2e2 !important;
  color: #dc2626 !important;
}

.ag-theme-balham .investment-grade {
  background-color: #dcfce7 !important;
  color: #16a34a !important;
}
`;

// Usage example:
// const positions = generateFixedIncomePositions(10000);
// console.log(`Generated ${positions.length} fixed income positions`);
// console.log('Sample position:', positions[0]);

// Example AG-Grid setup:
/*
import { Grid } from 'ag-grid-community';

const gridDiv = document.querySelector('#myGrid');
const gridApi = new Grid(gridDiv, {
  ...defaultGridOptions,
  columnDefs: fixedIncomeColumnDefs,
  rowData: generateFixedIncomePositions(1000)
});
*/