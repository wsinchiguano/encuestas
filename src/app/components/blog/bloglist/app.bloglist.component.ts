import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/service/app.breadcrumb.service';

@Component({
    selector: 'app-app.bloglist',
    templateUrl: './app.bloglist.component.html',
    styleUrls: ['./bloglist.component.scss']

})
export class AppBloglistComponent implements OnInit {

    selectedSort: any;

    sort: any[];

    rowCount = 6;

    paginatedBlogs = [];

    totalBlogs = [
        {
            image: "assets/layout/images/Rectangle 45.svg",
            profile: "assets/layout/images/Ellipse 41.svg",
            title: "Blog",
            description: "Ornare egestas pellentesque facilisis in a ultrices erat diam metus integer sed",
            comment: "1",
            share: "3",
            clock: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_3P3NHLZGCp8.svg",
            profile: "assets/layout/images/Ellipse 41-2.svg",
            title: "Magazine",
            description: "Magna iaculis sagittis, amet faucibus scelerisque non ornare non in penatibus ",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_CyRh1ugq8GI.svg",
            profile: "assets/layout/images/Ellipse 41-3.svg",
            title: "Science",
            description: "Purus mattis mi, libero maecenas volutpat quis a morbi arcu pharetra, mollis",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_6KQETG8J-zI.svg",
            profile: "assets/layout/images/Ellipse 41-4.svg",
            title: "Blog",
            description: "Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_e4xOmzd8vzg.svg",
            profile: "assets/layout/images/Ellipse 41-5.svg",
            title: "Magazine",
            description: "Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_K_TbABnVzHo.svg",
            profile: "assets/layout/images/Ellipse 41-6.svg",
            title: "Science",
            description: "Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_6KQETG8J-zI.svg",
            profile: "assets/layout/images/Ellipse 41.svg",
            title: "Second Blog",
            description: "Curabitur vitae sit justo facilisi nec, sodales proin aliquet libero volutpat nunc",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_e4xOmzd8vzg.svg",
            profile: "assets/layout/images/Ellipse 41-2.svg",
            title: "Magazine",
            description: "Id eget arcu suspendisse ullamcorper dolor lobortis dui et morbi penatibus quam",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        }, {
            image: "assets/layout/images/unsplash_K_TbABnVzHo.svg",
            profile: "assets/layout/images/Ellipse 41-3.svg",
            title: "Science",
            description: "Sagittis hendrerit laoreet dignissim sed auctor sit pellentesque vel diam iaculis et",
            comment: "1",
            share: "3",
            day: "09",
            mounth: "October"
        },
    ];




    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Blog List' }
        ]);

    }

    ngOnInit(): void {
        this.paginatedBlogs = this.totalBlogs.slice(0, this.rowCount);
        
        this.sort = [
            { name: 'Name' },
            { name: 'Description' },
        ];
    }

    paginate(event) {
        this.paginatedBlogs = this.totalBlogs.slice(event.first, (event.first + this.rowCount));
    }
}
