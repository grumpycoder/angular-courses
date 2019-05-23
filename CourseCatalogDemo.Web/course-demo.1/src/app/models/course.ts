export interface ICourse {
  id: number;
  courseCode: string;
  name: string;
  description: string;
  cipCode: string;
  beginServiceYearId: number;
  endServiceYearId: number;
  beginServiceYear: number;
  endServiceYear: number;
  creditType: string;
  courseType: string;
  classType: string;
  subjectArea: string;
  status: string;
  creditTypeId?: number;
  careerTechPrograms: any[];
}

export interface CourseResolved {
  course: ICourse;
  error?: any;
}
