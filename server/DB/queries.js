const tableTest = () => {
    return `SELECT * FROM comments`;
  };

const tablePost = (comment, date, serial) => {
  console.log(comment,date,serial)
  return `INSERT INTO public.comments(
    comment, date, serial)
    VALUES ('${comment}', '${date}', '${serial}' )`

}

const tableDelete = (serial) => {
  return `DELETE FROM public.comments
	WHERE serial = '${serial}'`;
}
  
  module.exports = {
    tableTest,
    tablePost,
    tableDelete
  };