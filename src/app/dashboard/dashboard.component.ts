import { Component, OnInit } from '@angular/core';
import { Ho } from '../ho';
import { HoService } from '../ho.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  hos: Ho[] = [];

  constructor(private hoService: HoService) { }

  ngOnInit(): void {
    this.getHos();
  }

  getHos(): void {
    this.hoService.getHos().subscribe(hos => this.hos = hos.slice(1, 5));
  }
}
