import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { WalletService } from '../../services';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
  wallets: any;
  ofSet = 0;
  totalRegisters = 0;

  constructor(
    private modalService: NgbModal,
    private walletServ: WalletService
  ) {}

  ngOnInit(): void {
    this.getAllWallets();
  }

  public getAllWallets(): void {
    this.walletServ.getWallets()
    .subscribe((data: any) => {
      if (data) {
        this.wallets = (data) ? data.wallets : [];
      }
    });
  }

  changeOfSet(val: number): any {
    const ofSet = this.ofSet + val;

    if (ofSet >= this.totalRegisters) {
      return;
    }
    if (ofSet < 0) {
      return;
    }

    this.ofSet += val;
    this.getAllWallets();
  }

  viewDetails(wallet: any): void {
    // const modalRef = this.modalService.open(DetailArticleComponent, {
    //   centered: true,
    // });
    // modalRef.componentInstance.detail = wallet;
  }

  deleteWallet(idWallet: string): any {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Estas seguro de eliminar el registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, eliminar!',
      cancelButtonText: 'No, cancelar!',
    }).then((result) => {
      if (result.isConfirmed) {
        // this.artServ.deleteArticle(idWallet).subscribe(() => {
        //   Swal.fire(
        //     'Articulo!',
        //     'Registro eliminado correctamente.',
        //     'success'
        //   );
        //   this.getAllWallets();
        // });
      }
    });
  }
}
