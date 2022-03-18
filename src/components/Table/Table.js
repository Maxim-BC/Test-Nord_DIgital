import "./Table.css";
import TableItem from "./TableItem/TableItem";

export default function Table({ getTargetItem, list }) {
  const arrayUsers =
    list === null
      ? null
      : list.map((item) => {
          return (
            <TableItem
              key={item.id.toString()}
              id={item.id}
              name={item.name}
              username={item.username}
              email={item.email}
              getTargetItem={getTargetItem}
            />
          );
        });
  const result =
    arrayUsers === null ? (
      <p className="table-item__tr__loading">LOADING...</p>
    ) : (
      <table className="box-table">
        <caption className="box-table__caption">List of users</caption>
        <thead className="box-table__thead">
          <tr className="box-table__thead__tr">
            <th className="box-table__thead__tr__th">Name:</th>
            <th className="box-table__thead__tr__th">Username:</th>
            <th className="box-table__thead__tr__th">Email:</th>
          </tr>
        </thead>
        <tbody className="box-table__tbody">{arrayUsers}</tbody>
      </table>
    );

  return <>{result}</>;
}
