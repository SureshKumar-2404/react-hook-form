import React, { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                localStorage.setItem("users", JSON.stringify(response.data))
            } catch (error) {
                let collection = localStorage.getItem("users");
                setUsers(JSON.parse(collection));
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="bg-gray-100 p-4 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.phone}</p>
                        <p className="text-gray-600">{user.website}</p>
                        <div className="mt-2">
                            <p className="text-gray-700 font-semibold">Address:</p>
                            <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
                            <p className="text-gray-600">{user.address.city}, {user.address.zipcode}</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-gray-700 font-semibold">Company:</p>
                            <p className="text-gray-600">{user.company.name}</p>
                            <p className="text-gray-600">{user.company.catchPhrase}</p>
                            <p className="text-gray-600">{user.company.bs}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
