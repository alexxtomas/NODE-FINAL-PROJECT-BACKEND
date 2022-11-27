import mongoose from 'mongoose'

export default async (dbConnectionString: string): Promise<void> => {
  try {
    await mongoose.connect(dbConnectionString)
  } catch (e) {
    throw new Error('Error to connect to mongoDB')
  }
}
