import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LookupService {
  constructor() { }

  getServiceYears() {
    return SERVICEYEARS;
  }

  getCreditTypes() {
    return CREDITTYPES;
  }

  getCourseTypes() {
    return COURSETYPES;
  }

  getClassTypes() {
    return CLASSTYPES;
  }

  getSubjectAreas() {
    return SUBJECTAREAs;
  }

  getGrades() {
    return GRADES;
  }
}

const GRADES = [
  { id: null, grade: null, name: null },
  { id: -2, grade: 'BK', name: 'Birth to 5 years' },
  { id: -1, grade: 'PK', name: 'PreSchool' },
  { id: 0, grade: '0K', name: 'Kindegarten' },
  { id: 1, grade: '01', name: '1st Grade' },
  { id: 2, grade: '02', name: '2nd Grade' },
  { id: 3, grade: '03', name: '3rd Grade' },
  { id: 4, grade: '04', name: '4th Grade' },
  { id: 5, grade: '05', name: '5th Grade' },
  { id: 6, grade: '06', name: '6th Grade' },
  { id: 7, grade: '07', name: '7th Grade' },
  { id: 8, grade: '08', name: '8th Grade' },
  { id: 9, grade: '09', name: '9th Grade' },
  { id: 10, grade: '10', name: '10th Grade' },
  { id: 11, grade: '11', name: '11th Grade' },
  { id: 13, grade: '00', name: 'Unknown' }
];

const SUBJECTAREAs = [
  { id: null, name: null },
  { id: 1, name: 'English Language Arts' },
  { id: 2, name: 'Mathematics' },
  { id: 3, name: 'Science' },
  { id: 4, name: 'Social Studies' },
  { id: 5, name: 'Career Technical' },
  { id: 6, name: 'Fine Arts' },
  { id: 7, name: 'Foreign Language' },
  { id: 8, name: 'Health' },
  { id: 9, name: 'Physical Education' },
  { id: 10, name: 'Electives' },
  { id: 11, name: 'College Credit' },
  { id: 12, name: 'Career Preparedness' }
];

const CLASSTYPES = [
  { id: null, name: null },
  { id: 1, name: 'Advanced Placement' },
  { id: 2, name: 'Standard Level' },
  { id: 3, name: 'High Level' },
  { id: 4, name: 'Career Technical' },
  { id: 5, name: 'International Baccalaureate' },
  { id: 6, name: 'Collect Credit' }
];

const COURSETYPES = [
  { id: null, code: null, name: null },
  { id: 1, code: '10', name: 'Core Elemenary' },
  { id: 2, code: '20', name: 'Elective Elementary' },
  { id: 3, code: '30', name: 'Special Education Elementary' },
  { id: 4, code: '40', name: 'Core Secondary' },
  { id: 5, code: '50', name: 'Elective Secondary' },
  { id: 6, code: '60', name: 'Special Education Secondary' },
  { id: 7, code: '70', name: 'Special Education Alternate Achievment' },
  { id: 8, code: '80', name: 'Career Tech' },
  { id: 9, code: '81', name: 'Core Career Tech' },
  { id: 10, code: '90', name: 'College Credit' }
];

const CREDITTYPES = [
  { id: null, name: null },
  { id: 1, name: 'None' },
  { id: 2, name: 'Half' },
  { id: 3, name: 'Full' },
  { id: 4, name: 'Double' },
  { id: 5, name: 'Triple' },
  { id: 6, name: 'Quarter' }
];

const SERVICEYEARS = [
  { id: null, year: null },
  { id: 52, year: 2011 },
  { id: 53, year: 2012 },
  { id: 54, year: 2013 },
  { id: 55, year: 2014 },
  { id: 56, year: 2015 },
  { id: 57, year: 2016 },
  { id: 58, year: 2017 },
  { id: 59, year: 2018 },
  { id: 60, year: 2019 },
  { id: 61, year: 2020 }
];
