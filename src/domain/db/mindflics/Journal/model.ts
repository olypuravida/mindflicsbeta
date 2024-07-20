import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
  } from 'sequelize-typescript'
import type { JournalTableAttributes, JournalCreationAttributes } from './types'


  @Table({ tableName: 'journal', timestamps: true })
  export class Journal extends Model<JournalTableAttributes, JournalCreationAttributes> implements JournalTableAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number
  
    @Column(DataType.STRING)
    title!: string
  
    @Column(DataType.STRING)
    content!: string
  
    @Column(DataType.STRING)
    userId!: string

    async json() {
  
      return {
        id: this.id,
        title: this.title,
        content: this.content,
        userId: this.userId,
      }
    }
  }
  