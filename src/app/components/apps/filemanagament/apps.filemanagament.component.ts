import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/appconfig';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';


interface File {
    name: string;
    image: string;
    date: string;
    fileSize: string;
}

@Component({
    selector: 'app-apps.filemanagament',
    templateUrl: './apps.filemanagament.component.html',
    styleUrls: ['./apps.filemanagament.scss']


})
export class AppsFilemanagamentComponent {

    @ViewChildren('buttonEl') buttonEl: QueryList<ElementRef>;
    files: File[] = [
        {
            name: "Jing Lee.jpeg",
            image: "assets/demo/images/avatar/elwinsharvill.png",
            date: "29 Jul 2021",
            fileSize: "12 MB"
        },
        {
            name: "Tableart.jpeg",
            image: "assets/demo/images/avatar/bernardodominic.png",
            date: "29 Jul 2021",
            fileSize: "6 MB"
        },
        {
            name: "Deeppassion.waw",
            image: "assets/demo/images/avatar/ionibowcher.png",
            date: "29 Jul 2021",
            fileSize: "32 MB"
        },
        {
            name: "Clock.png",
            image: "assets/demo/images/avatar/bernardodominic.png",
            date: "29 Jul 2021",
            fileSize: "12 MB"
        },
        {
            name: "CV.pdf",
            image: "assets/demo/images/avatar/profile.jpg",
            date: "29 Jul 2021",
            fileSize: "1.6 MB"
        },
        {
            name: "Abstract.png",
            image: "assets/demo/images/avatar/amyelsner.png",
            date: "29 Jul 2021",
            fileSize: "1.8 MB"
        }
    ];

    uploadedFiles = [];

    showRemove: boolean = false;

    cols = [
        { field: 'name', header: 'Name' },
        { field: 'price', header: 'Price' },
        { field: 'file size', header: 'File Size' },
        { field: 'status', header: 'Status' },

    ];;

    events: any[];

    folders = [
        {

            name: "Miami 2022",
            icon: "pi pi-folder",
            type: "12 Item"
        }, {

            name: "Protoype",
            icon: "pi pi-folder",
            type: "1 Item"
        },
        {

            name: "Other Files",
            icon: "pi pi-folder",
            type: "53 Item"
        },
        {

            name: "Antalya Holiday",
            icon: "pi pi-folder",
            type: "1 Item"
        },
        {

            name: "Studio Photograpy",
            icon: "pi pi-folder",
            type: "3 Item"
        },
        {

            name: "Server Backup",
            icon: "pi pi-folder-open",
            type: "9 Item"
        },
        {

            name: "Document Files",
            icon: "pi pi-folder",
            type: "53 Item"
        },
        {

            name: "Vocals",
            icon: "pi pi-image",
            type: "0"
        },
        {

            name: "Volces",
            icon: "pi pi-folder-open",
            type: "6 Item"
        },


    ];

    data = {
        datasets: [
            {
                data: [300, 100],
                backgroundColor: [
                    "#1F2ED0",
                    "#495057"
                ]
            }]
    };

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'File Managament' }
        ]);
    }

    onUpload(event) {
        for (let file of event.files) {
            this.uploadedFiles.push(file);
        }
    }

    onImageMouseOver(file) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
        })
    }

    onImageMouseLeave(file) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
        })
    }

    removeImage(file) {
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

}
