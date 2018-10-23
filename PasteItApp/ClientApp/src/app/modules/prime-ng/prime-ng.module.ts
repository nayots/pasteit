import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  imports: [CommonModule, InputTextareaModule],
  exports: [InputTextareaModule],
  declarations: []
})
export class PrimeNgModule {}
