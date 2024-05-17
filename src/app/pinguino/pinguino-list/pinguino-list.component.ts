import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css'],
})
export class PinguinoListComponent implements OnInit {

  getPinguinoWithMaxDistribution(): string {
    let maxDistribution = 0;
    let pinguinoWithMaxDistribution: Pinguino | undefined;

    for (const pinguino of this.pinguinos) {
      const distributionCount = pinguino.global_distribution.split(',').length;
      if (distributionCount > maxDistribution) {
        maxDistribution = distributionCount;
        pinguinoWithMaxDistribution = pinguino;
      }
    }

    return pinguinoWithMaxDistribution?.name ?? '';
  }


  selectedPinguino!: Pinguino;
  selected = false;

  pinguinos: Array<Pinguino> = [];

  constructor(private pinguinoService: PinguinoService) {}

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }

  ngOnInit(): void {
    this.getPinguinos();
  }
}
