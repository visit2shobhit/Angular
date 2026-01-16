import e from "express"

export interface UserList {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface EmployeeList {
    empId: number,
    empName: string,
    empCode: string,
    empEmailId: string,
    empDesignation: string,
    role: string
}