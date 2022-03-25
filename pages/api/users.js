const handler = async (req, res) => {
  const url = "https://avl-frontend-exam.herokuapp.com/api/users/all";
  const response = await fetch(url);
  const users = await response.json();
  res.send(users);
};

export default handler;
