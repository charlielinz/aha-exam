const handler = async (req, res) => {
  const queryString = new URLSearchParams(req.query);
  const url = `https://avl-frontend-exam.herokuapp.com/api/users/all?${queryString}`;
  const response = await fetch(url);
  const users = await response.json();
  res.send(users);
};

export default handler;
