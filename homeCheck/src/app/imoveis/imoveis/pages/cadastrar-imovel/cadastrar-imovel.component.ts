import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';


@Component({
  selector: 'app-cadastrar-imovel',
  templateUrl: './cadastrar-imovel.component.html',
  styleUrls: ['./cadastrar-imovel.component.css']
})
export class CadastrarImovelComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, private router: Router, usuarioService: UsuarioService) { }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
  onAtualizacao(){
    this.router.navigate(['imoveis']);
  }
}
