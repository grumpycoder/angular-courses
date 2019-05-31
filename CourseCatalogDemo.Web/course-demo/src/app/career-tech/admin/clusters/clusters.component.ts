import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CareerTechService } from 'src/app/shared/career-tech.service';
import { LookupService } from 'src/app/shared/lookup.service';
import { IProgram } from 'src/app/models/program';
import { ICluster } from 'src/app/models/cluster';

@Component({
  selector: 'app-clusters',
  templateUrl: './clusters.component.html',
  styles: []
})
export class ClustersComponent implements OnInit {
  @ViewChild(NgForm) clusterForm: NgForm;
  pageTitle = 'Clusters';
  clusters: ICluster[];
  cluster: ICluster;
  selectedCluster: ICluster;
  clusterTypes: any[];
  schoolYears: { id: number; year: number; }[];


  constructor(private careerTech: CareerTechService, private lookup: LookupService) { }

  ngOnInit() {
    this.clusterTypes = this.lookup.getClusterTypes();
    this.schoolYears = this.lookup.getServiceYears();
    this.careerTech.Clusters().subscribe(data => {
      this.clusters = data['data'];
    });
  }

  onSelectionChanged(cluster) {
    if (cluster === null) {
      this.cluster = null;
    } else {
      this.selectedCluster = cluster;
      this.careerTech.ClusterEdit(cluster).subscribe(data => {
        this.cluster = data;
      });
    }
  }

  onSubmit(formValues) {
    this.careerTech.SaveCluster(this.cluster).subscribe(() => {
    });
  }

}
