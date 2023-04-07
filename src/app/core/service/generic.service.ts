import { HttpClient } from "@angular/common/http";

export class GenericService {

    protected url: string = "http://172.17.0.3:8989";

    headerAuth = {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Headers': '*',
        'Authorization': 'bearer token'
    }

    header = {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Headers': '*'
    }
}