import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
  } from 'sequelize-typescript'
import type { CounsellorTableAttributes, CounsellorCreationAttributes } from './types'


  @Table({ tableName: 'counsellor', timestamps: true })
  export class Counsellor extends Model<CounsellorTableAttributes, CounsellorCreationAttributes> implements CounsellorTableAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number
  
    @Column(DataType.STRING)
    username!: string
  
    @Column(DataType.STRING)
    email!: string
  
    @Column(DataType.STRING)
    password!: string

    @Column(DataType.STRING)
    firstname!: string

    @Column(DataType.STRING)
    lastname!: string

    @Column(DataType.STRING)
    avatar!: string

    @Column(DataType.STRING)
    gender!: string

    @Column(DataType.DATE)
    birthdate!: Date | string

    @Column(DataType.STRING)
    phone!: string

    @Column(DataType.STRING)
    doctype!: string

    @Column(DataType.STRING)
    docid!: string

    @Column(DataType.STRING)
    school!: string

    @Column(DataType.STRING)
    class!: string

    @Column(DataType.STRING)
    position!: string

    @Column(DataType.STRING)
    address!: string

    async json() {
  
      return {
        id: this.id,
        username: this.username,
        password: this.password,
        email: this.email,
        info: {
          firstName: this.firstname,
          lastName: this.lastname,
          birthDate: this.birthdate,
          address: this.address,
          phone: this.phone,
          school: this.school,
          position: this.position,
          class: this.class,
          docType: this.doctype,
          docID: this.docid,
          avatar: this.avatar,
          gender: this.gender
        },
      }
    }
  }
  