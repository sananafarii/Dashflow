import { Popover, Button, Typography } from 'antd';
import CustomAvatar from '../custom-avatar';
import { useGetIdentity } from '@refinedev/core';
import { SettingOutlined } from '@ant-design/icons';

const { Text } = Typography;

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}



function CurrentUser() {
  const {isOpen, setIsOpen} = useState(false)
  const {data: user } = useGetIdentity<User>();


const content = (
  <div style={{
    display:'flex',
    flexDirection:'column',

  }}>
    <Text
    strong
    style={{padding: '12px 20px'}}
    
    >
      {user?.name}

    </Text>



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
    <Popover
      placement="bottomRight"
      trigger="click"
      arrow={false}
      zIndex={999}
      content={content}
    >
        <CustomAvatar
        name={user?.name}
        src={user?.avatarUrl}
        size={32}
        style={{ cursor : 'pointer' }}
         />
    </Popover> 
  )
}

export default CurrentUser;
