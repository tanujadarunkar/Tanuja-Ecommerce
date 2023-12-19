import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
// import Data from '../Data'
import Card from './card'
import './home.css'

const Home = ({search,handleClick,data}) => {
  return (
    <div>
        <main className="main">
            <img src="https://image.spreadshirtmedia.com/content/f_auto,q_80/v2/CMS/Startpage/Hero/christmas2023v2/Xmas23_HP2_desktop_NA/XmasHP2_23_HPteaser_desktop_NA.png" height={'600px'} width={'100%'} alt="" />
        </main>
        <main className="secimage">
        <img src="https://images01.nicepagecdn.com/page/47/81/website-template-preview-47818.webp" alt="" width={'100%'}/>
        </main>
        <Carousel>
                {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                    return(
                        <header key={item.id} style={{height:'600px', width:'80%', margin:'auto'}}>
                            <div>
                                 <img src={item.image} alt=""/>
                                 <p className="legend">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                    <p>{item.rating.rate}⭐</p>
                                    <button onClick={()=>handleClick(item)}>Add Cart</button>
                                 </p>
                            </div>
                        </header>
                    )
                })}
    </Carousel>

        <section className="sec">
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card key={item.id} item={item} handleClick={handleClick}/>
            )
        })}
        </section>
        </div>
  )
}
export default Home