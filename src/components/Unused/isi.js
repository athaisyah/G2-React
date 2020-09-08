<tbody>{
  this.state.department.map((department, index) => {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td key={index}>{department}</td>
      </tr>
    );
  });
}</tbody>



/* ADD EMPLOYEE */

  // componentWillMount() {
  //   const employees = this.getEmployees();
  //   this.setState({
  //     employees: employees,
  //   });
  //   console.log(this.state);
  // }
  // getEmployees() {
  //   return this.state.employees;
  // }