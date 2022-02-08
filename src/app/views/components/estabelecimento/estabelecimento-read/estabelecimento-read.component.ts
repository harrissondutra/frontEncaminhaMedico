import { Estabelecimento } from 'src/app/models/Estabelecimento';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento-read',
  templateUrl: './estabelecimento-read.component.html',
  styleUrls: ['./estabelecimento-read.component.css']
})
export class EstabelecimentoReadComponent implements AfterViewInit {

  estabelecimento: Estabelecimento[] = [];

  displayedColumns: string[] = ['id', 'nomeEstabelecimento', 'telefone', 'endereco'];
  dataSource = new MatTableDataSource<Estabelecimento>(this.estabelecimento);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: EstabelecimentoService) {  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
       this.estabelecimento = resposta;
       this.dataSource = new MatTableDataSource<Estabelecimento>(this.estabelecimento);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    })
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


 


