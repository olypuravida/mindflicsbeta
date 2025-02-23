import 'reflect-metadata'
import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

import { Sequelize } from 'sequelize-typescript'
import config from './config/sequelize'

import {
  Journal
} from './mindflics'

let sequelize: Sequelize
// let orm: MikroORM

export const useMinflicsUser = () => {
  const libsql = createClient({
    url: process.env.MINDFLICS_JOURNAL_DATABASE_URL as string,
    authToken: process.env.MINDFLICS_USER_AUTH_TOKEN,
  })


  const adapter = new PrismaLibSQL(libsql)
  return new PrismaClient({ adapter })
}

export const useSequelize = () => {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}

export const journalDb = async (sync: boolean = false) => {
  if (!sequelize) { useSequelize() }

  sequelize.addModels([
    Journal
  ])

  if (sync) {
    await sequelize.sync()
  }

  return {
    sequelize,
    Journal,
  }
}
