import mongoose from 'mongoose';
import app from './app';
import config from './config';

const port:number = 9000

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connection successful')
    app.listen(port, () => {
      console.log(`Cric Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log('database connection failed', error)
  }
}
main()
