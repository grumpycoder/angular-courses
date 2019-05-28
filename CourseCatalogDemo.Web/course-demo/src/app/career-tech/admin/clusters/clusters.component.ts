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
  clusterTypes: any[];
  schoolYears: { id: number; year: number; }[];
  programs: any[];

  constructor(private service: CareerTechService, private lookup: LookupService) { }

  ngOnInit() {
    this.clusterTypes = this.lookup.getClusterTypes();
    this.schoolYears = this.lookup.getServiceYears();
    this.service.getPrograms().subscribe(data => {
      this.programs = data;
    });
    // .subscribe(data => {
    //   this.programs = data;
    // });
    this.service.getClusters().subscribe(data => {
      this.clusters = data['data'];
    });
  }

  onSelectionChanged(cluster) {
    if (cluster === null) {
      this.cluster = null;
    } else {
      this.service.getClusterDetails(cluster.clusterCode).subscribe(data => {
        this.cluster = data;
      });
    }
  }

  onSubmit(formValues) {
    this.service.saveCluster(this.cluster).subscribe(() => {
    });
  }


  addProgram(list): void {
    // list.selectedItems.forEach(item => {
    //   console.log('call service to add program', item);
    //   this.service.addProgramCourse(this.course, item).subscribe(
    //     () => {
    //       console.log('add course');
    //       this.course.careerTechPrograms.push(item);

    //     });
    // });
    // list.selectedItems = [];
  }

  onItemDeleting($event) {
    const program = $event.itemData;
    const e = $event;
    // this.service.removeProgramCourse(this.course, program).subscribe(
    //   () => {
    //     console.log(`${this.course.name} was removed`);
    //   },
    //   (error) => {
    //     console.log('delete error', error);
    //     error = true;
    //     $event.cancel = true;

    //   }, () => {
    //     console.log('request completed');
    //     console.log('error', this.error);
    //     // No errors, route to new page
    //   }
    // );
  }

  removeProgram(list) {
    console.log('remove');
    list.selectedItems.forEach(item => {
      console.log('item', item);

      this.service.removeClusterProgram(this.cluster, item).subscribe(
        () => {
          console.log('removed');
          const idx = this.cluster.programs.findIndex(x => x === item);
          this.cluster.programs.splice(idx, 1);
        },
        (error) => {
          console.log('error', error);
        }
      );

    });


    list.selectedItems = [];
  }

  onRemoveComplete(message?: string): void {
    console.log('remove complete', message);
  }

}
