import { Injectable } from "@angular/core";
import { HttputilityService } from "../app/httputility.service";
@Injectable({
  providedIn: "root",
})
export class GPSService {
  constructor(private _httputilityService: HttputilityService) {}

  // GetGPSDetails(Property:number,AgentID:string) {
  //   return this._httputilityService.Get("GetGPSDetails?Property=" + Property + "&AgentID=" + AgentID);
  // }

  GetGPSDetails(ReportID:any) {
    return this._httputilityService.Get("GetGPSDetails?rptId=" + ReportID);
  }

  GetGPSDetailsPost(Model:any) {
    return this._httputilityService.Add("GetGPSDetails",Model);
  }
  
}
