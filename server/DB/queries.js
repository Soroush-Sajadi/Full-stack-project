const tableTest = () => {
    return `SELECT * FROM comments`;
  };

const tablePost = (comment, date) => {
  return `INSERT INTO public.comments(
    comment, date)
    VALUES ('${comment}', ${date});`

}
  
  module.exports = {
    tableTest,
    tablePost
  };