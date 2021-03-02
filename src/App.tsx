import React, {FormEvent} from 'react';
import './App.css';
import Login from "./components/LoginComponent";
import "./css/sb-admin-2.min.css";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Register from "./components/RegisterComponent";
import Dashboard from "./components/DashboardComponent";
import './course';
import {Course} from "./course";
import {Button} from "reactstrap";

type CourseState = {
    courses: Course[] | null,
    flag: boolean,
    search: string
}

class Hello extends React.Component<any, CourseState> {

    constructor(props: any) {
        super(props);
        this.state = {
            courses: null,
            flag: false,
            search: ""
        }
        this.toggleFetchCoursesStatus = this.toggleFetchCoursesStatus.bind(this);
        this.doFullTextSearch = this.doFullTextSearch.bind(this);
    }


    componentDidMount() {
        fetch("http://localhost:8080/admin/courses/all")
            .then(res => res.json())
            .then(resBody => {
                this.setState({courses: resBody})
            });
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("tôi đang chuẩn bị render");
    }

    toggleFetchCoursesStatus() {
        this.setState({flag: !this.state.flag});
        console.log(this.state.flag);

    }

    doFullTextSearch() {
        //@ts-ignore
        const searchText = document.getElementById("txtSearch").value;
        this.setState({search: searchText})
    }

    render() {
        return (
            <>
                <br/>
                Search: <input onChange={this.doFullTextSearch} type="text" id="txtSearch"/><br/><br/>
                <table style={{borderWidth: 5, borderColor: "#000000", borderStyle: "solid"}}>
                    <thead>
                    <tr id="123">
                        <td>ID</td>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Status</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses
                            ?.filter(c => c.disabled === this.state.flag)
                            .filter(c => c.name.includes(this.state.search))
                            .map(course => {
                                return (
                                    <tr id={course.id}>
                                        <td>
                                            {course.id}
                                        </td>
                                        <td>{course.name}</td>
                                        <td>{course.description}</td>
                                        <td>{course.disabled.toString()}</td>
                                    </tr>
                                );
                            })
                    }
                    </tbody>
                </table>
                <br/>
                <Button color="primary" onClick={this.toggleFetchCoursesStatus}>
                    Show disabled/enabled courses
                </Button>
            </>
        );
    }
}

export default function App() {
    return (
        <Hello/>
        /*  <BrowserRouter>
            <Switch>
                <Route path="/" component={Dashboard}/>
                <Route exact path="/login" component={Login}/>
                <Route path="/register" component={Register} />
                <Redirect to="/" />
            </Switch>
          </BrowserRouter>*/

    );
}
