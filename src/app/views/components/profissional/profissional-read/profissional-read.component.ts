import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Profissional } from 'src/app/models/Profissional';
import { profissionalService } from '../../../../services/profissional.service';

@Component({
  selector: 'app-profissional-read',
  styleUrls: ['profissional-read.component.css'],
  templateUrl: 'profissional-read.component.html',
})
export class ProfissionalReadComponent implements AfterViewInit {

  profissionais: Profissional[] = [];

  displayedColumns: string[] = ['id', 'name', 'email', 'telefone', 'telefoneCelular', 'endereco'];
  dataSource = new MatTableDataSource<Profissional>(this.profissionais);

  @ViewChild(MatPaginator) paginator!: MatPaginator ;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service : profissionalService, private router: Router) {  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
       this.profissionais = resposta;
       this.dataSource = new MatTableDataSource<Profissional>(this.profissionais);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    })
  }

  navigateToCreate():void{
      this.router.navigate(['profissional/create'])
  }

  ngAfterViewInit() {
    this.findAll();
   
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


 
