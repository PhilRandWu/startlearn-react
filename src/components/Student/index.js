import { Table } from 'antd';
import './index.css'
import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchBox';
import { getStudents } from '../../server/Api/students';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
            {
                text: 'Joe',
                value: 'Joe',
            },
            {
                text: 'Category 1',
                value: 'Category 1',
            },
            {
                text: 'Category 2',
                value: 'Category 2',
            },
        ],
        filterMode: 'tree',
        filterSearch: true,
        onFilter: (value, record) => record.address.startsWith(value),
        width: '30%',
    },
    {
        title: 'Birth',
        dataIndex: 'birth',
        key: 'birth',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
            {
                text: <span>London</span>,
                value: 'London',
            },
            {
                text: <span>New York</span>,
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '40%',
    },
];

const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

async function fetchData() {
    const datas = await getStudents();
    return datas;
}

export default function Student() {
    const [studs, setStuds] = useState([]);
    useEffect(() => {
        fetchData().then(res => {
            setStuds(res);
        });
    }, [])

    return <div className='studentList'>
        <SearchBox />
        <Table columns={columns} dataSource={studs} onChange={onChange} rowKey={item=>item.id}/>
    </div>
};
