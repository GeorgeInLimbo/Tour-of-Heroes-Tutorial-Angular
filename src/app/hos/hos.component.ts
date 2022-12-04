import { Component } from '@angular/core';
import { Ho } from '../ho';
import { HoService } from '../ho.service';
import { OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hos',
  templateUrl: './hos.component.html',
  styleUrls: ['./hos.component.scss']
})

export class HosComponent implements OnInit {

  hos: Ho[] = [];

  constructor(private hoService: HoService) { }

  getHos(): void {
    this.hoService.getHos().subscribe(hos => this.hos = hos);
  }
  ngOnInit(): void {
    this.getHos();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.hoService.addHo({ name } as Ho)
      .subscribe(ho => {
        this.hos.push(ho);
      });
  }

  delete(ho: Ho): void {
    this.hos = this.hos.filter(h => h !== ho);
    this.hoService.deleteHo(ho.id).subscribe();
  }

}


