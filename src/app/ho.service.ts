import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ho } from './ho';
import { HOS } from './mock-hos';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HoService {

  private readonly hosUrl = 'api/hos';

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getHos(): Observable<Ho[]> {
    return this.http.get<Ho[]>(this.hosUrl).pipe(
      tap(_ => this.log('fetched hos')),
      catchError(this.handleError<Ho[]>('getHos', []))
    );
  }

  getHo(id: number): Observable<Ho> {
    const url = `${this.hosUrl}/${id}`;
    return this.http.get<Ho>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Ho>(`getHo id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HoService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  updateHo(ho: Ho): Observable<any> {
    return this.http.put(this.hosUrl, ho, this.httpOptions).pipe(
      tap(_ => this.log(`updated ho id=${ho.id}`)),
      catchError(this.handleError<any>('updateHo'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** POST: add a new hero to the server */
  addHo(ho: Ho): Observable<Ho> {
    return this.http.post<Ho>(this.hosUrl, ho, this.httpOptions).pipe(
      tap((newHo: Ho) => this.log(`added hero w/ id=${newHo.id}`)),
      catchError(this.handleError<Ho>('addHo'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHo(id: number): Observable<Ho> {
    const url = `${this.hosUrl}/${id}`;

    return this.http.delete<Ho>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted ho id=${id}`)),
      catchError(this.handleError<Ho>('deleteHo'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHos(term: string): Observable<Ho[]> {
    if (!term.trim()) {
      // if not search term, return empty ho array.
      return of([]);
    }
    return this.http.get<Ho[]>(`${this.hosUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found hos matching "${term}"`) :
        this.log(`no hos matching "${term}"`)),
      catchError(this.handleError<Ho[]>('searchHos', []))
    );
  }
}

