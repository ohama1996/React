const List = ({list}) => {
  return (
    <>
    {!list || list.length === 0 ? <h2>No Students are here</h2>
                                : <h2>Here are the Students</h2>}
    {list && list.length > 0 && <ol className="list-disc ml-10 mt-5 text-xl">
     {list.map(item => <li key={item}>{item}</li>)}
    </ol>}
    </>
  );
}

export default List;