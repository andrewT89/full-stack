import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from '../../../services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss'],
})
export class CreateWalletComponent implements OnInit {
  walletForm: FormGroup;
  constructor(private router: Router, private walletServ: WalletService) {}

  ngOnInit(): void {
    this.walletForm = new FormGroup({
      identification: new FormControl(null, []),
      balance: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.required]),
    });
  }

  saveWallet(): void {
    if (this.walletForm.valid) {
      this.walletServ.create(this.walletForm.value).subscribe((data: any) => {
        if (data) {
          Swal.fire('Wallet!', 'Registro almacenado correctamente.', 'success');
          this.router.navigate(['/wallets']);
        }
      });
    }
  }
}
