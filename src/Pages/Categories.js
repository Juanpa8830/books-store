import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(checkStatus('under construction'));
  };
  return (
    <div>
      <h2>{status}</h2>
      <button
        type="button"
        className="checkstbtn"
        onClick={onClick}
      >
        CHECK STATUS
      </button>
    </div>
  );
};

export default Categories;
