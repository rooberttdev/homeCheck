import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-atualizar-dashboard',
  templateUrl: './atualizar-dashboard.component.html',
  styleUrls: ['./atualizar-dashboard.component.css']
})
export class AtualizarDashboardComponent {
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}


}

