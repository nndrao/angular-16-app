import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions, GridReadyEvent, GridApi, ColDef } from 'ag-grid-community';
import { LicenseManager } from 'ag-grid-enterprise';
import { generateFixedIncomePositions, fixedIncomeColumnDefs, defaultGridOptions, gridStyles } from './position_data_generator';

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
  public rowData: any[] = [];
  public columnDefs = fixedIncomeColumnDefs.map(col => ({
    ...col,
    pinned: undefined, // Remove any pinned property
    enableRowGroup: true, // Enable row grouping for all columns
    aggFunc: 'sum' // Default aggregation function
  }));
  
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1,
    enableRowGroup: true, // Enable row grouping by default
   
  };
  
  public gridOptions: GridOptions = {
    ...defaultGridOptions,
    columnDefs: this.columnDefs,
    rowData: [],
    rowSelection: 'multiple' as const,
    // Disable pagination
    pagination: false,
    // Enable row group panel
    rowGroupPanelShow: 'always',
    // Enable auto-expansion of grouped rows
    groupDefaultExpanded: -1, // -1 means expand all groups
    // Set initial grouping
    groupDisplayType: 'singleColumn',
    // Enable status bar
    statusBar: {
      statusPanels: [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent', align: 'left' },
        { statusPanel: 'agSelectedRowCountComponent', align: 'left' },
        { statusPanel: 'agAggregationComponent', align: 'right' }
      ]
    },
    // Enable side bar
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
    // Generate data
    this.rowData = generateFixedIncomePositions(10000);
    this.gridOptions.rowData = this.rowData;
  }

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    
    // Set initial grouping
    this.gridApi.setRowGroupColumns([ 'issuerName','issuerSector','issuerType']);
    
    console.log('Grid Ready: ', {
      totalRows: this.rowData.length,
      totalColumns: this.columnDefs.length
    });
  }

  toggleAggregationPanel(): void {
    this.showAggregationPanel = !this.showAggregationPanel;
    
    // Update the status bar by setting a new grid option
    if (this.gridApi) {
      const statusPanels = [
        { statusPanel: 'agTotalRowCountComponent', align: 'left' },
        { statusPanel: 'agFilteredRowCountComponent', align: 'left' },
        { statusPanel: 'agSelectedRowCountComponent', align: 'left' }
      ];

      if (this.showAggregationPanel) {
        statusPanels.push({ statusPanel: 'agAggregationComponent', align: 'right' });
      }

      // Update the status bar using updateGridOptions
      this.gridApi.updateGridOptions({
        statusBar: {
          statusPanels: statusPanels
        }
      });
    }

    console.log('Aggregation panel toggled:', this.showAggregationPanel);
  }

  testButtonClick(): void {
    console.log('Test button clicked - functions are working!');
    alert('Button click is working!');
  }

  checkLocalStorage(): void {
    console.log('=== LOCAL STORAGE DEBUG ===');
    console.log('localStorage length:', localStorage.length);
    console.log('All localStorage keys:', Object.keys(localStorage));
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key!);
      console.log(`${key}: ${value?.substring(0, 100)}...`);
    }
    
    const agGridState = localStorage.getItem('agGridState');
    console.log('agGridState exists:', !!agGridState);
    console.log('agGridState value:', agGridState);
    console.log('=== END DEBUG ===');
  }

  saveGridState(): void {
    console.log('=== SAVE GRID STATE CALLED ===');
    console.log('saveGridState function called');
    
    if (!this.gridApi) {
      console.error('Grid API is not available. Cannot save state.');
      alert('Grid API is not ready yet. Please wait for the grid to load.');
      return;
    }

    try {
      console.log('Grid API is available, proceeding with save...');
      
      // Get grid state but be careful about circular references
      const columnState = this.gridApi.getColumnState();
      const filterModel = this.gridApi.getFilterModel();
      const groupColumns = this.gridApi.getRowGroupColumns();
      
      // Create a safe copy of only the data we need
      const safeColumnState = columnState.map(col => ({
        colId: col.colId,
        width: col.width,
        hide: col.hide,
        pinned: col.pinned,
        sort: col.sort,
        sortIndex: col.sortIndex,
        aggFunc: col.aggFunc,
        rowGroup: col.rowGroup,
        rowGroupIndex: col.rowGroupIndex,
        pivot: col.pivot,
        pivotIndex: col.pivotIndex,
        flex: col.flex
      }));

      // Get simple group column IDs
      const groupColumnIds = groupColumns.map(col => col.getColId());
      
      console.log('Retrieved safe grid data:', {
        columnStateLength: safeColumnState?.length,
        filterModel,
        groupColumnIds
      });

      const gridState = {
        columnState: safeColumnState,
        filterModel: filterModel,
        groupColumnIds: groupColumnIds,
        showAggregationPanel: this.showAggregationPanel,
        timestamp: new Date().toISOString()
      };
      
      console.log('Grid state to save:', gridState);
      
      const stateString = JSON.stringify(gridState);
      console.log('Serialized state length:', stateString.length);
      
      // Test localStorage is working
      localStorage.setItem('test', 'test-value');
      console.log('Test localStorage:', localStorage.getItem('test'));
      
      localStorage.setItem('agGridState', stateString);
      
      // Verify the save
      const savedState = localStorage.getItem('agGridState');
      console.log('Verification - saved state exists:', !!savedState);
      console.log('Verification - saved state length:', savedState?.length);
      
      this.checkLocalStorage();
      
      alert('Grid state saved successfully!');
      console.log('Grid state saved successfully');
    } catch (error) {
      console.error('Error saving grid state:', error);
      alert('Error saving grid state: ' + error);
    }
  }

  loadGridState(): void {
    console.log('loadGridState function called');
    
    if (!this.gridApi) {
      console.error('Grid API is not available. Cannot load state.');
      return;
    }

    const savedState = localStorage.getItem('agGridState');
    console.log('Retrieved state from localStorage:', !!savedState);
    console.log('State length:', savedState?.length);
    
    if (savedState) {
      try {
        const gridState = JSON.parse(savedState);
        console.log('Parsed grid state timestamp:', gridState.timestamp);
        console.log('Parsed grid state keys:', Object.keys(gridState));
        
        // Apply saved state
        if (gridState.columnState) {
          this.gridApi.applyColumnState({
            state: gridState.columnState,
            applyOrder: true
          });
          console.log('Column state applied');
        }
        
        if (gridState.filterModel) {
          this.gridApi.setFilterModel(gridState.filterModel);
          console.log('Filter model applied');
        }
        
        if (gridState.groupColumnIds) {
          this.gridApi.setRowGroupColumns(gridState.groupColumnIds);
          console.log('Group state applied');
        }
        
        // Update the showAggregationPanel based on saved state
        if (gridState.showAggregationPanel !== undefined) {
          this.showAggregationPanel = gridState.showAggregationPanel;
          this.toggleAggregationPanel(); // Apply the aggregation panel state
          console.log('Aggregation panel state updated:', this.showAggregationPanel);
        }
        
        // Force grid to refresh
        this.gridApi.refreshCells();
        this.gridApi.redrawRows();
        
        alert('Grid state loaded successfully!');
        console.log('Grid state loaded successfully');
      } catch (error) {
        console.error('Error loading grid state:', error);
        alert('Error loading grid state: ' + error);
      }
    } else {
      console.log('No saved grid state found');
      alert('No saved grid state found');
    }
  }
}
