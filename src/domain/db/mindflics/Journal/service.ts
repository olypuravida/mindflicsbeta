import { journalDb } from '../../journal'

export const getJournals = async () => {
  const { Journal } = await journalDb()
  const journals = await Journal.findAll()
  return journals
}
