import { Popover, Button, Typography } from 'antd';
import CustomAvatar from '../custom-avatar';
import { useGetIdentity } from '@refinedev/core';
import { SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './current-user.css';

const { Text } = Typography;

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}



const CurrentUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {data: user } = useGetIdentity<User>();


const content = (
  <div className="current-user-popover-content" style={{
    display:'flex',
    flexDirection:'column',
    padding: 0,
  }}>
    <Text
    strong
    style={{padding: '12px 20px'}}
    >
      {user?.name}
    </Text>
    <div
    style={{
        borderTop:'1px solid #d9d9d9',
        padding: '4px',
        display: 'flex',
        flexDirection:'column',
        gap:'4px'
      }}
    
    >
      

    </div>

    <div>
      <Button
      style={{textAlign: 'left'}}
      icon={<SettingOutlined/>}
      type="text"
      block
      onClick={() => setIsOpen(true)}
      >
        Accounts Settings
      </Button>
    </div>
  </div>
)


  return (
    <>
    <Popover
      placement="bottomRight"
      trigger="click"
      arrow={false}
      overlayClassName="current-user-popover"
      content={content}
    >
        <CustomAvatar
        name={user?.name}
        style={{ cursor : 'pointer' }}
         />
    </Popover> 
    {user && (
      <AccountSettings
      
      />

    )}
    </>

  )
}

export default CurrentUser;
