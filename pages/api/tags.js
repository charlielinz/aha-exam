const handler = async (req, res) => {
  const url = "https://avl-frontend-exam.herokuapp.com/api/tags/";
  const response = await fetch(url);
  const tags = await response.json();
  res.send(tags);
};

export default handler;
