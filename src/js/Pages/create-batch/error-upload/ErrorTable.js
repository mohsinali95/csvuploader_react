import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Icon } from 'antd';
import "antd/dist/antd.css";


const data = [
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
    {
        type: "Bank",
        category: 'Vendor',
        name: 'Kaleem Khan',
        mobile: '',
        cnic: '',
        mobileWallet: '',
        bankName: 'Al Habib',
        iban: 'Pk 36 SCBL0000001123456702',
        amount: '1200',
        comment: 'Generator maintenance.',
        error: 'In Auditor Review'
    },
];

class ErrorTable extends Component {
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
            },
            {
                title: 'Mobile#',
                dataIndex: 'mobile',
                key: 'mobile',
                width: 150,
            },
            {
                title: 'CNIC',
                dataIndex: 'cnic',
                key: 'cnic',
                width: 150,
            },
            {
                title: 'Mobile Wallet',
                dataIndex: 'mobileWallet',
                key: 'mobileWallet',
                width: 100,
            },
            {
                title: 'Bank Name',
                dataIndex: 'bankName',
                key: 'bankName',
                width: 150,
            },
            {
                title: 'IBAN',
                dataIndex: 'iban',
                key: 'iban',
                width: 200,
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
                width: 130,
            },
            {
                title: 'Comment',
                dataIndex: 'comment',
                key: 'comment',
                width: 500,
            },
            {
                title: 'Errors',
                dataIndex: 'error',
                key: 'error',
                width: 500,
                render: (text, record) => (
                    <span className='text-danger'>
                        {record.error}
                    </span>
                ),
            },
        ];
        return (
            <Table size='small' columns={columns} title={() => <HeaderTitle total={244} errors={9}></HeaderTitle>} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ x: 'max-content', y: 350 }} />
        );
    }
}

export function HeaderTitle(props) {
    let { total, errors} = props
    return (
        <div className='row'>
            <div className='col-md-6 text-center'>
                <h5 className='text-success'>Total <span style={{fontSize: 30}}>{total}</span></h5>
            </div>
            <div className='col-md-6 text-center'>
                <h5 className='text-danger'>Errors <span style={{fontSize: 30}}>{errors}</span></h5>
            </div>
        </div>
    )
}

export default ErrorTable;