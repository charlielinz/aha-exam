const handler = async (req, res) => {
  const response = await fetch(
    "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=30"
  );
  const users = await response.json();
  res.send(users);
};

export default handler;
