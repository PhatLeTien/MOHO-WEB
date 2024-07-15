import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Layout, Menu, Typography, theme, Table, Modal, Form, Input, Button } from 'antd';
import AdminImage from '../../images/logo-moho.webp';
import '../Admin2/DashboardPage.css';

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
// const items1 = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
//   }));
const labels = ['Người Dùng', 'Sản Phẩm', 'Đơn Hàng'];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = `sub${index + 1}`;
    return {
        key,
        icon: React.createElement(icon),
        label: labels[index],
        // children: new Array(1).fill(null).map((_, j) => {
        //     const subKey = index * 1 + j + 1;
        //     return {
        //         key: subKey,
        //         label: `option${subKey}`,
        //     };
        // }),
    };
});

// Sample data and columns for each subnav item
const userData = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
        phoneNumber: '1234567890'
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
        phoneNumber: '0987654321'
    },
];

const productData = [
    {
        key: '1',
        name: 'Laptop',
        price: '$1200',
        stock: 20
    },
    {
        key: '2',
        name: 'Phone',
        price: '$800',
        stock: 50
    },
];

const orderData = [
    {
        key: '1',
        orderId: '1234',
        customer: 'Mike',
        total: '$1200'
    },
    {
        key: '2',
        orderId: '5678',
        customer: 'John',
        total: '$800'
    },
];

const DashboardPage = () => {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [recordToEdit, setRecordToEdit] = useState(null);
    const [recordToDelete, setRecordToDelete] = useState(null);
    const [selectedMenuKey, setSelectedMenuKey] = useState('sub1'); // State to track the selected menu item

    const [dataSource, setDataSource] = useState(userData); // Default to user data

    const [form] = Form.useForm();

    const handleEdit = (record) => {
        setRecordToEdit(record);
        form.setFieldsValue(record);
        setEditModalVisible(true);
    };

    const handleDelete = (record) => {
        setRecordToDelete(record);
        setDeleteModalVisible(true);
    };

    const handleEditModalOk = () => {
        form.validateFields().then(values => {
            setDataSource(dataSource.map(item => item.key === recordToEdit.key ? { ...item, ...values } : item));
            setEditModalVisible(false);
            setRecordToEdit(null);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const handleDeleteModalOk = () => {
        setDataSource(dataSource.filter(item => item.key !== recordToDelete.key));
        setDeleteModalVisible(false);
        setRecordToDelete(null);
    };

    const handleModalCancel = () => {
        setEditModalVisible(false);
        setDeleteModalVisible(false);
        setAddModalVisible(false);
    };

    const handleMenuClick = ({ key }) => {
        setSelectedMenuKey(key);
        switch (key) {
            case 'sub1':
                setDataSource(userData);
                break;
            case 'sub2':
                setDataSource(productData);
                break;
            case 'sub3':
                setDataSource(orderData);
                break;
            default:
                break;
        }
    };

    const handleAddNewRecord = () => {
        setAddModalVisible(true);
        form.resetFields();
    };

    const handleAddModalOk = () => {
        form.validateFields().then(values => {
            const newRecord = { ...values, key: `${dataSource.length + 1}` };
            setDataSource([...dataSource, newRecord]);
            setAddModalVisible(false);
        }).catch(info => {
            console.log('Validate Failed:', info);
        });
    };

    const userColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const productColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const orderColumns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Actions',
            dataIndex: '',
            key: 'actions',
            render: (_, record) => (
                <span>
                    <Button type="link" icon={<EditOutlined />} style={{ marginRight: 16 }} onClick={() => handleEdit(record)}>Edit</Button>
                    <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record)}>Delete</Button>
                </span>
            ),
        },
    ];

    const getColumns = () => {
        switch (selectedMenuKey) {
            case 'sub1':
                return userColumns;
            case 'sub2':
                return productColumns;
            case 'sub3':
                return orderColumns;
            default:
                return [];
        }
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo">
                    <img src={AdminImage} alt="Logo" style={{ width: '200px', marginTop: '20px' }} />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ flex: 1, minWidth: 0 }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size="default" icon={<UserOutlined />} alt="User Avatar" style={{ marginRight: 16 }} />
                    <Text style={{ color: '#fff' }}>Lê Tiến Phát</Text>
                </div>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }} />
                <Layout style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['sub1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                            onClick={handleMenuClick} // Handle menu click
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: '77vh' }}>
                        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddNewRecord} style={{ marginBottom: 16 }}>
                            Add New
                        </Button>
                        <Table
                            dataSource={dataSource}
                            columns={getColumns()}
                            pagination={false}
                            rowSelection={{
                                type: 'checkbox',
                                onSelectAll: (selected, selectedRows, changeRows) => {
                                    console.log(selected, selectedRows, changeRows);
                                },
                            }}
                        />
                    </Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                PTGAMING ©{new Date().getFullYear()} Created by Ant UED
            </Footer>

            <Modal
                title="Chỉnh Sửa"
                visible={editModalVisible}
                onOk={handleEditModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form} layout="vertical">
                    {selectedMenuKey === 'sub1' && (
                        <>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input the age!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                    {selectedMenuKey === 'sub2' && (
                        <>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="stock" label="Stock" rules={[{ required: true, message: 'Please input the stock!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                    {selectedMenuKey === 'sub3' && (
                        <>
                            <Form.Item name="orderId" label="Order ID" rules={[{ required: true, message: 'Please input the order ID!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="customer" label="Customer" rules={[{ required: true, message: 'Please input the customer!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="total" label="Total" rules={[{ required: true, message: 'Please input the total!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                </Form>
            </Modal>

            <Modal
                title="Xóa"
                visible={deleteModalVisible}
                onOk={handleDeleteModalOk}
                onCancel={handleModalCancel}
            >
                <p>Bạn có chắc chắn muốn xóa bản ghi này không?</p>
            </Modal>

            <Modal
                title="Thêm Mới"
                visible={addModalVisible}
                onOk={handleAddModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form} layout="vertical">
                    {selectedMenuKey === 'sub1' && (
                        <>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Please input the age!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please input the address!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="phoneNumber" label="Phone Number" rules={[{ required: true, message: 'Please input the phone number!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                    {selectedMenuKey === 'sub2' && (
                        <>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input the name!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please input the price!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="stock" label="Stock" rules={[{ required: true, message: 'Please input the stock!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                    {selectedMenuKey === 'sub3' && (
                        <>
                            <Form.Item name="orderId" label="Order ID" rules={[{ required: true, message: 'Please input the order ID!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="customer" label="Customer" rules={[{ required: true, message: 'Please input the customer!' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="total" label="Total" rules={[{ required: true, message: 'Please input the total!' }]}>
                                <Input />
                            </Form.Item>
                        </>
                    )}
                </Form>
            </Modal>
        </Layout>
    );
};

export default DashboardPage;
