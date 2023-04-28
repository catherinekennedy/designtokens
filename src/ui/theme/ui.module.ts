// import { NgModule } from '@angular/core';
// import {ButtonModule} from 'primeng/button';
// import { AvatarModule } from 'primeng/avatar';
// import { AvatarGroupModule } from 'primeng/avatargroup';
// import { CommonModule } from '@angular/common'; 

// @NgModule({
//   declarations: [
//   ],
//   imports: [
//     ButtonModule,
//     AvatarModule,
//     AvatarGroupModule,
//     CommonModule
//   ],
//   exports: [
//     ButtonModule,
//     AvatarModule,
//     AvatarGroupModule,
//     CommonModule
//   ]
// })
// export class UiModule {}


// import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';
import { DockModule } from 'primeng/dock';
import { MenuModule } from 'primeng/menu';
import { DragDropModule } from 'primeng/dragdrop';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SpeedDialModule } from 'primeng/speeddial';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabViewModule } from 'primeng/tabview';

import { MenuItem } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';

//ngx-translate

// import { TranslateModule } from '@ngx-translate/core';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BadgeModule } from 'primeng/badge';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
// import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { KnobModule } from 'primeng/knob';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TieredMenuModule } from 'primeng/tieredmenu';
// import { AngularEditorModule } from '@kolkov/angular-editor';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SplitterModule } from 'primeng/splitter';
import { ChipModule } from 'primeng/chip';

//

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
],
  exports: [
    TabViewModule,
    CardModule,
    ButtonModule,
    TooltipModule,
    MenubarModule,
    SidebarModule,
    PanelMenuModule,
    PanelModule,
    DockModule,
    MenuModule,
    DragDropModule,
    TabMenuModule,
    ToolbarModule,
    SplitButtonModule,
    ToggleButtonModule,
    ProgressBarModule,
    TagModule,
    SplitButtonModule,
    AvatarModule,
    AvatarGroupModule,
    DialogModule,
    ConfirmDialogModule,
    SpeedDialModule,
    ProgressSpinnerModule,
    TableModule,
    DropdownModule,
    BreadcrumbModule,
    ScrollPanelModule,
    SlideMenuModule,
    BadgeModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    // EditorModule,
    InputMaskModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    KnobModule,
    KeyFilterModule,
    MultiSelectModule,
    PasswordModule,
    RadioButtonModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    TreeSelectModule,
    TriStateCheckboxModule,
    TieredMenuModule,
    MessagesModule,
    MessageModule,
    OverlayPanelModule,
    SplitterModule,
    ChipModule,
    CommonModule
  
  ],
})
export class UiModule {}
