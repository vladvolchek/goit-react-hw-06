import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch()
  return (
    <div className="seachBox">
      Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e)=> dispatch(changeFilter(e.target.value))}
        />
      </div>
  );
};