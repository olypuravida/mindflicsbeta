import {
    Table,
    Column,
    Model,
    DataType,
    AutoIncrement,
    PrimaryKey,
  } from 'sequelize-typescript'
import type { EmotionTableAttributes, EmotionCreationAttributes } from './types'


  @Table({ tableName: 'emotion', timestamps: true })
  export class Emotion extends Model<EmotionTableAttributes, EmotionCreationAttributes> implements EmotionTableAttributes {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number
  
    @Column(DataType.STRING)
    main!: string
  
    @Column(DataType.STRING)
    emotion!: string


    async json() {
  
      return {
        id: this.id,
        main: this.main,
        emotion: this.emotion,
      }
    }
  }
  