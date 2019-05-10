import { Injectable } from '@angular/core';
import { ICourse } from '../models/course';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: any[];
  private url: string = 'http://localhost:62634/api/course';
  dataSource: any;

  getCourses(): any[] {
    return COURSES;
  }

  getCoursesApi(): any[] {
    return this.dataSource;
  }

  constructor() {
    this.dataSource = AspNetData.createStore({
      key: 'id',
      loadUrl: this.url
      //  onBeforeSend: function(method, ajaxOptions) {
      //    ajaxOptions.xhrFields = { withCredentials: true };
      //  }
    });
  }
}

const COURSES: ICourse[] = [
  {
    id: 0,
    courseCode: '100001',
    name: 'Reading, Grade PK',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\r\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\r\n Listening, vocabulary,\r\nspeaking, writing, uses of print, and characteristics of written language',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 1,
    courseCode: '100002',
    name: 'Reading, Grade K',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\n\n \n\n\n\nReading literature, reading informational text, foundational\nreading skills; skills acquisition, reading techniques, beginning reading to expanding\nreading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Electives',
    status: null
  },
  {
    id: 2,
    courseCode: '100003',
    name: 'Reading, Grade 1',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION. \n\nReading literature, reading informational text, foundational\nreading skills; skills acquisition, reading techniques, beginning reading to\nexpanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 3,
    courseCode: '100004',
    name: 'Reading, Grade 2',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION. \n\n\n\nReading literature, reading informational text, foundational\nreading skills; skills acquisition, reading techniques, beginning reading to\nexpanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 4,
    courseCode: '100005',
    name: 'Reading, Grade 3',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\n\n Reading literature, reading informational text, foundational\nreading skills; skills acquisition, reading techniques, beginning reading to\nexpanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 5,
    courseCode: '100006',
    name: 'Reading, Grade 4',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\n\n Reading literature, reading informational text, foundational\nreading skills; skills acquisition, reading techniques, beginning reading to\nexpanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 6,
    courseCode: '100007',
    name: 'Reading, Grade 5',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\n\n Reading literature, reading informational text,\nfoundational reading skills; skills acquisition, reading techniques, beginning\nreading to expanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Electives',
    status: null
  },
  {
    id: 7,
    courseCode: '100008',
    name: 'Reading, Grade 6',
    description:
      'NOTE: FOR TEACHING READING TO STUDENTS WITH DISABILITIES IN\nGRADES P-6, SEE THE SPECIAL EDUCATION COURSES SECTION.\n \nReading literature, reading informational text; skills acquisition, reading\ntechniques, beginning reading to expanding reading power',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Electives',
    status: null
  },
  {
    id: 8,
    courseCode: '100009',
    name: 'Reading Intervention, Grades PK-6',
    description: 'Remedial work in reading',
    cipCode: null,
    beginServiceYear: 2012,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Elective Elementary',
    classType: null,
    subjectArea: 'Electives',
    status: null
  },
  {
    id: 9,
    courseCode: '100010',
    name: 'Honors/Advanced Reading PK-6',
    description:
      'Advanced work in skills acquisition, reading techniques, beginning reading to expanding reading power',
    cipCode: null,
    beginServiceYear: 2012,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: null
  },
  {
    id: 10,
    courseCode: '100011',
    name: 'Mathematics, Grade PK',
    description:
      'Students begin to develop an awareness and understanding of numbers; develop\nan understanding of basic geometric shapes; develop a sense of space; show\nawareness of, recognize, and create patterns; explore concepts of basic\nmeasurements; and analyze data within small and large group settings.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: 2018,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: null,
    status: 'Retired'
  },
  {
    id: 11,
    courseCode: '100012',
    name: 'Mathematics, Grade K',
    description:
      'Students will know number names and the count sequence; count to tell\nthe number of objects; compare numbers; understand addition as putting together\nand adding to, and understand subtraction as taking apart and taking from; work\nwith numbers 11-19 to gain foundations for place value; describe and compare\nmeasurable attributes; classify objects and count the number of objects in categories;\nidentify and describe shapes; and analyze, compare, create, and compose shapes.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 12,
    courseCode: '100013',
    name: 'Mathematics, Grade 1',
    description:
      'Students will represent and solve problems involving addition and\nsubtraction; understand and apply properties of operations and the relationship\nbetween addition and subtraction; add and subtract within 20; work with\naddition and subtraction equations; extend the counting sequence; understand\nplace value; use place value understanding and properties of operations to add\nand subtract; measure lengths indirectly and by iterating length units; tell\nand write time; represent and interpret data; and reason with shapes and their\nattributes.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 13,
    courseCode: '100014',
    name: 'Mathematics, Grade 2',
    description:
      'Students will represent and solve problems involving addition and\nsubtraction; add and subtract within 20; work with equal groups of objects to\ngain foundations for multiplication; understand place value; use place value\nunderstanding and properties of operations to add and subtract; measure and\nestimate lengths in standard units; relate addition and subtraction to length;\nwork with time and money; represent and interpret data; and reason with shapes\nand their attributes.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 14,
    courseCode: '100015',
    name: 'Mathematics, Grade 3',
    description:
      'Students will represent and solve problems involving multiplication and\ndivision; understand properties of multiplication and the relationship between\nmultiplication and division; multiply and divide within 100; solve problems\ninvolving the four operations, and identify and explain patterns in arithmetic;\nuse place value understanding and properties of operations to perform\nmulti-digit arithmetic; develop understanding of fractions as numbers; solve\nproblems involving measurement and estimation of intervals of time, liquid\nvolumes, and masses of objects; represent and interpret data; geometric\nmeasurement: understand concepts of area\nand relate area to multiplication and to addition; geometric measurement: recognize perimeter as an attribute of plane\nfigures and distinguish between linear and area measures; and reason with\nshapes and their attributes.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 15,
    courseCode: '100016',
    name: 'Mathematics, Grade 4',
    description:
      'Students will use the four operations with whole numbers to solve\nproblems; gain familiarity with factors and multiples; generate and analyze\npatterns; generalize place value understanding for multi-digit whole numbers;\nuse place value understanding and properties of operations to perform\nmulti-digit arithmetic; extend understanding of fraction equivalence and\nordering; build fractions from unit fractions by applying and extending\nprevious understandings of operations on whole numbers; understand decimal\nnotation for fraction, and compare decimal fractions; solve problems involving\nmeasurement and conversion of measurement from a larger unit to a smaller one;\nrepresent and interpret data; geometric measurement: understand concepts of angle and measure\nangles; draw and identify lines and angles, and classify shapes by properties\nof their lines and angles.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 16,
    courseCode: '100017',
    name: 'Mathematics, Grade 5',
    description:
      'Students will write and interpret numerical expressions; analyze\npatterns and relationships; understand the place value system; perform\noperations with multi-digit whole numbers and with decimals to hundredths; use\nequivalent fractions as a strategy to add and subtract fractions; apply and\nextend previous understandings of multiplication and division to multiply and\ndivide fractions; convert like measurement units within a given measurement\nsystem; represent and interpret data; geometric measurement: understand concepts of volume and relate\nvolume to multiplication and to addition; graph points on the coordinate plane\nto solve real-world and mathematical problems; and classify two-dimensional\nfigures into categories based on their properties.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 17,
    courseCode: '100018',
    name: 'Mathematics, Grade 6',
    description:
      'Students will understand ratio concepts and use ratio reasoning to solve\nproblems; apply and extend previous understanding of multiplication and\ndivision to divide fractions by fractions; compute fluently with multi-digit\nnumbers and find common factors and multiples; apply and extend previous\nunderstanding of numbers to the system of rational numbers; apply and extend\nprevious understanding of arithmetic to algebraic expressions; reason about and\nsolve one-variable equations and inequalities; represent and analyze quantitative\nrelationships between dependent and independent variables; solve real-world and\nmathematical problems involving area, surface area, and volume; develop\nunderstanding of statistical variability; and summarize and describe\ndistribution.',
    cipCode: null,
    beginServiceYear: 2011,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  },
  {
    id: 18,
    courseCode: '100019',
    name: 'Mathematics Intervention, Grades PK-6',
    description: 'Remedial work in mathematics.',
    cipCode: null,
    beginServiceYear: 2012,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Elective Elementary',
    classType: null,
    subjectArea: 'Electives',
    status: null
  },
  {
    id: 19,
    courseCode: '100020',
    name: 'Honors/Advanced Mathematics PK-6',
    description:
      'Advanced work in mathematical computation, problem-solving skills, and other mathematical concepts',
    cipCode: null,
    beginServiceYear: 2012,
    endServiceYear: null,
    creditType: 'None',
    courseType: 'Core Elementary',
    classType: null,
    subjectArea: 'Mathematics',
    status: null
  }
];
