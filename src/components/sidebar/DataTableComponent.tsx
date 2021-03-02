import React, {useState} from "react";
import {EMPLOYEES} from "../../shared/Employees";
import {Card, CardBody, CardHeader, Table} from "reactstrap";
import Employee from "../../shared/Employee";

export default function DataTableComp() {
    const [employees, setEmployees] = useState(EMPLOYEES);

    const RenderEachEmployee = (props: any) => {
        const emp: Employee = props.emp;
        return <tr>
            <td>{emp.name}</td>
            <td>{emp.position}</td>
            <td>{emp.office}</td>
            <td>{emp.age}</td>
            <td>{emp.startdate}</td>
            <td>{emp.salary}</td>
        </tr>;
    }

    return (
        <Card className="shadow mb-4">
            <CardHeader className="py-3">
                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
            </CardHeader>
            <CardBody>
                <Table responsive>
                    <Table bordered id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <TableHeadOrFootLabel />
                        </thead>
                        <tfoot>
                            <TableHeadOrFootLabel />
                        </tfoot>
                        <tbody>
                        <RenderEachEmployee emp={employees[0]} />
                        </tbody>
                    </Table>
                </Table>
            </CardBody>
        </Card>
    );


    function TableHeadOrFootLabel() {
        return <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    }
}
