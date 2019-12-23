import React, { Component } from 'react'
import data from './data'

const usersData = data.user;
class PopulatePage extends Component {
    render() {
        return (
			<div className="container">
			  <h2>Employee List Page:</h2>
			  <table className="table">
				<thead className="thead-dark">
				  <tr>
					<th>ID</th>
					<th>Name</th>
					<th>Age</th>
					<th>Gender</th>
					<th>Email</th>
					<th>Phone Number</th>
				  </tr>
				</thead>
				<tbody>
				    {
						usersData.map((users, index) => {
							return (
								<tr key={index}>
									<td>{users.id}</td>
									<td>{users.name}</td>
									<td>{users.age}</td>
									<td>{users.gender}</td>
									<td>{users.email}</td>
									<td>{users.phoneNo}</td>
								</tr>
							)
						})
					}
				</tbody>
			  </table>
			</div>
        )
    }
}

export default PopulatePage
