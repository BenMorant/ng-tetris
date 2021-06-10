import { AppComponent } from "./app.component";
import { BoardComponent } from "./board.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [AppComponent, BoardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
