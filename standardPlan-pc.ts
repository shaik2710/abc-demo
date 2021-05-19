import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PlanDetailsService } from 'src/app/shared/services/plan-details/plan-details.service';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { AdvancedGridComponent } from 'hig-ng-lib/lib/advanced-grid/advanced-grid.component';
import { ActionsInfo, AdvancedTableHeader, PagingInfo } from 'hig-ng-lib/lib/advanced-grid/advanced-grid.model';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-standard-plan-pc',
  templateUrl: './standard-plan-pc.component.html',
  styleUrls: ['./standard-plan-pc.component.scss']
})

export class StandardPlanPcComponent implements OnInit {
  @ViewChild(ModalComponent)
  standardPlanPCEditConfirm!: ModalComponent;

  @ViewChild('headerTemplate', { static: true })
  headerTemplate!: TemplateRef<any>;
  @ViewChild('paginatorTableSet') set setPaginatorTable(table: AdvancedGridComponent) {
    if (!!table) {
      this.paginatorTable = table;
      this.paginatorTable.paginatorComponent.scrollId = 'Fixed_Table_Container_Pagination';
    }
  }

  toggleInProgress = false;
  demoConfig = {
    demoTitle: 'Advanced Grid Component Documentation',
    description:
      'The advanced grid component. Also referred to as \'list views\' allow us to have fixed columns, pagination, action buttons, and more.'
  };
  tableHeaders: AdvancedTableHeader[] = [];
 

  nonSortableTableHeaders: AdvancedTableHeader[] = [];
  paginatorTable!: AdvancedGridComponent;

  actionsInfo: ActionsInfo = {
    columnActionOptions: [''],
    columnActionIdField: '', // unique identifier for the record
    columnActionSelectField: '', // field that holds the select value if we need to pre-populate (eg. checkbox)
    columnActionOccurred: this.actionOccurred.bind(this),
    enablePaginationBarSubmit: false,
    showActionColumnHeader: false,
   // paginationBarSubmitLabel: "Save & Accept",
   // paginationBarSubmitTriggered: this.saveAndAccept.bind(this)
  };




  public demoGBTable: Array<any> = [
    {
      complan: 'Middle Market',
      mlob: '1234',
      mlob_desc: 'Construction Excess Risk Umbrella',
      cal_elty: 'Ineligible',
      pay_elty: "Eligible"

    }, {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Aiddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "InEligible",
    },
    {
      complan: "Ziddle Market",
      mlob: "9110",
      mlob_desc: "Contractors Prof Protective Indemnity",
      cal_elty: "Eligible",
      pay_elty: "Eligible",
    }, {
      complan: "Piddle Market",
      mlob: "5678",
      mlob_desc: "Qontractors Pollution Liability",
      cal_elty: "Ineligible",
      pay_elty: "InEligible",
    }, {
      complan: "Abddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Eligible",
      pay_elty: "Eligible",
    }, {
      complan: "Middle Market",
      mlob: "5678",
      mlob_desc: "Zontractors Pollution Liability",
      cal_elty: "Ineligible",
      pay_elty: "Eligible",
    }, {
      complan: "Ciddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Ineligible",
      pay_elty: "Eligible"
    }, {
      complan: "Biddle Market",
      mlob: "5678",
      mlob_desc: "Contractors Pollution Liability",
      cal_elty: "Ineligible",
      pay_elty: "Ineligible",
    }, {
      complan: "Criddle Market",
      mlob: "5678",
      mlob_desc: "Aontractors Pollution Liability",
      cal_elty: "Ineligible",
      pay_elty: "Ineligible",
    },
    {
      complan: 'Middle Market',
      mlob: '1234',
      mlob_desc: 'Construction Excess Risk Umbrella',
      cal_elty: "Ineligible",
      pay_elty: "Eligible"

    },
    {
      complan: 'Middle Market',
      mlob: '1234',
      mlob_desc: 'Construction Excess Risk Umbrella',
      cal_elty: "Ineligible",
      pay_elty: "Eligible"

    },
    {
      complan: 'Middle Market',
      mlob: '1234',
      mlob_desc: 'Construction Excess Risk Umbrella',
      cal_elty: "Ineligible",
      pay_elty: "Eligible"

    },
    {
      complan: 'Middle Market',
      mlob: '1234',
      mlob_desc: 'Construction Excess Risk Umbrella',
      cal_elty: "Ineligible",
      pay_elty: "Eligible"

    }

  ];

  dataTableHeader = [
    {
      fieldLabel: 'Comp Plan',
      fieldName: 'complan',
      sortable: true
    },
    {
      fieldLabel: 'MLOB',
      fieldName: 'mlob',
      sortable: true,
      id: 'mlob',
      customClass: "tetetetetetetet"
    },
    {
      fieldLabel: 'MLOB_Description',
      fieldName: 'mlob_desc'
    },
    {
      fieldLabel: 'Calculation Eligibility',
      fieldName: 'cal_elty'
    },
    {
      fieldLabel: 'Payment Eligibility',
      fieldName: 'pay_elty',
      sortable: true
    },
    {
      fieldLabel: 'Action',
      fieldName: ''
    }
  ];
  
  fixedTableId: "Grid_Fixed_Container_Main" | "Grid_Fixed_Container" | "Fixed_Table_Container" | "Dummy_ID" = "Dummy_ID";
  public showMore = true;
  public year = '2021';
  public title = 'Standard Plan MLOB Eligiblity';
  constructor(public fb: FormBuilder, private planDetailsService: PlanDetailsService) { }

  frmSubscribe = this.fb.group({
    complan: '',
    mlob: '',
    mlob_desc: '',
    cal_elty: '',
    pay_elty: ''
  });

  pagingInfo = {
    totalRecords: 100,
    currentPageNumber: 1,
    pageSize: 5,
    rowCountOptions: [5, 10, 15, 20, 25],
    sortHeader: 'complan',
    sortDir: 'desc'
  };

  getDisplayTextForHeaderField = ((column: any): string => {
    if (column.fieldLabel) {
      return column.fieldLabel;
    }
    return (column as string).toUpperCase();
  }).bind(this);

  getDisplayTextForRecordField = ((columnName: string, record: any): string => {
    return record[columnName];
  }).bind(this);

  actionOccurred($event: { action: string; record: any; selected?: boolean }): void {
    console.log('Column action triggered ' + $event.action);
  }

  saveAndAccept(): void {
    console.log('Pagination bar submit button triggered');
  }

  pageOrSortChanged($event: { pagingInfo: PagingInfo; sortHeader?: string; sortDir?: string }): void {
    this.pagingInfo.currentPageNumber = $event.pagingInfo.currentPageNumber;
    this.pagingInfo.sortDir = $event.sortDir || '';
    this.pagingInfo.sortHeader = $event.sortHeader || '';
}

toggleContainerId(id: string): void {
  this.toggleInProgress = true;
  if (id === "outer") {
      this.setContainerIds(".demo-container-main", "Grid_Fixed_Container_Main");
      // scroll demo to the top of the page since the container position has changed
      window.scrollTo(0, 0);
  } else {
      this.setContainerIds(".fixed-table-container-demo", "Fixed_Table_Container");
  }
  // force a re-render of the table
  setTimeout(() => {
      this.toggleInProgress = false;
  }, 1500);
}

private setContainerIds(selector: string, id: "Grid_Fixed_Container_Main" | "Fixed_Table_Container"): void {
  const el = document.querySelector(selector);
  console.log(selector);
  console.log(el?.id);
  console.log(id);
  if (el?.id === id) {
      el.setAttribute("id", "Dummy_Container_ID");
      this.fixedTableId = "Dummy_ID";
  } else {
      el?.setAttribute("id", id);
      this.fixedTableId = id;
  }
}

  ngOnInit(): void {
    // this.getStandardPlanPCData();
    this.assignNonSortableTableHeaders();
  }

  private assignNonSortableTableHeaders(): void {
    this.dataTableHeader.forEach(th => {
      const clonedTh = Object.assign({}, th);
      clonedTh.sortable = true;
      this.nonSortableTableHeaders.push(clonedTh);
    });
  }

  /**
   * Function to hide the side bar
   */
  public toggle(): void {
    this.showMore = !this.showMore;

  }

  public modalOpen(modalData: any): any {
    this.frmSubscribe = this.fb.group({
      complan: modalData.complan,
      mlob: modalData.mlob,
      mlob_desc: modalData.mlob_desc,
      cal_elty: modalData.cal_elty,
      pay_elty: modalData.pay_elty
    });
    this.standardPlanPCEditConfirm.show();

  }



  public getStandardPlanPCData(): void {
    this.planDetailsService.getStandardPlanPC().subscribe(data => {
      this.demoGBTable = data ? data : this.demoGBTable;
    });

  }
}
