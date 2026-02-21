const buttonListObject=[
    {
    id:1,
   name:"All",
    },{
        id:2,
        name:"Live"
    },{
        id:3,
        name:"Movies"
    },{
        id:4,
        name:"BollyWood Movies"
    },
    {
        id:5,
        name:"Songs"
    },{
        id:6,
        name:"Trending"
    },{
        id:7,
        name:"Food"
    },{
        id:8,
        name:"Cricket"
    },{
        id:9,
        name:"Cooking"
    },{
        id:10,
        name:"Shark Tank"
    },{
        id:11,
        name:"Comedy"
    }
    
]

import Button from "./Button"
export default function ButtonList() {
  return (
    <div className="flex overflow-x-auto">{
        buttonListObject.map((button)=>(
       
       <Button key={button.id} name={button.name}/>
        ))
    }</div>
  )
}
