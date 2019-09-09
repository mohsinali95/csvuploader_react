import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Icon } from 'antd';
import "antd/dist/antd.css";

const data = [
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    {
        type: "Bank",
        batchId: "3382",
        createdDate: "Feb 26,2019",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        status: 'In Auditor Review',
        comment: 'Generator maintenance.'
    },
    // {
    //   key: '2',
    //   name: 'Joe Black',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    // },
    // {
    //   key: '3',
    //   name: 'Jim Green',
    //   age: 32,
    //   address: 'Sidney No. 1 Lake Park',
    // },
    // {
    //   key: '4',
    //   name: 'Jim Red',
    //   age: 32,
    //   address: 'London No. 2 Lake Park',
    // },
];

class ReportDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
        }
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
            </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
            </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {
        const columns = [
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                width: 100,
                ...this.getColumnSearchProps('type'),
            },
            {
                title: 'Batch ID',
                dataIndex: 'batchId',
                key: 'batchId',
                width: 120,
                ...this.getColumnSearchProps('batchId'),
            },
            {
                title: 'Created Date',
                dataIndex: 'createdDate',
                key: 'createdDate',
                width: 130,
                ...this.getColumnSearchProps('createdDate'),
            },
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category',
                width: 130,
                ...this.getColumnSearchProps('category'),
            },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: 200,
                ...this.getColumnSearchProps('name'),
            },
            {
                title: 'Mobile#',
                dataIndex: 'mobile',
                key: 'mobile',
                width: 150,
                ...this.getColumnSearchProps('mobile'),
            },
            {
                title: 'CNIC',
                dataIndex: 'cnic',
                key: 'cnic',
                width: 150,
                ...this.getColumnSearchProps('cnic'),
            },
            {
                title: 'Mobile Wallet',
                dataIndex: 'mobileWallet',
                key: 'mobileWallet',
                width: 100,
                ...this.getColumnSearchProps('mobileWallet'),
            },
            {
                title: 'Bank Name',
                dataIndex: 'bankName',
                key: 'bankName',
                width: 150,
                ...this.getColumnSearchProps('bankName'),
            },
            {
                title: 'IBAN',
                dataIndex: 'iban',
                key: 'iban',
                width: 200,
                ...this.getColumnSearchProps('iban'),
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                width: 130,
                ...this.getColumnSearchProps('amount'),
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
                width: 150,
                ...this.getColumnSearchProps('status'),
            },
            {
                title: 'Comment',
                dataIndex: 'comment',
                key: 'comment',
                width: 500,
                ...this.getColumnSearchProps('comment'),
            },
        ];
        return (
            <Table columns={columns} bordered dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 2500, y: 350 }} />
        );
    }
}

export default ReportDataTable;