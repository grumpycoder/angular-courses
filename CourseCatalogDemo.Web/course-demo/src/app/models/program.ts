export interface IProgram {
  id: number;
  programName: string;
  clusterName: string;
  programCode: string;
  clusterCode: string;
}

export interface IProgramEdit {
  id: number;
  schoolYear: number;
  programCode: string;
  name: string;
  beginYear: number;
  endYear: number;
  programTypeId: number;
  clusterId: number;
}

export class ProgramCourse {
  id: number;
  programId: number;
  courseId: number;
  isFoundation: boolean;
  isRequired: boolean;
  isElective: boolean;
  isActive: boolean;
}

export interface ICredential {
  id: number;
  credentialCode: string;
  name: string;
  credentialType: string;
}

export class ProgramCredential {
  programId: number;
  credentialId: number;
}


export interface ICredentialEdit {
  id: number;
  credentialCode: string;
  name: string;
  credentialTypeId: number;
}
