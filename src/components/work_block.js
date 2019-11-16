import React from 'react'
import { 
  Item, 
  Header, 
  Button 
} from 'semantic-ui-react';
import {
  getTenureString,
  getImgData
} from '../components/resume_utils'

const WorkBlock = ({
  name,
  position,
  startdate,
  enddate,
  city,
  state,
  details,
  tags,
}) => {

  const {
    logo,
    alt
  } = getImgData(name, {})

  const detailsArray = details.split(/\n/g)
  const tagsArray = tags.split(', ')
  return (
    <div>
      <Item.Group divided>
        <Item>
          <Item.Image size='tiny' src={logo} alt={alt}/>
          <Item.Content>
            <Item.Header as='a'>{position}</Item.Header>
            <Item.Meta><Header size='small'>{name}</Header></Item.Meta>
            <Item.Meta>{startdate} - {enddate ? enddate : 'Present'} &#183; {getTenureString(startdate, enddate)} </Item.Meta>
            <Item.Meta>{city}, {state}</Item.Meta>
            {detailsArray.map(detail => {
              return <Item.Description>{detail}</Item.Description>
            })}
            <Item.Extra>
              {tagsArray.map(tag => {
                return <Button basic>{tag}</Button>
              })}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <br />
    </div>
  )
}

export default WorkBlock