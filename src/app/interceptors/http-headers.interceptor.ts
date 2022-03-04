import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '995c45f7eemsh5b6521221cf5075p13e47fjsn56be05148696',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'bf319c90c77547df88185736a8708afe',
            }
        });
        return next.handle(req);
    }
}