import mongoose from "mongoose";
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
const connectToDB=async()=>{
    const url=`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.yzkj8ly.mongodb.net/`
    mongoose
    .connect(connectionUrl, configOptions)
    .then(() => console.log("Ecommerce database connected successfully!"))
    .catch((err) =>
      console.log(`Getting Error from DB connection ${err.message}`)
    );
}
export default connectToDB;