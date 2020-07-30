import { DotenvParseOutput } from 'dotenv';

export interface Settings extends DotenvParseOutput {
  MONGO_HOST?: string;
}
