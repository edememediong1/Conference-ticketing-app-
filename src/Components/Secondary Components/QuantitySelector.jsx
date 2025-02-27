

function QuantitySelector({quantity, maxQuantity, onQuantityChange}) {
  return (
    <div>
        {/* <label htmlFor="quantity" className=""></label> */}
        <select 
        name="quantity" 
        id="quantity" 
        className="w-full border-[#07373F] border-[1px] p-[12px] rounded-[12px] outline-none font-roboto"
        value={quantity}
        onChange={(e)=> onQuantityChange(Number.parseInt(e.target.value))}
        >
            {[...Array(maxQuantity + 1).keys()].map((num) => (
                <option className="bg-[#07373F]" key={num} value={num}>{num}</option>
            ))}

        </select>
    </div>
  )
}

export default QuantitySelector