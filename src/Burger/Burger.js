import { useState } from 'react';
import './Burger.css'
import { Button, Grid, Dropdown } from '@nextui-org/react';



function Burger() {

    let [burger, setBurger] = useState([])


    const handleAdd = ingredient => {
        setBurger([ingredient, ...burger])
    }

    const remove = idx => {
        // console.log(e.target.className)
        // let idx = 3

        let newBurger = burger.filter((b, i) => i !== idx)

        setBurger(newBurger)


    }


    return (

        <>
         

            <section className="plate">

                {burger.map((ingredient, idx) =>
                    <div key={idx} onClick={() =>
                        remove(idx)} className={ingredient}>
                    </div>

                )}

            </section>



            <Grid.Container className="ingredient-selection">
                <Grid>
                    <Button ghost color='gradient' size='xs' onClick={() => handleAdd('top-bun')}>Top Bun</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('middle-bun')}>Middle Bun</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('bottom-bun')}>Bottom Bun</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('tomato')}>Tomato</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('cheese')}>Cheese</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('onion')}>Onion</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('beef')}>Beef</Button>
                </Grid>
                <Grid>
                    <Button ghost size='xs' color='gradient' onClick={() => handleAdd('lettuce')}>Lettuce</Button>
                </Grid>
            </Grid.Container>



        </>

    )
}

export default Burger