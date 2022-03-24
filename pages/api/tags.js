const handler = async (req, res) => {
  const response = await fetch(
    "https://avl-frontend-exam.herokuapp.com/api/tags/"
  );
  const tags = await response.json();
  res.send(tags);
};

export default handler;
