import type { Optional } from 'sequelize'

export interface StudentAttributes {
  username: string
  email: string
  password: string
  info: {
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
}

export interface StudentTableAttributes {
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


export interface StudentCreationAttributes extends Optional<StudentAttributes, 'email' > {}

