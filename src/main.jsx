import { createRoot } from 'react-dom/client'
import './index.css'
import 'tachyons'
import CardList from './CardList'
import { robots } from './robots'
 
 
createRoot(document.getElementById('root')).render(
    <CardList robots = {robots} />
)
