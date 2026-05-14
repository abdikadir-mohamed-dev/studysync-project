import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ setSearchTerm }) {
    return (
     <div className="mb-6 flex items-center gap-2 border border-gray-200 w-fit px-3 py-3 rounded-md  ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
           
            <input 
              type="text"
              placeholder="Search tasks" 
              className="text-xs outline-none w-48"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
     </div>
    )
}
export default Search;