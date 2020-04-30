const tableTest = () => {
    return `SELECT * FROM comments`;
  };

const tablePost = (comment, date, serial) => {
  console.log(comment,date,serial)
  return `INSERT INTO public.comments(
    action ,comment, date, serial)
    VALUES ('false','${comment}', '${date}', '${serial}' )`

}

const tableDelete = (serial) => {
  return `DELETE FROM public.comments
	  WHERE serial = '${serial}'`;
}

const tableDone = (serial) => {
  return ` UPDATE public.comments
	  SET action='true'
	  WHERE serial= '${serial}'`;
}
  
  module.exports = {
    tableTest,
    tablePost,
    tableDelete,
    tableDone
  };