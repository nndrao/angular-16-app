import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridOptions, GridReadyEvent, GridApi } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';

interface FixedIncomePosition {
  [key: string]: any;
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
  coupon: number;
  yield: number;
  price: number;
  marketValue: number;
  positionSize: number;
  duration: number;
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
  
  // Range selection optimization properties
  private rangeSelectionTimer: any;
  private maxRangeSelectionRows = 1000; // Limit range selection to 1000 rows
  private maxRangeSelectionCols = 50; // Limit range selection to 50 columns
  private isLargeRangeSelection = false;

  constructor() {
    // Set license key for ag-grid-enterprise (trial version)
    LicenseManager.setLicenseKey('For_Trialing_ag-Grid_Only-Not_For_Real_Development_Or_Production_Projects-Valid_Until-19_December_2024_[v3]_[01]_MTczNDU2NDAwMDAwMA==ad9a99e9b97df1a1fbef4b5dd9e3d8bb');
  }
  
  // Grid configuration
  public rowData: FixedIncomePosition[] = [];
  public columnDefs: ColDef[] = [];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    width: 150,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    // Performance optimizations for large grids
    lockVisible: true, // Prevent columns from being hidden/shown dynamically
    suppressCellFlash: true, // Disable cell flashing for better performance
    comparator: (valueA: any, valueB: any) => {
      // Simple comparator for better performance
      if (valueA === valueB) return 0;
      return valueA > valueB ? 1 : -1;
    }
  };
  
  public gridOptions: GridOptions = {
    animateRows: true,
    rowHeight: 40,
    headerHeight: 40,
    suppressHorizontalScroll: false,
    enableCellChangeFlash: true,
    defaultColDef: this.defaultColDef,
    maintainColumnOrder: true,
    suppressColumnVirtualisation: false,
    suppressRowVirtualisation: false,
    rowBuffer: 50,
    maxConcurrentDatasourceRequests: 2,
    cacheBlockSize: 100,
    cacheOverflowSize: 2,
    infiniteInitialRowCount: 1000,
    rowSelection: 'multiple',
    enableRangeSelection: true,
    // Pagination option (uncomment to enable pagination instead of virtual scrolling)
    // pagination: true,
    // paginationPageSize: 100,
    // paginationPageSizeSelector: [50, 100, 200, 500],
    // Range selection performance optimizations
    suppressMultiRangeSelection: true, // Allow only single range selection
    suppressClearOnFillReduction: true, // Prevent clearing on fill reduction
    enableRangeHandle: false, // Disable range handle for better performance
    enableFillHandle: false, // Disable fill handle for better performance
    // Row grouping configuration
    rowGroupPanelShow: 'always',  // Enable row group panel
    groupDefaultExpanded: -1,      // Auto expand all groups (-1 means all levels)
    groupDisplayType: 'singleColumn', // Display grouped columns as single column
    autoGroupColumnDef: {
      headerName: 'Group',
      minWidth: 300,
      cellRendererParams: {
        suppressCount: false,  // Show count in group
        innerRenderer: (params: any) => {
          // Custom group renderer
          if (params.value) {
            return params.value;
          }
          return null;
        }
      },
      // Add aggregations to group column
      valueGetter: (params: any) => {
        if (params.node.group) {
          const field = params.node.field;
          return `${field}: ${params.node.key}`;
        }
        return null;
      }
    },
    // Performance optimizations
    debounceVerticalScrollbar: true, // Debounce vertical scrolling
    suppressScrollOnNewData: true, // Don't scroll on new data
    suppressAnimationFrame: false, // Use animation frames for better performance
    // Enable status bar
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalAndFilteredRowCountComponent' },
        { statusPanel: 'agTotalRowCountComponent' },
        { statusPanel: 'agFilteredRowCountComponent' },
        { statusPanel: 'agSelectedRowCountComponent' },
        { statusPanel: 'agAggregationComponent' }
      ]
    },
    // Enable sidebar
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: {
            suppressRowGroups: false,
            suppressValues: false,
            suppressPivots: false,
            suppressPivotMode: false,
            suppressColumnFilter: false,
            suppressColumnSelectAll: false,
            suppressColumnExpandAll: false
          }
        },
        {
          id: 'filters',
          labelDefault: 'Filters',
          labelKey: 'filters',
          iconKey: 'filter',
          toolPanel: 'agFiltersToolPanel'
        }
      ],
      defaultToolPanel: 'columns'
    },
    // Range selection event handlers
    onRangeSelectionChanged: this.onRangeSelectionChanged.bind(this),
    onCellKeyDown: this.onCellKeyDown.bind(this)
  };

  ngOnInit(): void {
    // Generate column definitions for 300 columns
    this.generateColumnDefinitions();
    
    // Generate row data for 10,000 rows
    this.generateRowData();
  }

  private generateColumnDefinitions(): void {
    // Core fixed income columns
    const coreColumns: ColDef[] = [
      { field: 'id', headerName: 'ID', width: 80, pinned: 'left' },
      { field: 'cusip', headerName: 'CUSIP', width: 120, pinned: 'left' },
      { field: 'isin', headerName: 'ISIN', width: 140 },
      { field: 'sedol', headerName: 'SEDOL', width: 100 },
      { field: 'securityName', headerName: 'Security Name', width: 250 },
      { 
        field: 'issuer', 
        headerName: 'Issuer', 
        width: 200,
        rowGroup: true,  // Enable row grouping for issuer
        hide: true       // Hide column when grouped
      },
      { 
        field: 'sector', 
        headerName: 'Sector', 
        width: 150,
        rowGroup: true,  // Enable row grouping for sector
        hide: true       // Hide column when grouped
      },
      { field: 'subsector', headerName: 'Subsector', width: 150 },
      { field: 'country', headerName: 'Country', width: 120 },
      { 
        field: 'region', 
        headerName: 'Region', 
        width: 120,
        rowGroup: true,  // Enable row grouping for region
        hide: true       // Hide column when grouped
      },
      { field: 'currency', headerName: 'Currency', width: 100 },
      { field: 'rating', headerName: 'Rating', width: 100 },
      { field: 'maturityDate', headerName: 'Maturity Date', width: 120 },
      { 
        field: 'coupon', 
        headerName: 'Coupon', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) + '%' : ''
      },
      { 
        field: 'yield', 
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
        field: 'marketValue', 
        headerName: 'Market Value', 
        width: 150,
        valueFormatter: params => params.value ? '$' + params.value.toLocaleString() : '',
        aggFunc: 'sum'  // Add aggregation for market value
      },
      { 
        field: 'positionSize', 
        headerName: 'Position Size', 
        width: 130,
        valueFormatter: params => params.value ? params.value.toLocaleString() : '',
        aggFunc: 'sum'  // Add aggregation for position size
      },
      { 
        field: 'duration', 
        headerName: 'Duration', 
        width: 100,
        valueFormatter: params => params.value ? params.value.toFixed(2) : '',
        aggFunc: 'avg'  // Add average aggregation for duration
      }
    ];

    // Generate additional columns to reach 300 total columns
    const additionalColumns: ColDef[] = [];
    const totalCoreColumns = coreColumns.length;
    const remainingColumns = 300 - totalCoreColumns;

    // Categories for additional columns
    const categories = [
      'Risk', 'Performance', 'Analytics', 'Compliance', 'Trading',
      'Settlement', 'Accounting', 'Regulatory', 'Market', 'Reference'
    ];

    for (let i = 0; i < remainingColumns; i++) {
      const category = categories[Math.floor(i / 28) % categories.length];
      const columnNumber = (i % 28) + 1;
      const field = `${category.toLowerCase()}_${columnNumber}`;
      
      let colDef: ColDef = {
        field: field,
        headerName: `${category} ${columnNumber}`,
        width: 120
      };

      // Add different formatters based on column type
      if (i % 5 === 0) {
        // Percentage columns
        colDef.valueFormatter = params => params.value ? params.value.toFixed(2) + '%' : '';
      } else if (i % 5 === 1) {
        // Currency columns
        colDef.valueFormatter = params => params.value ? '$' + params.value.toLocaleString() : '';
      } else if (i % 5 === 2) {
        // Date columns
        colDef.valueFormatter = params => params.value || '';
      } else if (i % 5 === 3) {
        // Integer columns
        colDef.valueFormatter = params => params.value ? params.value.toLocaleString() : '';
      }
      // String columns (i % 5 === 4) don't need formatting

      additionalColumns.push(colDef);
    }

    this.columnDefs = [...coreColumns, ...additionalColumns];
  }

  private generateRowData(): void {
    const sectors = ['Government', 'Corporate', 'Municipal', 'Agency', 'Sovereign', 'Supranational'];
    const subsectors = ['Treasury', 'Investment Grade', 'High Yield', 'Emerging Markets', 'Structured', 'Convertible'];
    const countries = ['USA', 'UK', 'Germany', 'France', 'Japan', 'Canada', 'Australia', 'Switzerland'];
    const regions = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'];
    const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CHF', 'AUD', 'CAD'];
    const ratings = ['AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-'];
    const issuers = [
      'US Treasury', 'Apple Inc', 'Microsoft Corp', 'Amazon.com Inc', 'JP Morgan Chase',
      'Bank of America', 'Wells Fargo', 'Goldman Sachs', 'Morgan Stanley', 'Citigroup',
      'General Electric', 'AT&T Inc', 'Verizon', 'IBM Corp', 'Oracle Corp'
    ];

    const rowData: FixedIncomePosition[] = [];

    for (let i = 0; i < 10000; i++) {
      const row: FixedIncomePosition = {
        id: i + 1,
        cusip: this.generateCUSIP(),
        isin: this.generateISIN(),
        sedol: this.generateSEDOL(),
        securityName: `${issuers[Math.floor(Math.random() * issuers.length)]} ${this.randomFloat(2, 6)}% ${this.randomInt(2025, 2050)}`,
        issuer: issuers[Math.floor(Math.random() * issuers.length)],
        sector: sectors[Math.floor(Math.random() * sectors.length)],
        subsector: subsectors[Math.floor(Math.random() * subsectors.length)],
        country: countries[Math.floor(Math.random() * countries.length)],
        region: regions[Math.floor(Math.random() * regions.length)],
        currency: currencies[Math.floor(Math.random() * currencies.length)],
        rating: ratings[Math.floor(Math.random() * ratings.length)],
        maturityDate: this.generateDate(2025, 2050),
        coupon: this.randomFloat(0.5, 8),
        yield: this.randomFloat(0.5, 7),
        price: this.randomFloat(85, 115),
        marketValue: this.randomInt(100000, 10000000),
        positionSize: this.randomInt(1000, 100000),
        duration: this.randomFloat(0.5, 15)
      };

      // Add values for additional columns
      const categories = ['risk', 'performance', 'analytics', 'compliance', 'trading',
                        'settlement', 'accounting', 'regulatory', 'market', 'reference'];
      
      categories.forEach(category => {
        for (let j = 1; j <= 28; j++) {
          const field = `${category}_${j}`;
          if (j % 5 === 0) {
            row[field] = this.randomFloat(0, 100); // Percentage
          } else if (j % 5 === 1) {
            row[field] = this.randomInt(1000, 1000000); // Currency
          } else if (j % 5 === 2) {
            row[field] = this.generateDate(2020, 2025); // Date
          } else if (j % 5 === 3) {
            row[field] = this.randomInt(1, 10000); // Integer
          } else {
            row[field] = `${category.toUpperCase()}-${this.randomInt(1000, 9999)}`; // String
          }
        }
      });

      rowData.push(row);
    }

    this.rowData = rowData;
  }

  // Utility functions
  private generateCUSIP(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let cusip = '';
    for (let i = 0; i < 9; i++) {
      cusip += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return cusip;
  }

  private generateISIN(): string {
    const countryCode = ['US', 'GB', 'DE', 'FR', 'JP'][Math.floor(Math.random() * 5)];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let isin = countryCode;
    for (let i = 0; i < 10; i++) {
      isin += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return isin;
  }

  private generateSEDOL(): string {
    const chars = 'BCDFGHJKLMNPQRSTVWXYZ0123456789';
    let sedol = '';
    for (let i = 0; i < 7; i++) {
      sedol += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return sedol;
  }

  private generateDate(startYear: number, endYear: number): string {
    const year = this.randomInt(startYear, endYear);
    const month = String(this.randomInt(1, 12)).padStart(2, '0');
    const day = String(this.randomInt(1, 28)).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Grid event handlers
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    
    // The row groups are already set in the column definitions with rowGroup: true
    // They will be automatically applied for issuer, region, and sector columns
    
    // Optional: Auto-size columns to fit (might be slow with 300 columns)
    // params.api.sizeColumnsToFit();
    
    console.log('Grid Ready: ', {
      totalRows: this.rowData.length,
      totalColumns: this.columnDefs.length,
      rowGroups: ['issuer', 'region', 'sector']
    });
  }
  
  // Range selection optimization handlers
  onRangeSelectionChanged(event: any): void {
    // Clear any existing timer
    if (this.rangeSelectionTimer) {
      clearTimeout(this.rangeSelectionTimer);
    }
    
    // Debounce range selection processing
    this.rangeSelectionTimer = setTimeout(() => {
      const ranges = this.gridApi.getCellRanges();
      
      if (ranges && ranges.length > 0) {
        const range = ranges[0]; // Since we're using suppressMultiRangeSelection
        
        // Calculate range size
        const startRow = range.startRow?.rowIndex ?? 0;
        const endRow = range.endRow?.rowIndex ?? 0;
        const rowCount = Math.abs(endRow - startRow) + 1;
        
        const columns = range.columns || [];
        const colCount = columns.length;
        
        // Check if selection is too large
        if (rowCount > this.maxRangeSelectionRows || colCount > this.maxRangeSelectionCols) {
          this.isLargeRangeSelection = true;
          
          // Limit the selection
          const limitedEndRow = startRow + (endRow > startRow ? this.maxRangeSelectionRows - 1 : -(this.maxRangeSelectionRows - 1));
          const limitedColumns = columns.slice(0, this.maxRangeSelectionCols);
          
          // Clear current ranges and set limited range
          this.gridApi.clearRangeSelection();
          
          // Create limited range
          this.gridApi.addCellRange({
            rowStartIndex: startRow,
            rowEndIndex: limitedEndRow,
            columns: limitedColumns
          });
          
          console.warn(`Range selection limited to ${this.maxRangeSelectionRows} rows and ${this.maxRangeSelectionCols} columns for performance`);
        } else {
          this.isLargeRangeSelection = false;
        }
      }
    }, 100); // 100ms debounce
  }
  
  onCellKeyDown(event: any): void {
    // Detect if user is holding Shift + Arrow keys
    if (event.event.shiftKey && (event.event.key === 'ArrowDown' || event.event.key === 'ArrowUp' || 
        event.event.key === 'ArrowLeft' || event.event.key === 'ArrowRight')) {
      
      // If already in large selection mode, prevent default to avoid performance issues
      if (this.isLargeRangeSelection) {
        event.event.preventDefault();
        event.event.stopPropagation();
        return;
      }
      
      // Check current selection size
      const ranges = this.gridApi.getCellRanges();
      if (ranges && ranges.length > 0) {
        const range = ranges[0];
        const startRow = range.startRow?.rowIndex ?? 0;
        const endRow = range.endRow?.rowIndex ?? 0;
        const rowCount = Math.abs(endRow - startRow) + 1;
        
        // Prevent selection if approaching limit
        if (rowCount >= this.maxRangeSelectionRows - 100) {
          event.event.preventDefault();
          event.event.stopPropagation();
          console.warn('Approaching maximum range selection size');
        }
      }
    }
  }
}
