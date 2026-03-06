import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/counterSlice';
import type { RootState } from '../store';

export function ReduxTest() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Redux Counter Example</h2>
      <div className="text-4xl font-bold mb-6 text-center">{count}</div>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
}