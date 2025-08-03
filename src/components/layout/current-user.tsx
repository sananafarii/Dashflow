import { Popover, Button } from 'antd';
import CustomAvatar from '../custom-avatar';
import { useGetIdentity } from '@refinedev/core';


import { User } from '@/graphql.schema.types';



function CurrentUser() {
  const {data: user } = useGetIdentity<User>();

  user.


  return (
    <>
    <Popover
      placement="bottomRight"
      trigger="click"
      arrow={false}
      zIndex={999}
    >
        <CustomAvatar
        name={user?.name}
        src={user?.avatarUrl}
        size={32}
        style={{ cursor : 'pointer' }}
         />


         
    </Popover> 
      
    </>
  )
}

export default CurrentUser;
