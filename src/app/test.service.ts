import { Injectable } from "@angular/core";
import { DownloadModule } from "./download/download.module";

@Injectable({
  providedIn: "root"
})



export class TestService
{
  name:string = 'hlbessa';
  printName()
  {
    window.alert(this.name);
  }
}
