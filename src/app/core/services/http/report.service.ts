import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { MealReportModel } from "@core/models/meal-report.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({ providedIn: "root" })
export class ReportService {

    http = inject(HttpClient);

    public report(): Observable<MealReportModel> {
        return this.http.get<MealReportModel>(`${environment.apiUrl}/meal-report`);
    }

}