
import { BlurCircle, Title } from '../components'
import { noteableDropsArray } from '../constants'
import NoteableTile from '../components/NoteableTile'


const NoteableDrops = () => {
  return (
    <section className='padding-section  relative flex flex-col gap-[80px]'>
        <Title heading={"Selected Noteable Drops"} />
        <BlurCircle css={" right-0 top-[150px]"} /> 
        <div className='flex justify-between items-center gap-[24px] relative z-10'>
            {noteableDropsArray.map((item)=>(
                
                <NoteableTile key={item.id} heading={item.heading}
                img={item.img}
                likes={item.likes}
                people={item.people}
                price={item.price}
                />
                
            ))}
        </div>
    </section>  
  )
}

export default NoteableDrops