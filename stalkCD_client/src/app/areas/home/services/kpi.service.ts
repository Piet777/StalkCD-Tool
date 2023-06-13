import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kpi } from 'src/app/shared/models/kpi';

@Injectable({
  providedIn: 'root'
})
export class KpiService {
  private uRL = 'http://localhost:6060/kpis/';

  constructor(private http: HttpClient) { }

  getKpis(repoName: string, workflowName: string){
    return this.http.get<Kpi>(this.uRL + repoName + '/' + workflowName);
  }
}