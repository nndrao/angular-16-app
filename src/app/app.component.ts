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
    pinned: undefined // Remove any pinned property
  }));
  
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    minWidth: 100,
    flex: 1
  };
  
  public gridOptions: GridOptions = {
    ...defaultGridOptions,
    columnDefs: this.columnDefs,
    rowData: [],
    rowSelection: 'multiple' as const,
    // Enable row group panel
    rowGroupPanelShow: 'always',
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
    
    console.log('Grid Ready: ', {
      totalRows: this.rowData.length,
      totalColumns: this.columnDefs.length
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
