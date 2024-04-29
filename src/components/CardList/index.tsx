import React from 'react'
import Card from '../Card';

type Props = {
  itemList: string[];
}

export default function CardList({ itemList }: Props) {
  return (
    <div>
      {itemList.length ? 
        itemList.map((item, index) => 
        <Card key={index} title={item} />
        )  
    : <></>}

    </div>
  )
}