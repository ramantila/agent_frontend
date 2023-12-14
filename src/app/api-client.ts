import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

// @Injectable({
//     providedIn: 'root'
// })

export class ApiHttpClient{
    
    constructor(private http: HttpClient){}

    get(url: string){
        return this.http.get("http://localhost:8080/api/v1/" + url);
    }

    post(url: string, data: any): any{
        return this.http.post(
          "http://localhost:8080/api/v1/" + url,
          data
        );
    }

    commonUpdate(url: string, id: string, data: any): any {
        return this.http.post(
          `http://localhost:8080/api/v1/${url}/${id}`,
          data
        );
    }
}

