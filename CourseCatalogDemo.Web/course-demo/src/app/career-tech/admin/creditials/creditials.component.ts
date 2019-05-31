import { Component, OnInit } from '@angular/core';
import { CareerTechService } from 'src/app/shared/career-tech.service';
import { ICredential, ICredentialEdit } from 'src/app/models/program';
import { LookupService } from 'src/app/shared/lookup.service';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

@Component({
  templateUrl: './creditials.component.html',
  styles: []
})
export class CreditialsComponent implements OnInit {
  credentials: ICredential[];
  credentialTypes: any;
  credential: ICredentialEdit;
  data: any;

  constructor(private careerTech: CareerTechService, private lookup: LookupService) { }

  ngOnInit() {
    this.careerTech.Credentials().subscribe(data => {
      this.data = new DataSource({
        store: new ArrayStore({
          data,
          key: 'id'
        })
      });
    });

    this.credentialTypes = this.lookup.getCredentialTypes();
    this.careerTech.Credentials().subscribe(data => {
      this.credentials = data;
    });
  }

  onSelectionChanged(item) {
    this.careerTech.CredentialEdit(item.credentialCode).subscribe(data => {
      this.credential = data;
    });
  }

  onSubmit(formValues) {
    this.careerTech.SaveCredential(this.credential).subscribe(data => {
    });
  }
}
