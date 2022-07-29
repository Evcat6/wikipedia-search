import React, { useContext } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Link, Typography, Skeleton } from '@mui/material'
import FaWikipedia from '../Icons/FaWikipediaW';
import styles from './List.module.css';
import { ListContext } from '../../App'



const ListLinks = () => {

  const listData = useContext(ListContext)

    return ( 
      <div className={styles.container}>
        
        <List className={styles.list} >
          {listData ? listData.map((list) => 
              <ListItem style={{ height: '120px'}} key={list.id} className={styles.listItem} >
              <ListItemIcon>
                <Link color="inherit" href='https://www.wikipedia.org/' >
                  <FaWikipedia />
                </Link>  
            </ListItemIcon>
            <Link href={`https://en.wikipedia.org/?curid=${list.id}`}>
            <ListItemText
              primary={list.title}
              secondary={<Typography dangerouslySetInnerHTML={{__html: list.excerpt.slice(0, 100) + '...'}} ></Typography>}
              
              />
            </Link>
            </ListItem>  
          ):
          (<>
          <Skeleton animation="wave" height={118} />
          <Skeleton animation="wave" height={118} />
          <Skeleton animation="wave" height={118} />
          <Skeleton animation="wave" height={118} />
          </>
          )}
        </List>
      </div>
        
    );
}
 
export default ListLinks;