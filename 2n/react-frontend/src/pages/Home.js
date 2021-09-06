
import Item from './../components/Item'


function Home(){
    return(
        <div>
            Koduleht
            <p></p>
            <Item name="Item1" price="10" category="mobile"/>
            <p></p>
            <Item name="Item2" price="100" category="food"/>
            <p></p>
            <Item name="Item3" price="1000" category="drink"/>
        </div>
    )
}

export default Home;