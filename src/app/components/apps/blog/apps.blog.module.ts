import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { CheckboxModule } from "primeng/checkbox";
import { ChipModule } from "primeng/chip";
import { ColorPickerModule } from "primeng/colorpicker";
import { DataViewModule } from "primeng/dataview";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputSwitchModule } from "primeng/inputswitch";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from "primeng/knob";
import { ListboxModule } from "primeng/listbox";
import { MenuModule } from "primeng/menu";
import { MultiSelectModule } from "primeng/multiselect";
import { PaginatorModule } from "primeng/paginator";
import { RadioButtonModule } from "primeng/radiobutton";
import { RatingModule } from "primeng/rating";
import { RippleModule } from "primeng/ripple";
import { SelectButtonModule } from "primeng/selectbutton";
import { SliderModule } from "primeng/slider";
import { TableModule } from "primeng/table";
import { ToggleButtonModule } from "primeng/togglebutton";
import { BlogCardComponent } from "./blog-card/blog-card.component";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { NewCommentComponent } from "./new-comment/new-comment.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogEditComponent } from "./blog-edit/blog-edit.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { AppsBlogRoutingModule } from "./apps.blog-routing.module";
import { BlogService } from "src/app/service/blog.service";

@NgModule({
    imports: [
        CommonModule,
        AppsBlogRoutingModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        FormsModule,
        ChipModule,
        FileUploadModule,
        InputSwitchModule,
        EditorModule,
        InputMaskModule,
        InputNumberModule,
        ColorPickerModule,
        CascadeSelectModule,
        MultiSelectModule,
        ToggleButtonModule,
        SliderModule,
        InputTextareaModule,
        RadioButtonModule,
        RatingModule,
        KnobModule,
        ListboxModule,
        SelectButtonModule,
        CheckboxModule,
        AvatarModule,
        FormsModule,
        TableModule,
        RippleModule,
        MenuModule,
        PaginatorModule,
        DataViewModule,        
        ButtonModule,
        RippleModule,
        DividerModule
    ],
    declarations: [BlogDetailComponent, BlogEditComponent, BlogListComponent, NewCommentComponent, CommentListComponent, BlogCardComponent],
    providers: [BlogService]
})
export class AppsBlogModule { }
