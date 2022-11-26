import mongoose from 'mongoose'
import * as Entitiy from '../entities'

type Environment = 'production' | 'development' | 'testing' | undefined
const environment = process.env.NODE_ENV as Environment

if (!environment) throw new Error('No environment')
