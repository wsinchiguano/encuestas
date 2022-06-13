import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';
import { FileManagementService } from 'src/app/service/file-management.service';
import { File } from 'src/app/api/file';
import { Metric } from 'src/app/api/metric';
import { Folder } from 'src/app/api/folder';

@Component({
    selector: 'app-apps.filemanagement',
    templateUrl: './apps.filemanagement.component.html',
    styleUrls: ['./apps.filemanagement.scss', '../../../../assets/demo/table.scss']
})
export class AppsFileManagementComponent implements OnInit {

    cols: any[];

    files: File[];

    metrics: Metric[];

    accounts: Folder[];

    folders: Folder[];

    constructor(private breadcrumbService: BreadcrumbService, private fileService: FileManagementService ) {
        this.breadcrumbService.setItems([
            { label: 'File Management' }
        ]);
    }

    ngOnInit() {
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'date', header: 'Date' },
            { field: 'file size', header: 'File Size' },
            { field: 'status', header: 'Status' }
        ];

        this.fileService.getFiles().then(data => this.files = data);
        this.fileService.getMetrics().then(data => this.metrics = data);
        this.fileService.getFoldersSmall().then(data => this.accounts = data);
        this.fileService.getFoldersLarge().then(data => this.folders = data);
    }
}
