import type { Optional } from 'sequelize'

export interface CounsellorAttributes {
  data: {
    username: string
    email: string
    password: string
    info: {
      firstName: string,
      lastName: string,
      birthDate: Date | string,
      address: string,
      phone: string,
      school:string,
      position: string | null,
      class: string,
      docType: string,
      docID: string,
      avatar: string | null,
      gender: string
    }
  }
}

export interface CounsellorTableAttributes {
  username: string
  email: string
  password: string
  firstname: string,
  lastname: string,
  birthdate: Date | string,
  address: string,
  phone: string,
  school:string,
  position: string,
  class: string,
  doctype: string,
  docid: string,
  avatar: string,
  gender: string
}


export interface CounsellorCreationAttributes extends Optional<CounsellorAttributes, 'data' > {}

