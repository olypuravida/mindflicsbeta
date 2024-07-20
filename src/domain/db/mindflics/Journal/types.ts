import type { Optional } from 'sequelize'

export interface JournalAttributes {
    title: string
    content: string
    userId: string | number | undefined
}

export interface JournalTableAttributes {
  title: string
  content: string
  userId: string
}


export interface JournalCreationAttributes extends Optional<JournalAttributes, 'userId' > {}

