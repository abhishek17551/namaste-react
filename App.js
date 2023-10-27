{/* <div id='parent'>
    <div id='child'>
        <h1>Jai Shree Krishna _/\_</h1>
    </div>
</div> */}

const parent = React.createElement('div', {id:'parent'},React.createElement('div', {id:'child'}, [React.createElement('h1', {}, 'Jai Shree Krishna !!!') , React.createElement('h1', {}, 'Jai Ganesha !!!')]))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
