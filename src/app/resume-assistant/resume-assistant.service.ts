import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


export interface Entity {
  text: string;
  type?: string;
  start?: number;
  end?: number;
}

@Injectable({providedIn: 'root'})
export class ResumeAssistantService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public analyse(jobPosting: String): Observable<any> {
    const url = "http://api.tofino.glucn.com/api/v1/resume/analyze";

    return this.http.post(url, {'job_posting': jobPosting}, this.httpOptions);
  }

}
