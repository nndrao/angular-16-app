import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, GridReadyEvent, GridApi } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';
import { faker } from '@faker-js/faker';

interface FixedIncomePosition {
  // Reference Data
  id: number;
  cusip: string;
  isin: string;
  sedol: string;
  securityName: string;
  issuer: string;
  sector: string;
  subsector: string;
  country: string;
  region: string;
  currency: string;
  rating: string;
  maturityDate: string;
  issueDate: string;
  firstCouponDate: string;
  lastCouponDate: string;
  dayCountConvention: string;
  couponFrequency: string;
  coupon: number;
  bondYield: number;
  price: number;
  accruedInterest: number;
  dirtyPrice: number;
  cleanPrice: number;
  marketValue: number;
  positionSize: number;
  duration: number;
  modifiedDuration: number;
  effectiveDuration: number;
  convexity: number;
  spread: number;
  zSpread: number;
  oas: number;
  dv01: number;
  pv01: number;
  basisPointValue: number;
  yieldToMaturity: number;
  yieldToWorst: number;
  yieldToCall: number;
  yieldToPut: number;
  yieldToFirstCall: number;
  yieldToFirstPut: number;
  yieldToAverageLife: number;
  yieldToMaturitySpread: number;
  yieldToWorstSpread: number;
  yieldToCallSpread: number;
  yieldToPutSpread: number;
  yieldToFirstCallSpread: number;
  yieldToFirstPutSpread: number;
  yieldToAverageLifeSpread: number;
  // Greeks
  delta: number;
  gamma: number;
  vega: number;
  theta: number;
  rho: number;
  // PnL
  dailyPnL: number;
  weeklyPnL: number;
  monthlyPnL: number;
  ytdPnL: number;
  yearToDatePnL: number;
  totalPnL: number;
  realizedPnL: number;
  unrealizedPnL: number;
  // Risk Analytics
  var95: number;
  var99: number;
  expectedShortfall: number;
  stressTest1: number;
  stressTest2: number;
  stressTest3: number;
  stressTest4: number;
  stressTest5: number;
  // Market Data
  bidPrice: number;
  askPrice: number;
  midPrice: number;
  lastPrice: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  volume: number;
  turnover: number;
  // Trading
  tradeDate: string;
  settlementDate: string;
  tradePrice: number;
  tradeSize: number;
  tradeValue: number;
  tradeType: string;
  tradeStatus: string;
  // Additional Fields
  [key: string]: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  private gridApi!: GridApi;
  title = 'Fixed Income Positions Grid';
  showAggregationPanel = true;
  public rowData: FixedIncomePosition[] = [];
  public columnDefs: ColDef[] = [];
  
  // Add missing properties
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1
  };

  public gridOptions: GridOptions = {
    groupDefaultExpanded: -1,
    suppressAggFuncInHeader: true,
    animateRows: true,
    rowSelection: 'multiple',
    enableRangeSelection: true,
    suppressRowClickSelection: true,
    rowGroupPanelShow: 'always',
    groupDisplayType: 'groupRows',
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent', align: 'left' },
        { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
        { statusPanel: 'agAggregationComponent', align: 'right' }
      ]
    },
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel',
        }
      ],
      defaultToolPanel: 'columns'
    }
  };

  constructor() {
    LicenseManager.setLicenseKey('For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-19_December_2024_[v3]_[01]_MTczNDU2NDAwMDAwMA==ad9a99e9b97df1a1fbef4b5dd9e3d8bb');
  }

  ngOnInit(): void {
    this.generateColumnDefinitions();
    this.generateRowData();
  }

  private generateColumnDefinitions(): void {
    // Core fixed income columns with proper formatting and grouping
    this.columnDefs = [
      // Reference Data Group
      { field: 'id', headerName: 'ID', width: 80 },
      { field: 'cusip', headerName: 'CUSIP', width: 120 },
      { field: 'isin', headerName: 'ISIN', width: 140 },
      { field: 'sedol', headerName: 'SEDOL', width: 100 },
      { field: 'securityName', headerName: 'Security Name', width: 250 },
      { 
        field: 'issuer', 
        headerName: 'Issuer', 
        width: 200,
        rowGroup: true,
        hide: true
      },
      { 
        field: 'sector', 
        headerName: 'Sector', 
        width: 150,
        rowGroup: true,
        hide: true
      },
      { field: 'subsector', headerName: 'Subsector', width: 150 },
      { field: 'country', headerName: 'Country', width: 120 },
      { 
        field: 'region', 
        headerName: 'Region', 
        width: 120,
        rowGroup: true,
        hide: true
      },
      { field: 'currency', headerName: 'Currency', width: 100 },
      { field: 'rating', headerName: 'Rating', width: 100 },
      { field: 'maturityDate', headerName: 'Maturity Date', width: 120 },
      { field: 'issueDate', headerName: 'Issue Date', width: 120 },
      { field: 'firstCouponDate', headerName: 'First Coupon Date', width: 120 },
      { field: 'lastCouponDate', headerName: 'Last Coupon Date', width: 120 },
      { field: 'dayCountConvention', headerName: 'Day Count', width: 100 },
      { field: 'couponFrequency', headerName: 'Coupon Freq', width: 100 },
      { 
        field: 'coupon', 
        headerName: 'Coupon', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + '%' : ''
      },
      { 
        field: 'bondYield', 
        headerName: 'Yield', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + '%' : ''
      },
      { 
        field: 'price', 
        headerName: 'Price', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'accruedInterest', 
        headerName: 'Accrued Interest', 
        width: 120,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'dirtyPrice', 
        headerName: 'Dirty Price', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'cleanPrice', 
        headerName: 'Clean Price', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'marketValue', 
        headerName: 'Market Value', 
        width: 150,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      { 
        field: 'positionSize', 
        headerName: 'Position Size', 
        width: 130,
        valueFormatter: params => params.value ? params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      // Duration and Risk Measures
      { 
        field: 'duration', 
        headerName: 'Duration', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : '',
        aggFunc: 'avg'
      },
      { 
        field: 'modifiedDuration', 
        headerName: 'Modified Duration', 
        width: 120,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'effectiveDuration', 
        headerName: 'Effective Duration', 
        width: 120,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      { 
        field: 'convexity', 
        headerName: 'Convexity', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : ''
      },
      // Spreads
      { 
        field: 'spread', 
        headerName: 'Spread', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + 'bps' : ''
      },
      { 
        field: 'zSpread', 
        headerName: 'Z-Spread', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + 'bps' : ''
      },
      { 
        field: 'oas', 
        headerName: 'OAS', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + 'bps' : ''
      },
      // Greeks
      { 
        field: 'delta', 
        headerName: 'Delta', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(4) : ''
      },
      { 
        field: 'gamma', 
        headerName: 'Gamma', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(4) : ''
      },
      { 
        field: 'vega', 
        headerName: 'Vega', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(4) : ''
      },
      { 
        field: 'theta', 
        headerName: 'Theta', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(4) : ''
      },
      { 
        field: 'rho', 
        headerName: 'Rho', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(4) : ''
      },
      // PnL
      { 
        field: 'dailyPnL', 
        headerName: 'Daily P&L', 
        width: 120,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      { 
        field: 'weeklyPnL', 
        headerName: 'Weekly P&L', 
        width: 120,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      { 
        field: 'monthlyPnL', 
        headerName: 'Monthly P&L', 
        width: 120,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      { 
        field: 'ytdPnL', 
        headerName: 'YTD P&L', 
        width: 120,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'
      },
      // Risk Analytics
      { 
        field: 'var95', 
        headerName: 'VaR 95%', 
        width: 100,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : ''
      },
      { 
        field: 'var99', 
        headerName: 'VaR 99%', 
        width: 100,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : ''
      },
      { 
        field: 'expectedShortfall', 
        headerName: 'Expected Shortfall', 
        width: 150,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : ''
      }
    ];

    // Generate additional columns to reach 300
    const additionalColumns: ColDef[] = [];
    const categories = [
      'Risk', 'Performance', 'Analytics', 'Compliance', 'Trading',
      'Settlement', 'Accounting', 'Regulatory', 'Market', 'Reference'
    ];

    for (let i = 0; i < 300 - this.columnDefs.length; i++) {
      const category = categories[Math.floor(i / 28) % categories.length];
      const columnNumber = (i % 28) + 1;
      const field = `${category.toLowerCase()}_${columnNumber}`;
      
      let colDef: ColDef = {
        field: field,
        headerName: `${category} ${columnNumber}`,
        width: 120
      };

      // Add formatters based on category
      if (category === 'Risk' || category === 'Performance') {
        colDef.valueFormatter = params => params.value ? params.value.toFixed(2) + '%' : '';
      } else if (category === 'Trading' || category === 'Accounting') {
        colDef.valueFormatter = params => params.value ? '$' + params.value.toLocaleString() : '';
      } else if (category === 'Settlement') {
        colDef.valueFormatter = params => params.value || '';
      }

      additionalColumns.push(colDef);
    }

    this.columnDefs = [...this.columnDefs, ...additionalColumns];
  }

  private generateRowData(): void {
    const rowData: FixedIncomePosition[] = [];
    const sectors = ['Government', 'Corporate', 'Municipal', 'Agency', 'Sovereign', 'Supranational'];
    const subsectors = ['Treasury', 'Investment Grade', 'High Yield', 'Emerging Markets', 'Structured', 'Convertible'];
    const dayCountConventions = ['30/360', 'ACT/360', 'ACT/365', 'ACT/ACT'];
    const couponFrequencies = ['Annual', 'Semi-Annual', 'Quarterly', 'Monthly'];
    const tradeTypes = ['Buy', 'Sell', 'Short', 'Cover'];
    const tradeStatuses = ['Executed', 'Pending', 'Cancelled', 'Failed'];

    for (let i = 0; i < 10000; i++) {
      const issuer = faker.company.name();
      const sector = faker.helpers.arrayElement(sectors);
      const subsector = faker.helpers.arrayElement(subsectors);
      const country = faker.location.country();
      const region = faker.helpers.arrayElement(['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa']);
      const currency = faker.finance.currencyCode();
      const rating = faker.helpers.arrayElement(['AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-']);
      
      const issueDate = faker.date.past({ years: 10 }).toISOString().split('T')[0];
      const maturityDate = faker.date.future({ years: 30 }).toISOString().split('T')[0];
      const firstCouponDate = faker.date.future({ years: 1 }).toISOString().split('T')[0];
      const lastCouponDate = faker.date.future({ years: 29 }).toISOString().split('T')[0];
      
      const coupon = faker.number.float({ min: 0.5, max: 8, fractionDigits: 2 });
      const bondYield = faker.number.float({ min: 0.5, max: 7, fractionDigits: 2 });
      const price = faker.number.float({ min: 85, max: 115, fractionDigits: 2 });
      const accruedInterest = faker.number.float({ min: 0, max: 5, fractionDigits: 2 });
      const dirtyPrice = price + accruedInterest;
      const cleanPrice = price;
      
      const positionSize = faker.number.int({ min: 1000, max: 100000 });
      const marketValue = positionSize * dirtyPrice;
      
      const duration = faker.number.float({ min: 0.5, max: 15, fractionDigits: 2 });
      const modifiedDuration = duration / (1 + bondYield / 100);
      const effectiveDuration = duration * 1.1;
      const convexity = faker.number.float({ min: 0, max: 100, fractionDigits: 2 });
      
      const spread = faker.number.float({ min: 0, max: 500, fractionDigits: 2 });
      const zSpread = spread * 1.1;
      const oas = spread * 1.2;
      
      // Greeks
      const delta = faker.number.float({ min: -1, max: 1, fractionDigits: 4 });
      const gamma = faker.number.float({ min: -0.1, max: 0.1, fractionDigits: 4 });
      const vega = faker.number.float({ min: -1000, max: 1000, fractionDigits: 4 });
      const theta = faker.number.float({ min: -1000, max: 1000, fractionDigits: 4 });
      const rho = faker.number.float({ min: -1000, max: 1000, fractionDigits: 4 });
      
      // PnL
      const dailyPnL = faker.number.float({ min: -100000, max: 100000, fractionDigits: 2 });
      const weeklyPnL = dailyPnL * 5;
      const monthlyPnL = dailyPnL * 21;
      const ytdPnL = dailyPnL * 252;
      const yearToDatePnL = ytdPnL;
      const totalPnL = ytdPnL;
      const realizedPnL = dailyPnL * 0.7;
      const unrealizedPnL = dailyPnL * 0.3;
      
      // Risk Analytics
      const var95 = faker.number.float({ min: 0, max: 1000000, fractionDigits: 2 });
      const var99 = var95 * 1.5;
      const expectedShortfall = var99 * 1.2;
      const stressTest1 = var95 * 2;
      const stressTest2 = var95 * 2.5;
      const stressTest3 = var95 * 3;
      const stressTest4 = var95 * 3.5;
      const stressTest5 = var95 * 4;

      // Market Data
      const bidPrice = price * 0.995;
      const askPrice = price * 1.005;
      const midPrice = price;
      const lastPrice = price;
      const openPrice = price * (1 + faker.number.float({ min: -0.02, max: 0.02, fractionDigits: 4 }));
      const highPrice = price * (1 + faker.number.float({ min: 0, max: 0.05, fractionDigits: 4 }));
      const lowPrice = price * (1 - faker.number.float({ min: 0, max: 0.05, fractionDigits: 4 }));
      const volume = faker.number.int({ min: 1000, max: 1000000 });
      const turnover = volume * price;

      // Trading
      const tradeDate = faker.date.recent().toISOString().split('T')[0];
      const settlementDate = faker.date.future({ years: 0.1 }).toISOString().split('T')[0];
      const tradePrice = price;
      const tradeSize = positionSize;
      const tradeValue = marketValue;
      const tradeType = faker.helpers.arrayElement(tradeTypes);
      const tradeStatus = faker.helpers.arrayElement(tradeStatuses);

      // Additional calculations
      const dv01 = duration * marketValue * 0.0001;
      const pv01 = dv01 * 100;
      const basisPointValue = dv01;
      const yieldToMaturity = bondYield;
      const yieldToWorst = bondYield * 0.95;
      const yieldToCall = bondYield * 1.05;
      const yieldToPut = bondYield * 0.98;
      const yieldToFirstCall = bondYield * 1.02;
      const yieldToFirstPut = bondYield * 0.99;
      const yieldToAverageLife = bondYield * 0.97;
      const yieldToMaturitySpread = spread;
      const yieldToWorstSpread = spread * 0.95;
      const yieldToCallSpread = spread * 1.05;
      const yieldToPutSpread = spread * 0.98;
      const yieldToFirstCallSpread = spread * 1.02;
      const yieldToFirstPutSpread = spread * 0.99;
      const yieldToAverageLifeSpread = spread * 0.97;

      const row: FixedIncomePosition = {
        id: i + 1,
        cusip: faker.finance.accountNumber(9),
        isin: faker.finance.accountNumber(12),
        sedol: faker.finance.accountNumber(7),
        securityName: `${issuer} ${coupon.toFixed(2)}% ${maturityDate.split('-')[0]}`,
        issuer,
        sector,
        subsector,
        country,
        region,
        currency,
        rating,
        maturityDate,
        issueDate,
        firstCouponDate,
        lastCouponDate,
        dayCountConvention: faker.helpers.arrayElement(dayCountConventions),
        couponFrequency: faker.helpers.arrayElement(couponFrequencies),
        coupon,
        bondYield,
        price,
        accruedInterest,
        dirtyPrice,
        cleanPrice,
        marketValue,
        positionSize,
        duration,
        modifiedDuration,
        effectiveDuration,
        convexity,
        spread,
        zSpread,
        oas,
        dv01,
        pv01,
        basisPointValue,
        yieldToMaturity,
        yieldToWorst,
        yieldToCall,
        yieldToPut,
        yieldToFirstCall,
        yieldToFirstPut,
        yieldToAverageLife,
        yieldToMaturitySpread,
        yieldToWorstSpread,
        yieldToCallSpread,
        yieldToPutSpread,
        yieldToFirstCallSpread,
        yieldToFirstPutSpread,
        yieldToAverageLifeSpread,
        delta,
        gamma,
        vega,
        theta,
        rho,
        dailyPnL,
        weeklyPnL,
        monthlyPnL,
        ytdPnL,
        yearToDatePnL,
        totalPnL,
        realizedPnL,
        unrealizedPnL,
        var95,
        var99,
        expectedShortfall,
        stressTest1,
        stressTest2,
        stressTest3,
        stressTest4,
        stressTest5,
        bidPrice,
        askPrice,
        midPrice,
        lastPrice,
        openPrice,
        highPrice,
        lowPrice,
        volume,
        turnover,
        tradeDate,
        settlementDate,
        tradePrice,
        tradeSize,
        tradeValue,
        tradeType,
        tradeStatus
      };

      // Generate additional fields
      const categories = [
        'Risk', 'Performance', 'Analytics', 'Compliance', 'Trading',
        'Settlement', 'Accounting', 'Regulatory', 'Market', 'Reference'
      ];

      for (let j = 0; j < 300 - Object.keys(row).length; j++) {
        const category = categories[Math.floor(j / 28) % categories.length].toLowerCase();
        const columnNumber = (j % 28) + 1;
        const field = `${category}_${columnNumber}`;

        switch (category) {
          case 'risk':
            row[field] = faker.number.float({ min: 0, max: 100, fractionDigits: 2 });
            break;
          case 'performance':
            row[field] = faker.number.float({ min: -50, max: 50, fractionDigits: 2 });
            break;
          case 'analytics':
            row[field] = faker.number.float({ min: 0, max: 1000, fractionDigits: 2 });
            break;
          case 'compliance':
            row[field] = faker.number.int({ min: 0, max: 100 });
            break;
          case 'trading':
            row[field] = faker.number.float({ min: 0, max: 1000000, fractionDigits: 2 });
            break;
          case 'settlement':
            row[field] = faker.date.future({ years: 5 }).toISOString().split('T')[0];
            break;
          case 'accounting':
            row[field] = faker.number.float({ min: 0, max: 1000000, fractionDigits: 2 });
            break;
          case 'regulatory':
            row[field] = faker.number.int({ min: 0, max: 100 });
            break;
          case 'market':
            row[field] = faker.number.float({ min: 0, max: 100, fractionDigits: 2 });
            break;
          case 'reference':
            row[field] = faker.finance.accountNumber(8);
            break;
          default:
            row[field] = faker.finance.accountNumber(8);
        }
      }

      rowData.push(row);
    }

    this.rowData = rowData;
    this.verifyDataCompleteness();
  }

  private verifyDataCompleteness(): void {
    if (this.rowData.length === 0 || this.columnDefs.length === 0) {
      console.error('No data or columns found!');
      return;
    }
    
    let emptyCells = 0;
    let totalCells = 0;
    const emptyFieldsMap = new Map<string, number>();
    
    // Check each row
    this.rowData.forEach((row, rowIndex) => {
      this.columnDefs.forEach((colDef) => {
        const field = colDef.field;
        if (field) {
          totalCells++;
          const value = row[field];
          
          if (value === null || value === undefined || value === '' || (typeof value === 'number' && isNaN(value))) {
            emptyCells++;
            emptyFieldsMap.set(field, (emptyFieldsMap.get(field) || 0) + 1);
            
            if (emptyCells <= 5) {
              console.warn(`Empty cell found at row ${rowIndex + 1}, column ${field}`);
            }
          }
        }
      });
    });
    
    console.log('Data Verification Complete:', {
      totalRows: this.rowData.length,
      totalColumns: this.columnDefs.length,
      totalCells: totalCells,
      emptyCells: emptyCells,
      filledCells: totalCells - emptyCells,
      fillRate: ((totalCells - emptyCells) / totalCells * 100).toFixed(2) + '%'
    });
    
    if (emptyFieldsMap.size > 0) {
      console.warn('Fields with empty values:', Array.from(emptyFieldsMap.entries()));
    } else {
      console.log('✅ All cells are populated with data!');
    }
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.verifyDataCompleteness();
    
    console.log('Grid Ready: ', {
      totalRows: this.rowData.length,
      totalColumns: this.columnDefs.length,
      rowGroups: ['issuer', 'region', 'sector']
    });
  }

  toggleAggregationPanel(): void {
    this.showAggregationPanel = !this.showAggregationPanel;
    if (this.gridApi) {
      const displayType = this.showAggregationPanel ? 'groupRows' : 'group';
      this.gridApi.setGridOption('groupDisplayType', displayType as any);
      this.gridApi.refreshCells();
    }
  }
}
