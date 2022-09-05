import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const dropdownChange = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by Year</label>
                <select value={props.selected } onChange={dropdownChange}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    )
}
export default ExpenseFilter;

//sostoyaniyami form upravlyayet React eto nazyvaetsya upravlyaemym componentom
//hook state arkyluu upravlyayet

// Reacta componentalar ekige bolunot upravlyayemim jana ne upravlyayemoy
//jana eki turu bolot statefull jana stateless