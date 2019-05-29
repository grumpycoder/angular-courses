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


  constructor(private service: CareerTechService, private lookup: LookupService) { }

  ngOnInit() {
    this.clusterTypes = this.lookup.getClusterTypes();
    this.schoolYears = this.lookup.getServiceYears();
    this.service.Clusters().subscribe(data => {
      this.clusters = data['data'];
      console.log(this.clusters);

    });

    // this.service.getPrograms().subscribe(data => {
    //   this.programs = data;
    // });
    // this.service.getClusters().subscribe(data => {
    //   this.clusters = data['data'];
    // });
  }

  onSelectionChanged(cluster) {
    if (cluster === null) {
      this.cluster = null;
    } else {
      this.selectedCluster = cluster;
      this.service.ClusterEdit(cluster).subscribe(data => {
        this.cluster = data;
      });
    }
  }

  onSubmit(formValues) {
    this.service.SaveCluster(this.cluster).subscribe(() => {
    });
  }

}
