import { render } from '@czechitas/render'
import { Header } from '../components/Header/header'
import { Intro } from '../components/Intro/intro'
import { Pose } from '../components/Pose/pose'
import '../pages/style.css'
import obrazek from '../img/yoga-pose.jpg'

const rootElement = document.querySelector('#root')

rootElement.innerHTML = render(
    <>
        <Header title="Jogini" />
        <Intro heading="Vítejte mezi Jogíny" text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
            něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
            Postupně se seznámíte se základními principy jógy, jak přístupovat k
            sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
            svoje tělo, pocity a emoce." />
        <Pose src={obrazek} />
    </>
);