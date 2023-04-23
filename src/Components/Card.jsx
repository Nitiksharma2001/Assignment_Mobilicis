const App = ({ Users }) => (
  <table>
    <thead>
      <tr>
        <th>S.No. </th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Gender</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      {Users.map((value, key) => {
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{value.first_name}</td>
            <td>{value.last_name}</td>
            <td>{value.gender}</td>
            <td>{value.email}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
export default App;
