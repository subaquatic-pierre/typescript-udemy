import { User } from "../models/User";

const testGetAllUsers = () => {
  const collection = User.buildUserCollection();

  collection.events.on("loaded", () => {
    console.log(collection);
  });

  collection.fetch();
};

export default {
  testGetAllUsers,
};
