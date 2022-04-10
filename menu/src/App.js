import React, {useState} from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data';

const allCategories = ['all', ...new Set(items.map((items) => 
items.category))]


function App() {
  const [menuItems, setMenuIems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category)=> {
      if (category === 'all'){
        setMenuIems(items)
        return
      }
      const newItems =items.filter((items) => 
      items.category === category)
      setMenuIems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
