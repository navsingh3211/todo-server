import mongoose from 'mongoose';

const database = async (mongoUrl)=>{
  try{
    const conn = await mongoose.connect(mongoUrl,{
      dbName:'todo-app'
    });
    console.log(`🔗🔗🔗🔗 MongoDB Connected: ${conn.connection.host} 🔗🔗🔗🔗`);
    console.log('Connection to the database is successful✅.');
  }catch(error){
    console.error(
      `🔗‍💥🔗‍💥🔗‍💥🔗‍💥  ${error} 🔗‍💥🔗‍💥🔗‍💥🔗‍💥`
    );
    console.log('Could not connect to the database.', error);
    process.exit(1);
  }
  
}

export default database;
