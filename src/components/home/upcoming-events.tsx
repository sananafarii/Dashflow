import React from 'react'
import  { Card } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { Text} from '../text'
import { useState } from 'react'
import { List } from 'antd'

const UpcomingEvents = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Card style={{height: '100%'}} 
      headStyle={{padding: '8px 16px'}}
      bodyStyle={{padding: '0 1rem'}}
      title={
        <div style={{
          display: 'flex',
          alignContent: 'center',
          gap: '8px'
        }}>
          <CalendarOutlined />
          <Text size="sm" style={{ marginLeft: "0.7rem"}}>
            Upcoming Events
          </Text>

        </div>
      } 
      > 
      {isLoading ? (
        <List
        itemLayout='horizontal'
        dataSource={Array.from({ length: 5}).map((_, index) => ({
          id: index,
        }))}
        
        >

        </List>
      ) : (
        <List>
          
        </List>
      )
      )}
      
      </Card>
  )
}

export default UpcomingEvents
