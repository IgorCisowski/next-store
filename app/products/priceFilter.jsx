export default function PriceFilter() {
  return (
    <div className="flex w-full justify-between mb-8">
      <p>30 results</p>
      <div>
        <select>
          <option value="Price, low to high">Price, low to high</option>
          <option value="Price, high to low">Price, high to low</option>
        </select>
      </div>
    </div>
  );
}
