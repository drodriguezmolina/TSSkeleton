import {api} from "./src/TikTokApi";

const getUser = async (userId : string) => {
  const user = await api.getUser(userId);
  return user;
}

getUser('1')
    .then(r => console.log(r.data))
    .catch(e => console.log(e));


